const Tournament = require("../models/tournament");

module.exports = {
  createTournament: async args => {
    try {
      if (!(await Tournament.findOne().where({name: args.name}))){
      const data = await Tournament.create({
        name: args.tournament.name,
        teams: args.tournament.teams
      });
      return data;
    } else {
      throw Error("That tournament name is taken")
    }
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
