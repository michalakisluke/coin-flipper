const { User, Decision, Rating } = require('../models');

const userController = {
    // get all Users
    getAllUsers(req, res) {
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
    getUserById({ params }, res) {
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
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    }
}

module.exports = userController;