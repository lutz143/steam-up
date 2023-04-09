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
        gameId: ID
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    
    input games {
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
        search: Game
    }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveGame(input: games!): User
        removeGame(gameId: ID!): User
        addComment(
            gameId: ID!
            title: String!
            description: String!
            authors: String!
        ): Game
        removeComment(gameId: ID!): Game
      }

`;
// Maybe add a mutation for upvotes or research better way to implement
module.exports = typeDefs;