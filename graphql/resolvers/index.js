// This is the root resolver. All resolvers will run through this.


const testResolver = require('./test');
const getTournament = require('./getTournament')
const createTournament = require('./createTournament')
const updateScore = require('./updateScore')

const resolvers = {
  ...testResolver,
  ...getTournament,
  ...createTournament,
  ...updateScore
};

module.exports = resolvers;
