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
        // const id = decision._id.toHexString();
        // console.log(id);
        // const removed = id.slice(0,-1);
        // console.log(removed);
        // const last = id.charAt(id.length - 1);
        // console.log(last);
        // const lastCharCode = last.charCodeAt(0);
        // console.log(lastCharCode);
        // const newLastCharCode = lastCharCode - 2;
        // console.log(newLastCharCode);
        // const newLast = String.fromCharCode(newLastCharCode);
        // console.log(newLast);
        // const updatedString = removed.concat(newLast);
        // console.log(updatedString);
        // const updatedId = new ObjectId(updatedString);
        // console.log(updatedId);
        // console.log(typeof updatedId);

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

    addRating: function addRating({ params }, res) {
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