const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Team = new Schema(
  {
    // value: { type: Number, required: true },
    team_Name: { type: String, required: true },
    manager_Name: { type: String, required: true },
    players: [{ type: Schema.Types.ObjectId, ref: 'players' }]
  },
  { timestamps: true }
);

module.exports = mongoose.model('teams', Team);
