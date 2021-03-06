const Tournament = require("../models/tournament");

module.exports = {
    getGame: async args => {
        try {
            let data = {};
            const {name,teams} = await Tournament.findOne().where("teams").elemMatch({ _id: args.team_id});
            teams.forEach( team => {
                if ( team._id == args.team_id ) {
                    data.home = team;
                }
            })
            teams.forEach(team => {
                if( team._id == data.home.opponent){
                    data.away = team
                }
            })
            data.name = name
            return data;
        } catch(err) {
            console.log(err);
        throw err;
        }
    }
}