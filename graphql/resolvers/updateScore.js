const Tournament = require("../models/tournament");

module.exports = {
    updateScore: async args => {
        try{
            const [,teams] = await Tournament.findById(args._id);
            
            console.log(team);
            return team;
        } catch(err) {
            console.log(err);
        throw err;
        }
    }
}