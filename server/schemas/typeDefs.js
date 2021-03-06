const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
      _id: ID
      username: String
      email: String
      decisions: [Decision]  
    }

    type Decision {
        _id: ID
        choiceA: String
        choiceB: String
        finalDecision: String
        username: String
        rating: Boolean
        description: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        users: [User]
        userId(_id: ID!): User
        decision(_id: ID!): Decision
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        addDecision(choiceA: String!, choiceB: String!, finalDecision:String!, username: String!, rating: Boolean, description: String): Decision
        updateDecision(_id: ID!, choiceA: String, choiceB: String, finalDecision: String, username: String, rating: Boolean, description: String): Decision
        deleteDecision(_id: ID!, username: String!): Decision
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;