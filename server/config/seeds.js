const db = require("./connection");
const { User, Decision, Rating } = require("../models");

db.once("open", async () => {
  await Rating.deleteMany();

  const ratings = await Rating.insertMany([
    {
      type: true,
      description:
        "Best choice I ever made! I'm a millionaire because of this!",
    },

    {
      type: false,
      description:
        "Why...? Why did I do this...? None of this should have happened...",
    },
  ]);

  console.log("ratings seeded");

  await Decision.deleteMany();

  const decisions = await Decision.insertMany([
    {
      choiceA: "Spend money on food",
      choiceB: "Spend money on lottery tickets",
      finalDecision: "Spend money on lottery tickets",
      rating: ratings[0]._id,
    },
    {
      choiceA: "Dress up as the Easter Bunny at Christmas",
      choiceB: "Dress up as Santa Claus during Easter",
      finalDecision: "Dress up as Santa Claus during Easter",
      rating: ratings[1]._id,
    },
  ]);

  console.log("decisions seeded");

  await User.deleteMany();

  await User.create({
    username: "SteveTheEgg666",
    email: "stegg@testmail.com",
    password: "EggsRg00d",
    decisions: [decisions[0]._id, decisions[1]._id],
  });

  console.log("user seeded");

  process.exit();
});
