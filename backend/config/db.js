const mongoose = require('mongoose');
//const config = require('config');

const dotenv = require('dotenv');
dotenv.config();

const db = process.env.MONGODB_URI

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;