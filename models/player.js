const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Player = new Schema(
  {
    // refactor with data from external API:
    // rating: { type: Number, required: true },
    // position: { type: String, required: true },
    name: { type: String, required: true },
    team_Id: { type: Schema.Types.ObjectId, ref: 'teams' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('players', Player);
