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

    type rootQuery {
        test: String!
    }

    type rootMutation {

    }

    schema {
        query: rootQuery
        mutation: rootMutation
    }


`);
