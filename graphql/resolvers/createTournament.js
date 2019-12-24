const Tournament = require("../models/tournament");

module.exports = {
  createTournament: async args => {
    try {
        console.log(...args.teams.teams)
      const data = await Tournament.create({
        ...args.teams.teams
      });
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
