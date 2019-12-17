const Tournament = require("../models/tournament");

module.exports = {
  getTournament: async args => {
    try {
        Tournament.create({
            teams: args.teams
        }, function (err, tournament) {
            if (err) return handleError(err);
            return tournament
        });
    } catch (err) {
        console.log(err)
        throw err;
    }
  }
};
