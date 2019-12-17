const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tournamentSchema = new Schema(
    {
        name: String,
        games: [
            {
                home: {
                    id: String,
                    score: Number,
                    name: String
                },
                away: {
                    id: String,
                    score: Number,
                    name: String
                }
            }
        ]

    }

);

module.exports = mongoose.model("tournament", tournamentSchema);
