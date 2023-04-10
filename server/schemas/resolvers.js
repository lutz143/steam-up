const { AuthenticationError } = require("apollo-server-express");
const { User, Game } = require("../models");
const { signToken } = require("../utils/auth");


const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id }).select(
            "-__v -password"
          );
  
          return userData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      search: async () => {
        return Game.find()
      },
      users: async () => {
        return User.find()
      }
    },
  
    Mutation: {
      addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
  
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await user.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('No profile with this email found!');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect password!');
        }
  
        const token = signToken(user);
        return { token, user };
      },
      saveGame: async (parent, { userId, gameData }, context) => {
        if (context.user) {
          return User.findOneAndUpdate(
            { _id: userId },
            { 
              $addToSet: { games: { game: gameData } } 
            },
            { 
              new: true, 
              runValidators: true 
            }
          );
        }
         
        throw new AuthenticationError('You need to be logged in!');
      },
      removeGame: async (parent, { gameId }) => {
        return Game.findOneAndDelete({ _id: gameId });
      },
      addComment: async (parent, { gameId, commentText, commentAuthor }) => {
        return Game.findOneAndUpdate(
          { _id: gameId },
          {
            $addToSet: { comments: { commentText, commentAuthor } },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      },
      upVote: async (parent, { gameId }) => {
        const vote = await Game.findOneAndUpdate(
          { _id: gameId },
          { $inc: { [`upVotes`]: 1} },
          { new: true }
        );
        return vote;
      },
      downVote: async (parent, { gameId }) => {
        const vote = await Game.findOneAndUpdate(
          { _id: gameId },
          { $inc: { [`upVotes`]: -1} },
          { new: true }
        );
        return vote;
      },
      removeComment: async (parent, { gameId, commentId }) => {
        return Game.findOneAndUpdate(
          { _id: gameId },
          { $pull: { comments: { _id: commentId } } },
          { new: true }
        );
      },
    },
  };
  
  module.exports = resolvers;