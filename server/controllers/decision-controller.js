const { User, Decision, Rating } = require('../models');

const decisionController = {
    // get all Decisions
    getAllDecisions(req, res) {
        Decision.find({})
            .populate({
            path: 'rating',
            select: '-__v'
            })
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    },
    // get Decision by id
    getDecisionById({ params }, res) {
        Decision.findOne({ _id: params.id })
            .populate({
                path: 'rating',
                select: '-__v'
            })
            .then(dbDecisionData => {
                // if no decision found, send 404
                if (!dbDecisionData) {
                    res.status(404).json({ message: 'No decision found with this id! '});
                    return;
                }
                res.json(dbDecisionData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // create a decision
    createDecision({ body }, res) {
        Decision.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },
    // delete a decision
    deleteDecision({ params }, res) {
        Decision.findOneAndDelete({ _id: params.id })
        .then(dbDecisionData => {
            if (!dbDecisionData) {
                res.status(404).json({ message: 'No decision found with this id! '});
                return;
            }
            res.json(dbDecisionData)
        })
        .catch(err => res.status(400).json(err))
    },
    // rate a decision
    addRating({ params }, res) {
        Decision.findOneAndUpdate(
            { _id: params.id },
            { $addToSet: { rating: Rating } },
            { new: true }
        )
        .then(dbDecisionData => res.json(dbDecisionData))
        .catch(err => res.json(err));
    }
}

module.exports = decisionController;