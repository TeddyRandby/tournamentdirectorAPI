const Tournament = require("../models/tournament");

module.exports = {
    updateScore: async args => {
        try {
            let data = {};
            const {id, teams} = await Tournament.findById(args._id);
            teams.forEach( team => {

                if ( team._id == args.team_id ) {
                    console.log(team);
                    team.score = args.score;
                    console.log(team);
                    data = team;
                }
            })
            await Tournament.findByIdAndUpdate(args._id, {teams: teams}, {useFindAndModify: false}) 
            return data;
        } catch(err) {
            console.log(err);
        throw err;
        }
    }
}