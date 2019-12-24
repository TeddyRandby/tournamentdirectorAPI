// This is where the root schema is built.
const { buildSchema } = require("graphql");

module.exports = buildSchema(`

    input TeamIn {
        score: Int!
        name: String!
    }

    type TeamOut {
        _id: String!
        score: Int!
        name: String!
    }

    input TournamentIn {
        teams: [TeamIn!]!
    }

    type TournamentOut {
        _id: String!
        teams: [TeamOut!]!
    }

    type Queries {
        test: String!
        getTournament(id: String!): TournamentOut!
    }

    type Mutations {
        updateScore(id: String!, score: Int!): TeamOut!
        createTournament(teams: TournamentIn!): String!

    }
   
    schema {
        query: Queries
        mutation: Mutations
    }

`);
