const { Decision, User } = require('../models');

const decisionController = {
    // get Decision by id -- this one works
    decisionId: async (parent, { _id }) => {
        return Decision.findOne({ _id })
          .select('-__v')
    },
    // create a decision -- creates decision, not pushing to decision array
    createDecision: async(parent, args) => {
        const decision = await Decision.create({ ...args });
        console.log(decision.username);
        console.log(decision._id);
        await User.findOneAndUpdate(
            { username: Decision.username },
            { $push: { decisions: decision._id } },
            { new: true }
        );

        return decision;
    },
    // delete a decision -- I think works, put I can't tell if it's actually removing from the array but is definitely deleting from the general decisions array
    deleteDecision: async(parent, { _id }) => {
        await Decision.findOneAndDelete({ _id });

        return('Decision deleted successfully');
    },
    // rate a decision -- untested

    // addRating: function addRating({ params }, res) {
    //     Decision.findOneAndUpdate(
    //         { _id: params.id },
    //         { $addToSet: { rating: Rating } },
    //         { new: true }
    //     )
    //     .then(dbDecisionData => res.json(dbDecisionData))
    //     .catch(err => res.json(err));
    // }
}

module.exports = decisionController;