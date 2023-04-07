const { Schema } = require('mongoose');

// subschema to house books within the User model
const gameSchema = new Schema({
  // saved game from Steam
  gameId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  upVotes: {
    type: Number,
    default: 0
  },
  downVotes: {
    type: Number,
    default: 0
  },
  authors: [
    {
      type: String,
    },
  ],
});

module.exports = gameSchema;