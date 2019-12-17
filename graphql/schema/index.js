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
        getTournament(id: String!): Tournament!
    }

    type Mutations {
        test: String!
        updateScore(id: String!, score: Int!): Game!
    }
   
    schema {
        query: Queries
        mutation: Mutations
    }

`);
