const Tournament = require("../models/tournament");

module.exports = {
    updateScore: async args => {
        try{
            const team = await Tournament.findByIdAndUpdate(args._id,{score: args.score})
            return team;
        } catch(err) {
            console.log(err);
        throw err;
        }
    }
}