// const { AuthenticationError } = require('apollo-server-express');
// const { User, Decision } = require('../models');
// const { signToken } = require('../utils/auth');

const { user,
        userId,
        createUser,
        login } = require('../controllers/user-controller');
const { decisions,
        decisionId,
        createDecision,
        deleteDecision,
        addRating } = require('../controllers/decision-controller');

const resolvers = {
    Query: {
        user: user,
        users: userId,
        decision: decisionId
    },
    Mutation: {
        addUser: createUser,
        addDecision: createDecision,
        updateDecision: addRating,
        deleteDecision: deleteDecision,
        login: login
    }
}

module.exports = resolvers;