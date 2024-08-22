import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    usuarios {
      id
      name
      email
    }
  }
`;