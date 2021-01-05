const sequelize = require('../config/connection');
const { User, Bobby } = require('../models');

const gifSeedData = require('./gifs.json');
const userData = require('./users.json');

// const seedDatabase = async () => Bobby.bulkCreate(gifSeedData);

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const gif of gifSeedData) {
    await Bobby.create({
      ...gif,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
