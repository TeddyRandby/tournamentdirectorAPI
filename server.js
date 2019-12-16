const express = require('express');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', graphqlHttp({
  
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
  
  }));

  