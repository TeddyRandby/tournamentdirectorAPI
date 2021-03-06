// This is the root resolver. All resolvers will run through this.


const testResolver = require('./test');
const getTournament = require('./getTournament')
const createTournament = require('./createTournament')
const updateScore = require('./updateScore')
const updateOppoonent = require('./updateOpponent')
const getGame = require('./getGame')
const getTournamentName = require('./getTournamentName')

const resolvers = {
  ...testResolver,
  ...getTournament,
  ...createTournament,
  ...updateScore,
  ...updateOppoonent,
  ...getGame,
  ...getTournamentName
};

module.exports = resolvers;
