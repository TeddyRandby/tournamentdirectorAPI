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
        opponenent: String!
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
        getTournament(_id: String!): TournamentOut!
    }

    type Mutations {
        updateScore(_id: String!, team_id: String!, score: Int!): TeamOut!
        createTournament(teams: TournamentIn!): TournamentOut!
        updateOpponent(_id: String!, team_id: String!, opp_id: String!): TeamOut!
    }
   
    schema {
        query: Queries
        mutation: Mutations
    }

`);
