const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tournamentSchema = new Schema({
  name: String,
  teams: [
    {
      _id: String,
      score: Number,
      name: String
    }
  ]
});

module.exports = mongoose.model("tournament", tournamentSchema);
