const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tournamentSchema = new Schema({
  name: String,
  teams: [
    {
      score: Number,
      name: String,
      opponent: String
    }
  ]
});

module.exports = mongoose.model("tournament", tournamentSchema);
