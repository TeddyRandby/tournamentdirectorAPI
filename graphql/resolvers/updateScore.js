const Tournament = require("../models/tournament");

module.exports = {
    updateScore: async args => {
        try{
            const {id, teams} = await Tournament.findById(args._id);
            teams.forEach( team => {
                if ( team._id === args.team_id ) {
                    team.score = args.score;
                }
            })
            const data = await Tournament.findByIdAndUpdate(args._id, {teams: teams}) 
            return data;
        } catch(err) {
            console.log(err);
        throw err;
        }
    }
}