const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config')
const userRoute = require('./routes/UserRoute')
const quizRoute = require('./routes/QuizRoute')

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).catch((error) => console.log(error.reason));

const app = express();

app.use(bodyParser.json());

app.use('/api/users', userRoute);
app.use('/api/quiz', quizRoute);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/../client/build/index.html`));
  });
}

app.listen(config.PORT, ()=> {
  console.log(`Server is running at port ${config.PORT}`)
})
