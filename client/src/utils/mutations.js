import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser(username: String!, email: String!, password: String!) {
        addUser(username: $string, email: $string, password: $string) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const ADD_DEC = gql`
    mutation addDecision(choiceA: String!, choiceB: String!, finalDecision:String!, username: String!, rating: Boolean, description: String) {
        addDecision(choiceA: $string, choiceB: $string, finalDecision: $string, username: $string, rating: $boolean, description: $string) {
            _id
            choiceA
            choiceB
            finalDecision
            username
            rating
            description
        }
    }
`;

export const UPDATE_DEC = gql`
    mutation updateDecision(_id: ID!, choiceA: String, choiceB: String, finalDecision: String, username: String, rating: Boolean, description: String) {
        updateDecision(_id: $id, choiceA: $string, choiceB: $string, finalDecision: $string, username: $string, rating: $boolean, description: $string) {
            choiceA
            choiceB
            finalDecision
            rating
            description
        }
    }
`;

export const DELETE_DEC = gql`
    mutation deleteDecision(_id: ID!, username: String!) {
        deleteDecision(_id: $id, username: $string) {
            finalDecision
        }
    }
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