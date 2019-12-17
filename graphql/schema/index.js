// This is where the root schema is built.
const { buildSchema } = require("graphql");

module.exports = buildSchema(`

    interface Team {
        id: String!
        score: Int!
        name: String!
    }

    interface Game {
        home: Team!
        away: Team!
    }

    interface Tournament {
        id: String!
        games: [Game!]!
    }

    input Games{
        games: [Game!]!
    }

    type Queries {
        test: String!
        getTournament(id: String!): Tournament!
    }

    type Mutations {
        test: String!
        updateScore(id: String!, score: Int!): Game!
        createTournament(games: Games!): String!

    }
   
    schema {
        query: Queries
        mutation: Mutations
    }

`);
