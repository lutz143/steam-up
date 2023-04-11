const db = require('../config/connection');
const { User, Game } = require('../models');
const userSeeds = require('./userSeeds.json');
const gameSeeds = require('./gameSeeds.json');

// seed the database
db.once('open', async () => {
  await User.deleteMany({});
  await Game.deleteMany({});

  await User.create(userSeeds);
  await Game.create(gameSeeds);

  console.log('all done!');
  process.exit(0);
});