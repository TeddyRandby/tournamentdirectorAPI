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

    input GameIn {
        home: TeamIn!
        away: TeamIn!
    }

    type GameOut {
        home: TeamOut!
        away: TeamOut!
    }

    input TournamentIn {
        id: String!
        games: [GameIn!]!
    }

    type TournamentOut {
        id: String!
        games: [GameOut!]!
    }

    input GamesIn{
        games: [GameIn!]!
    }

    type GamesOut{
        games: [GameOut!]!
    }

    type Queries {
        test: String!
        getTournament(id: String!): TournamentOut!
    }

    type Mutations {
        updateScore(id: String!, score: Int!): GameOut!
        createTournament(games: GamesIn!): String!

    }
   
    schema {
        query: Queries
        mutation: Mutations
    }

`);
