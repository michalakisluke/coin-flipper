import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser()
`;

export const ADD_DEC = gql`
    mutation
`;

export const UPDATE_DEC = gql`
`;

export const DELETE_DEC = gql`
`;

export const LOGIN_USER = gql`
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