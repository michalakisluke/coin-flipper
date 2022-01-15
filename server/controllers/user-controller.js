const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const userController = {
    // get all Users -- this one works
    users: async () => {
        return User.find()
          .select('-__v -password')
          .populate('decisions');
    },
    // get User by id -- this one works
    userId: async (parent, { _id }) => {
        return User.findOne({ _id })
          .select('-__v -password')
          .populate('decisions')
      },
    // create User -- this one works
    createUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user)

        return { token, user };
    },
    // login user -- this one works
    login: function loginUser(parent, { email, password }) {
        const user = User.find({ email });

        if (!user) {
            throw new AuthenticationError('That user does not exist');
        }

        if ( password !== user.password) {
            throw new AuthenticationError('Incorrect credentials');
        }

        const token = signToken(user);

        return { token, user };
    }
}

module.exports = userController;