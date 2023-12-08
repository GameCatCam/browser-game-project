import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
	    username
      email
      highScore
    }
  }
`;

export const QUERY_USERS = gql`
  {
    allUsers {
      _id
      username
      highScore
    }
  }
`