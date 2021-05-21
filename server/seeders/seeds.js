const faker = require('faker');

const db = require('../config/connection');
const { Item } = require('../models');

db.once('open', async () => {
  await Item.deleteMany({});

  // create user data
  const itemData = [];

  for (let i = 0; i < 20; i++) {
    const title = faker.commerce.productName();
    const user = faker.name.findName();
    const description = faker.lorem.paragraph();

    itemData.push({ title, user, description });
  }
  await Item.collection.insertMany(itemData);

  console.log('all done!');
  process.exit(0);
});
