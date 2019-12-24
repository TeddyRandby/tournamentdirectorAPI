const Tournament = require("../models/tournament");

module.exports = {
getTournament: async args => {
    console.log("get tournament");
    try {
        const tournament = await Tournament.find({
            id: args.id
        })
        return tournament;
    } catch (err) {
        console.log(err);
        throw err;
    }
}
}