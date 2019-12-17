// This is where the root schema is built.
const { buildSchema } = require("graphql");

module.exports = buildSchema(`

    type Team {
        id: String!
        score: Int!
        name: String!
    }

    
    type Game {
        home: Team!
        away: Team!
    }

    type Tournament {
        id: String!
        games: [Game!]!
    }

    type Queries {
        test: String!
    }

    type Mutations {
        test: String!
    }
   
    schema {
        query: Queries
        mutation: Mutations
    }

`);
