// This is where the root schema is built.
const { buildSchema } = require("graphql");

module.exports = buildSchema(`

    input TeamIn {
        id: String!
        score: Int!
        name: String!
    }

    type TeamOut {
        id: String!
        score: Int!
        name: String!
    }

    input TournamentIn {
        games: [TeamIn!]!
    }

    type TournamentOut {
        id: String!
        teams: [TeamOut!]!
    }

    type Queries {
        test: String!
        getTournament(id: String!): TournamentOut!
    }

    type Mutations {
        updateScore(id: String!, score: Int!): TeamOut!
        createTournament(teams: TournamentIn!): TournamentOut!

    }
   
    schema {
        query: Queries
        mutation: Mutations
    }

`);
