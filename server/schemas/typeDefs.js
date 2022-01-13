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
        rating: [Rating]
    }

    type Rating {
        rating: Boolean
        description: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        user: User
        users: [User]
        decision(_id: ID!): Decision
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addDecision(choiceA: String!, choiceB: String!, finalDecision:String!): Decision
        addRating(rating: String!, description: String): Rating
        updateDecision(_id: ID!, choiceA: String, choiceB: String, finalDecision: String, rating: Rating!): Decision
        updateRating(_id:ID!, rating: Boolean, description: String): Rating
        deleteDecision(_id: ID!): Decision
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;