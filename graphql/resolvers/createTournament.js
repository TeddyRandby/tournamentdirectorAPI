const Tournament = require("../models/tournament");

module.exports = {
  createTournament: async args => {
    try {
      const data = await Tournament.create({
        name: args.tournament.name,
        teams: args.tournament.teams
      });
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
