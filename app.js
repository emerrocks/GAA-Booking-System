const express = require('express')
const graphqlHttp = require('express-graphql').graphqlHTTP
const mongoose = require('mongoose')
const graphQlSchema = require('./graphlql/schema/index')
const graphQlResolvers = require('./graphlql/resolvers/index')
const isAuth = require('./middleware/is-auth')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  next()
})

app.use(isAuth)

app.use(
  '/api',
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true,
  }),
)

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.evofz.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
  )
  .then(() => {
    app.listen(8080)
  })
  .catch((err) => {
    console.log(err)
  })
