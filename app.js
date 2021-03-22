const express = require('express')
const graphqlHttp = require('express-graphql').graphqlHTTP
const mongoose = require('mongoose')
const graphQlSchema = require('./graphlql/schema/index')
const graphQlResolvers = require('./graphlql/resolvers/index')

const app = express()

app.use(express.json())

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
    app.listen(3000)
  })
  .catch((err) => {
    console.log(err)
  })
