const bcrypt = require('bcryptjs')
const Admin = require('../../models/admin')
const jwt = require('jsonwebtoken')

module.exports = {
  createAdmin: async (args) => {
    try {
      const existingAdmin = await Admin.findOne({
        email: args.adminInput.email,
      })
      if (existingAdmin) {
        throw new Error('Admin exists already.')
      }
      const hashedPassword = await bcrypt.hash(args.adminInput.password, 12)
      const confirmHashedPassword = await bcrypt.hash(
        args.adminInput.confirmPassword,
        12,
      )
      const admin = new Admin({
        email: args.adminInput.email,
        password: hashedPassword,
        confirmPassword: confirmHashedPassword,
      })
      const result = await admin.save()
      return { ...result._doc, password: null, confirmPassword: null }
    } catch (err) {
      throw err
    }
  },
  adminLogin: async ({ email, password, confirmPassword }) => {
    const admin = await Admin.findOne({ email: email })
    if (!admin) {
      throw new Error('Admin does not exist')
    }
    const isEqual = await bcrypt.compare(password, admin.password)
    if (!isEqual) {
      throw new Error('Password is incorrect!')
    }
    const passwordMatch = await bcrypt.compare(
      confirmPassword,
      admin.confirmPassword,
    )
    if (!passwordMatch) {
      throw new Error('Passwords do not match!')
    }
    const token = jwt.sign(
      { adminId: admin.id, email: admin.email },
      'secretkey',
      {
        expiresIn: '1h',
      },
    )
    return {
      adminId: admin.id,
      token: token,
      tokenExpiration: 1,
    }
  },
}
