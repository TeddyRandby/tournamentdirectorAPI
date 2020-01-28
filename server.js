const express = require('express');
const graphqlHttp = require('express-graphql');
const cors = require('cors');
const graphqlSchema = require('./graphql/schema/index');
const graphqlResolver = require('./graphql/resolvers/index');
const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI;
const port = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', graphqlHttp({
  
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
  
  }));
  
  mongoose
  .connect(
    mongoURI, {
      useNewUrlParser: true
    }
  ).then(() => {
    app.listen(port, () => console.log(`Tournament Director API listening on port ${port}!`))
  })
  .catch( err => {
    console.log(err);
  });

  mongoose.set('debug',true)
