const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        totalPlayTime: Int
        games: [Game]
        password: String
    } 
    
    type Game {
        _id: ID
        company: [String]
        description: String
        title: String
        image: String
        link: String
        comments: [Comment]
        upVotes: Int
        downVotes: Int
    }

    type Comment {
        _id: ID
        commentText: String
        commentAuthor: String
        createdAt: String
    }
    
    input games {
        gameId: ID!
        title: String!
        description: String
        image: String
        link: String
        upVotes: Int
        downVotes: Int
        company: [String]
    }
    
    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        search: [Game]
    }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveGame(input: games!): User
        removeGame(gameId: ID!): User
        addComment(
            gameId: ID!
            commentText: String
            commentAuthor: String
        ): Game
        removeComment(gameId: ID!, commentId: ID!): Game
        upVote(gameId: ID!): Game
        downVote(gameId: ID!): Game
      }

`;

module.exports = typeDefs;