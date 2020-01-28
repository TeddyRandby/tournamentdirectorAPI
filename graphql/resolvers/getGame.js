const Tournament = require("../models/tournament");

module.exports = {
    updateScore: async args => {
        try {
            let data = {};
            const {id, team} = await Tournament.findById(args._id);
            console.log(team);
            return data;
        } catch(err) {
            console.log(err);
        throw err;
        }
    }
}