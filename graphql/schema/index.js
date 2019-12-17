// This is where the root schema is built.
const { buildSchema } = require("graphql");

module.exports = buildSchema(`

    type Team {
        id: String!
        score: Number!
        name: String!
    }

    type Game {
        home: Team!
        away: Team!
    }

    input GameMutation {
        team: Team!
    }

    input Tournament {
        id: Number!
        games: [Game!]!
    }

    type rootQuery {
        test: String!
    }

    schema {
        query: rootQuery
    }


`);
