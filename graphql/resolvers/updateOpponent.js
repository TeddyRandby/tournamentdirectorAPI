const Tournament = require("../models/tournament");

module.exports = {
    updateOpponent: async args => {
        try {
            let data = {};
            const {id, teams} = await Tournament.findOne().where("teams").elemMatch({ _id: args.team_id});
            console.log(args.opp_id);
            teams.forEach( team => {
                if ( team._id == args.team_id ) {
                    team.opponent = args.opp_id;
                    data = team;
                } else if (team._id == args.opp_id ) {
                    team.opponent = args.team_id;
                }
            })
            await Tournament.where("teams").elemMatch({ _id: args.team_id}).updateOne({teams:teams})
            return data;
        } catch(err) {
            console.log(err);
        throw err;
        }
    }
}