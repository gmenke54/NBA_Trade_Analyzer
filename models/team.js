const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Team = new Schema(
  {
    team_Name: { type: String, required: true },
    manager_Name: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('teams', Team);
