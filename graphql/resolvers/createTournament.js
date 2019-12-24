const Tournament = require("../models/tournament");

module.exports = {
  createTournament: async args => {
    try {
      var newTournament = {};
      await Tournament.create(
        {
          teams: args.teams.teams
        },
        function(err, tournament) {
          if (err) {
            console.log(err);
            return handleError(err);
          } else {
            newTournament = tournament;
            console.log(newTournament);
          }
        }
      );
      console.log(newTournament);
      return newTournament;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
