const Tournament = require("../models/tournament");

module.exports = {
    updateScore: async args => {
        try{
            const team = await Tournament.find({_id: args._id})
            
        } catch(err) {
            console.log(err);
        throw err;
        }
    }
}