// This is the root resolver. All resolvers will run through this.


// EXAMPLE:
const testResolver = require('./test');
const getTournament = require('./getTournament')
const createTournament = require('./createTournament')

const resolvers = {
  ...testResolver,
  ...getTournament,
  ...createTournament
};

module.exports = resolvers;
