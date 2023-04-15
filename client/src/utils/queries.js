import { gql } from "@apollo/client";

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                title
                description
                image
                link
            }
        }
    }
`;

export const QUERY_GAME = gql`
    {
      search {
        _id
        title
        description
        image
        company
        upVotes
        comments {
          commentAuthor
          commentText
          createdAt
          _id
        }    
      }
    }
`

export const QUERY_SINGLE_GAME = gql`
  query getSingleGame($gameId: ID!) {
    game(gameId: $gameId) {
      title
      description
      upVotes
      image
      company
      comments {
        commentText
        createdAt
        commentAuthor
      }
    }
  }
`

export const QUERY_VOTES = gql`
  query votes($gameId: ID!) {
    votes(gameId: $gameId) {
      _id
      upVotes
    }
  }
`;