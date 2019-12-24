const Tournament = require("../models/tournament");

module.exports = {
getTournament: async args => {
    try {

        const tournament = await Tournament.find({
            id: args._id
        })
        return tournament;
    } catch (err) {
        console.log(err);
        throw err;
    }
}
}