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