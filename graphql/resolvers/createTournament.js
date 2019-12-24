const Tournament = require("../models/tournament");

module.exports = {
  createTournament: async args => {
    try {
      const data = await Tournament.create(
        {
          teams: args.teams.teams
        },
        function(err, tournament) {
          if (err) {
            console.log(err);
            return handleError(err);
          } else {
            console.log(tournament);
            return tournament._id;
          }
        }
      )
      console.log(data);
      
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
