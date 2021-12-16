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

module.exports = {
  createTeam
};
