const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const userController = {
    // get all Users
    user: function getAllUsers(req, res) {
        User.find({})
        .populate({
           path: 'decisions',
           select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
    },
    // get User by id
    userId: function getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .populate({
                path: 'decisions',
                select: '-__v'
            })
            .then(dbUserData => {
                // if no user found, send 404
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id! '});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // create User
    // createUser: function createUser({ body }, res) {
    //     User.create(body)
    //         .then(dbUserData => res.json(dbUserData))
    //         .catch(err => res.status(400).json(err));
    createUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user)

        return { token, user };
    },
    // login user
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