const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
      _id: ID
      firstName: String
      lastName: String
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
        rating: String
        description: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        
    }

    type Mutation {

    }
`;

module.exports = typeDefs;