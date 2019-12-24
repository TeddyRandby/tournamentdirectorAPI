const Tournament = require("../models/tournament");

module.exports = {
    updateScore: async args => {
        try{
            const {id, teams} = await Tournament.findById(args._id);
            console.log(teams);
            return teams;
        } catch(err) {
            console.log(err);
        throw err;
        }
    }
}