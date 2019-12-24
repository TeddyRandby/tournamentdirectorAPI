const Tournament = require("../models/tournament");

module.exports = {
    updateScore: async args => {
        try {
            let data = {};
            const {id, teams} = await Tournament.findById(args._id);
            console.log(teams);
            teams.forEach( team => {
                console.log(team._id)
                console.log(args.team_id)
                if ( team._id === args.team_id ) {
                    team.score = args.score;
                    data = team;
                    console.log(team);
                }
            })
            await Tournament.findByIdAndUpdate(args._id, {teams: teams}, {useFindAndModify: false}) 
            console.log(data);
            return data;
        } catch(err) {
            console.log(err);
        throw err;
        }
    }
}