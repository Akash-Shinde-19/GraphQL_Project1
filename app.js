const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema')

const app = express();

///*
const mongoose = require('mongoose');

//mongoose.connect('mongodb://<dbuser>:<dbpassword>@<MongoDB URI>')
mongoose.connect('mongodb://akash:akash%40123@127.0.0.1:27017/akash?authSource=admin')

mongoose.connection.once('open', () => {
    console.log('conneted to database');
});
//*/

//This route will be used as an endpoint to interact with Graphql, 
//All queries will go through this route. 
app.use('/graphql', graphqlHTTP({
    //directing express-graphql to use this schema to map out the graph 
    schema,
    //directing express-graphql to use graphiql when goto '/graphql' address in the browser
    //which provides an interface to make GraphQl queries
    graphiql:true
}));

app.listen(3000, () => {
    console.log('Listening on port 3000');
});