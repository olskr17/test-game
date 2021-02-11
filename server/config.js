const dotenv = require('dotenv');

dotenv.config();

module.exports =  {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URI || 'mongodb://localhost/teachersSite',
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret'
};
