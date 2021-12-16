const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Team = new Schema(
  {
    // could refactor this following u2_lesson_mongoose_associations later:
    // players: [{ type: Schema.Types.ObjectId, ref: 'players' }],
    // value: { type: Number, required: true },
    team_Name: { type: String, required: true },
    manager_Name: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('teams', Team);
