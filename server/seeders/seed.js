const db = require('../config/connection');
const { User, Game } = require('../models');
const userSeeds = require('./userSeeds.json');
const gameSeeds = require('./gameSeeds.json');

db.once('open', async () => {
  try {
    await Game.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);
    await Game.create(gameSeeds);

    // for (let i = 0; i < gameSeeds.length; i++) {
    //   const { _id, gameAuthor } = await Game.create(gameSeeds[i]);
    //   const user = await User.findOneAndUpdate(
    //     // { username: gameAuthor },
    //     {
    //       $addToSet: {
    //         games: _id,
    //       },
    //     }
    //   );
    // }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
