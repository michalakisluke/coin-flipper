import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    users {
        _id
        username
        decisions {
            _id
        }
    } 

`;

export const QUERY_USER_ID = gql`
    query userId(_id: ID!) {
        user(_id: $id) {
            _id
            username
            decisions {
                _id
            }
        }
    }
`;

export const QUERY_DECISION = gql`
    query decision(_id: ID!) {
        decision(_id: $id) {
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