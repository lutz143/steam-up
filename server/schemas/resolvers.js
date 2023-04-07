const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
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
              $addToSet: { savedGames: { book: gameData } } 
            },
            { 
              new: true, 
              runValidators: true 
            }
          );
        }
         
        throw new AuthenticationError('You need to be logged in!');
      },
      removeGame: async (parent, { game }, context) => {

        // To-Do Please!!

      },
    },
  };
  
  module.exports = resolvers;