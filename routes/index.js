const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is root!'));

router.get('/players', controllers.getAllPlayers);

router.get('/teams/details/:_id', controllers.getTeamById);

router.post('/teams', controllers.createTeam);

router.post('/players', controllers.createPlayer);

module.exports = router;
