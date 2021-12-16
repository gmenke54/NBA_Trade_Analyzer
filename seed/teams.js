const db = require('../db');
const Team = require('../models/team');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const teams = [
    {
      team_Name: 'Fields of Dreams',
      manager_Name: Grant
    },
    {
      team_Name: 'Tempo Cantina',
      manager_Name: Francis
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
