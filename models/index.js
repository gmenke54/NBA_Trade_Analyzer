const mongoose = require('mongoose');
const TeamSchema = require('./Team');
const PlayerSchema = require('./Player');

const Team = mongoose.model('teams', TeamSchema);
const Player = mongoose.model('players', PlayerSchema);

module.exports = {
  Team,
  Player
};
