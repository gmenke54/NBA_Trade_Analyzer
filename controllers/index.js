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
// more efficient way to get all the players on a team:
const getPlayersOnTeam = async (req, res) => {
  try {
    const { team_Id } = req.params;
    const players = await Player.find({ team_Id });
    return res.status(200).json({ players });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find();
    return res.status(200).json({ teams });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteTeam = async (req, res) => {
  try {
    const { _id } = req.params;
    const deleted = await Team.findByIdAndDelete(_id);
    if (deleted) {
      return res.status(200).send('Team deleted');
    }
    throw new Error('Team not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deletePlayer = async (req, res) => {
  try {
    const { _id } = req.params;
    const deleted = await Player.findByIdAndDelete(_id);
    if (deleted) {
      return res.status(200).send('Player deleted');
    }
    throw new Error('Player not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateTeam = async (req, res) => {
  try {
    const { _id } = req.params;
    await Team.findByIdAndUpdate(_id, req.body, { new: true }, (err, team) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!team) {
        res.status(500).send('Team not found!');
      }
      return res.status(200).json(team);
    });
  } catch (error) {}
};

module.exports = {
  createTeam,
  createPlayer,
  getTeamById,
  getAllPlayers,
  getAllTeams,
  getPlayersOnTeam,
  deleteTeam,
  deletePlayer,
  updateTeam
};
