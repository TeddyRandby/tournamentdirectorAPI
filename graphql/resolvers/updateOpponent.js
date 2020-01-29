const Tournament = require("../models/tournament");

module.exports = {
    updateOpponent: async args => {
        try {
            let data = {};
            const {id, teams} = await Tournament.findOne().where("teams").elemMatch({ _id: args.team_id});
            teams.forEach( team => {
                if ( team._id == args.team_id ) {
                    team.opponent = args.opp_id;
                    data = team;
                }
            })
            await Tournament.findOneAndUpdate({teams:teams}, {useFindAndModify:false}).where("teams").elemMatch({ _id: args.team_id})
            return data;
        } catch(err) {
            console.log(err);
        throw err;
        }
    }
}