const bcrypt = require('bcryptjs')
const User = require('../../models/user')
const jwt = require('jsonwebtoken')

module.exports = {
  createUser: async (args) => {
    try {
      const existingUser = await User.findOne({
        email: args.userInput.email,
      })
      if (existingUser) {
        throw new Error('User exists already.')
      }
      const hashedPassword = await bcrypt.hash(args.userInput.password, 12)
      const confirmHashedPassword = await bcrypt.hash(
        args.userInput.confirmPassword,
        12,
      )
      const user = new User({
        email: args.userInput.email,
        password: hashedPassword,
        confirmPassword: confirmHashedPassword,
      })
      const result = await user.save()
      return { ...result._doc, password: null, confirmPassword: null }
    } catch (err) {
      throw err
    }
  },
  login: async ({ email, password, confirmPassword }) => {
    const user = await User.findOne({ email: email })
    if (!user) {
      throw new Error('User does not exist')
    }
    const isEqual = await bcrypt.compare(password, user.password)
    if (!isEqual) {
      throw new Error('Password is incorrect!')
    }
    const passwordMatch = await bcrypt.compare(
      confirmPassword,
      user.confirmPassword,
    )
    if (!passwordMatch) {
      throw new Error('Passwords do not match!')
    }
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      'secretkey',
      {
        expiresIn: '1h',
      },
    )
    return {
      userId: user.id,
      token: token,
      tokenExpiration: 1,
    }
  },
}
