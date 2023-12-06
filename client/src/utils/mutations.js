import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $highScore: Int) {
    addUser(username: $username, email: $email, password: $password, highScore: $highScore) {
      token
      user {
        _id
        username
		    email
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($username: String!, $email: String!, $password: String!) {
    updateUser(username: $username, email: $email, password: $password) {
      _id
		  email
    }
  }
`;

export const UPDATE_SCORE = gql`
  mutation addScore($_id: ID!, $highScore: Int!) {
    addScore(_id: $_id, highScore: $highScore) {
      _id
      username
      highScore
    }
  }
`