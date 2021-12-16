const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is root!'));

router.get('/players', controllers.getAllPlayers);

router.get('/players/:team_Id', controllers.getPlayersOnTeam);

router.get('/teams', controllers.getAllTeams);

router.get('/teams/details/:_id', controllers.getTeamById);

router.post('/teams', controllers.createTeam);

router.post('/players', controllers.createPlayer);

router.delete('/players/details/:_id', controllers.deletePlayer);

router.delete('/teams/details/:_id', controllers.deleteTeam);

module.exports = router;
