const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String
        totalPlayTime: Int
        savedGames: [Game]
    } 
    
    type Game {
        gameId: ID!
        authors: [String]
        description: String
        title: String!
        image: String
        link: String
    }

    
    input savedGame {
        gameId: ID!
        title: String!
        description: String
        image: String
        link: String
        upVotes: Int
        downVotes: Int
        authors: [String]
    }
    
    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveGame(input: savedGame!): User
        removeGame(gameId: ID!): User
      }

`;
// Maybe add a mutation for upvotes or research better way to implement
module.exports = typeDefs;