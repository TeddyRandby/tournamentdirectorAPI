const Tournament = require("../models/tournament");

module.exports = {
  getTournamentName: async args => {
    try {
      const tournament = await Tournament.find().where({name: args.name});
      return tournament;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
