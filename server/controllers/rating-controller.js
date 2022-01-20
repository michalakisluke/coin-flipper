// const { Rating } = require('../models');

// const ratingController = {
//     // create rating
//     createRating({ body }, res) {
//         Rating.create(body)
//             .then(dbRatingData => res.json(dbRatingData))
//             .catch(err => res.status(400).json(err));
//     },
//     // update rating
//     updateRating({ params, body }, res) {
//         Rating.findOneAndUpdate({ _id: params.id}, body, {new: true})
//             .then(dbRatingData => {
//                 if (!dbRatingData) {
//                     res.status(404).json({ message: 'No rating found with this id! '});
//                     return;
//                 }
//                 res.json(dbRatingData)
//             })
//             .catch(err => res.status(400).json(err));
//     }
// }

// module.exports = ratingController;