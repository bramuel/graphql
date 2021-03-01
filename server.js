const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('schema')
const app = express()

app.use('/graphql', graphqlHTTP({
    schema:MyGraphQLSchema,
    graphiql:true
}))
 
app.listen(3000,()=>{
    console.log('Server running on http://localhost:3000/')
})