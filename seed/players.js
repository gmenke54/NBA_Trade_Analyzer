const db = require('../db');
const Player = require('../models/player');
const Team = require('../models/team');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const teamA = await Team.find({ team_Name: 'TeamA' });
  const teamB = await Team.find({ team_Name: 'TeamB' });

  const players = [
    {
      name: 'Donovan Mitchell',
      team_Id: teamA[0]._id
    },
    {
      name: 'Anthony Edwards',
      team_Id: teamA[0]._id
    },
    {
      name: 'Clint Capela',
      team_Id: teamA[0]._id
    },
    {
      name: 'Kyle Lowry',
      team_Id: teamB[0]._id
    },
    {
      name: 'James Harden',
      team_Id: teamB[0]._id
    },
    {
      name: 'Jrue Holiday',
      team_Id: teamB[0]._id
    }
  ];

  await Player.insertMany(players);
  console.log('Created players!');
};

const run = async () => {
  await main();
  db.close();
};

run();
