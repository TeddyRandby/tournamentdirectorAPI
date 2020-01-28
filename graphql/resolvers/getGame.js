const Tournament = require("../models/tournament");

module.exports = {
    getGame: async args => {
        try {
            let data = {};
            const {id, teams} = await Tournament.find({"teams":{"$elemMatch": {"_id":{"$oid":args.team_id}}}});
            console.log(teams);
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
            console.log(data);
            return data;
        } catch(err) {
            console.log(err);
        throw err;
        }
    }
}