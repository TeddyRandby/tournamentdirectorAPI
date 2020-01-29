// This is where the root schema is built.
const { buildSchema } = require("graphql");

module.exports = buildSchema(`

    input TeamIn {
        score: Int!
        name: String!
        opponent: String!
    }

    type TeamOut {
        _id: String!
        score: Int!
        name: String!
        opponent: String!
    }

    type GameOut {
        name: String!
        home: TeamOut!
        away: TeamOut!
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
        getGame(team_id: String!): GameOut!
    }

    type Mutations {
        updateScore(team_id: String!, score: Int!): TeamOut!
        createTournament(teams: TournamentIn!): TournamentOut!
        updateOpponent(team_id: String!, opp_id: String!): TeamOut!
    }
   
    schema {
        query: Queries
        mutation: Mutations
    }

`);
