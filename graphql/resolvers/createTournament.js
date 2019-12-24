const Tournament = require("../models/tournament");

module.exports = {
  createTournament: async args => {
    try {
      var teams = args.teams.reduce((obj, item) => (obj[item.name] = item, obj) ,{});
      const data = await Tournament.create({
        teams: teams
      });
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
