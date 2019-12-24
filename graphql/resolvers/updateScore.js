const Tournament = require("../models/tournament");

module.exports = {
    updateScore: async args => {
        try{
            const team = await Tournament.findOneAndUpdate({"_id": args._id, "teams._id": args.team_id}, {score: args.score})
            console.log(team);
            return team;
        } catch(err) {
            console.log(err);
        throw err;
        }
    }
}