const Tournament = require("../models/tournament");

module.exports = {
    updateOpponent: async args => {
        try {
            let data = {};
            const {id, teams} = await Tournament.findById(args._id);
            teams.forEach( team => {
                if ( team._id == args.team_id ) {
                    team.opponent = args.opponent;
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