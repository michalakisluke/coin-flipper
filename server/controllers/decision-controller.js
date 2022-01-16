const { Decision, User } = require('../models');
let ObjectId = require('mongodb').ObjectId;

const decisionController = {
    // get Decision by id -- this one works
    decisionId: async (parent, { _id }) => {
        return Decision.findOne({ _id })
          .select('-__v')
    },
    // create a decision -- this one works
    createDecision: async(parent, args) => {
        const decision = await Decision.create({ ...args });
        console.log(decision.username);
        console.log(decision._id);

        await User.findOneAndUpdate(
            { username: decision.username },
            { $push: { decisions: decision._id } },
            // { $push: { decisions: updatedId } },
            { new: true }
        );

        return decision;
    },
    // delete a decision -- this one works
    deleteDecision: async(parent, { _id, username }) => {
        await Decision.findOneAndDelete({ _id });
        console.log(`Your decision Id is ${_id}`);
        console.log(`The user who posted this decision is ${username}`);
        await User.findByIdAndUpdate(
            { username: username },
            { $pop: { decisions: _id} }
        );

        return('Decision deleted successfully');
    },
    // rate a decision -- untested

    addRating: async(parent, { _id, rating, description }) => {
    }
}

module.exports = decisionController;