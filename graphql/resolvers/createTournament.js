const Tournament = require("../models/tournament");

module.exports = {
  createTournament: async args => {
    try {
      const data = await Tournament.create({
        teams: args.teams.teams
      });
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
