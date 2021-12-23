const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Player = new Schema(
  {
    name: { type: String, required: true },
    team_Id: { type: Schema.Types.ObjectId, ref: 'teams' },
    api_Id: { type: Number, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('players', Player);
