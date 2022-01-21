const db = require("../connection.js");
const { User, Decision, Rating } = require("../../models");

db.once("open", async () => {
  //  await Rating.deleteMany();

  //  const ratings = await Rating.insertMany([
  //    {
  //      type: true,
  //      description:
  //        "Best choice I ever made! I'm a millionaire because of this!",
  //    },

  //    {
  //      type: false,
  //      description:
  //        "Why...? Why did I do this...? None of this should have happened...",
  //    },
  //  ]);

  //  console.log("ratings seeded");

  await Decision.deleteMany();

  await Decision.create([
    {
      choiceA: "Spend money on food",
      choiceB: "Spend money on lottery tickets",
      finalDecision: "Spend money on lottery tickets",
      username: "SteveTheEgg666",
      rating: true,
      description:
        "Best choice I ever made! I'm a millionaire because of this!",
    },
    {
      choiceA: "Dress up as the Easter Bunny at Christmas",
      choiceB: "Dress up as Santa Claus during Easter",
      finalDecision: "Dress up as Santa Claus during Easter",
      username: "SteveTheEgg666",
      rating: false,
      description:
        "Why...? None of this should have happened... I'm so sorry Josh...",
    },
  ]);

  console.log("decisions seeded");

  await User.deleteMany();

  await User.create({
    username: "SteveTheEgg666",
    email: "stegg@testmail.com",
    password: "EggsRg00d",
    decisions: [Decision],
  });

  console.log("user seeded");

  process.exit();
});
