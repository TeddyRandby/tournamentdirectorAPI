const Tournament = require("../models/tournament");

module.exports = {
getTournament: async args => {
    try {
        console.log(args);
        const tournament = await Tournament.find({
            _id: args._id
        })
        return tournament;
    } catch (err) {
        console.log(err);
        throw err;
    }
}
}