const Tournament = require("../models/tournament");

module.exports = {
  getTournament: async args => {
    try {
        Tournament.create({
            games: args.games
        }, function (err, tournament) {
            if (err) return handleError(err);
            return "Success"
        });
    } catch (err) {
        console.log(err)
        throw err;
    }


  }
};
