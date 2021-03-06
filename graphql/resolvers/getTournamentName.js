const Tournament = require("../models/tournament");

module.exports = {
  getTournamentName: async args => {
    try {
      const tournament = await Tournament.findOne().where({name: args.name});
      console.log(tournament);
      return tournament;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
