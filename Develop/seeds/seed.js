const sequelize = require('../config/connection');
const Bobby = require('../models/index');

const gifSeedData = require('./gifs.json');

const seedDatabase = () => Bobby.bulkCreate(gifSeedData);

seedDatabase();
