const db = require('../db');
const Team = require('../models/team');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const teams = [
    {
      team_Name: 'TeamA',
      manager_Name: 'Grant'
    },
    {
      team_Name: 'TeamB',
      manager_Name: 'Jason'
    }
  ];

  await Team.insertMany(teams);
  console.log('Created teams!');
};

const run = async () => {
  await main();
  db.close();
};

run();
