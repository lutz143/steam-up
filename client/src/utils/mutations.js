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