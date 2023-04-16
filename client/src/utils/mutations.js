import { gql } from '@apollo/client';

export const ADD_VOTE = gql`
  mutation Upvote($gameId: ID!) {
    upVote(gameId: $gameId) {
      title
      upVotes
    }
  }
`;

export const DOWN_VOTE = gql`
  mutation downVote($gameId: ID!) {
    downVote(gameId: $gameId) {
      title
      upVotes
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($gameId: ID!, $commentText: String, $commentAuthor: String) {
    addComment(gameId: $gameId, commentText: $commentText, commentAuthor: $commentAuthor) {
      title
      description
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;
