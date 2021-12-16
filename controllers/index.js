const Team = require('../models/team');
const Player = require('../models/player');

const createTeam = async (req, res) => {
  try {
    const team = await new Team(req.body);
    await team.save();
    return res.status(201).json({
      team
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const createPlayer = async (req, res) => {
  try {
    const player = await new Player(req.body);
    await player.save();
    return res.status(201).json({
      player
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getTeamById = async (req, res) => {
  try {
    const { _id } = req.params;
    const team = await Team.findById(_id);
    if (team) {
      return res.status(200).json({ team });
    }
    return res.status(404).send(`Team with the specified ID does not exist`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    return res.status(200).json({ players });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createTeam,
  createPlayer,
  getTeamById,
  getAllPlayers
};
