const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  mainQuestion: String,
  possibleAnswer1: String,
  possibleAnswer2: String,
  possibleAnswer3: String,
  possibleAnswer4: String,
  correctAnswer: String
})
const Question = mongoose.model('Question', questionSchema);

const quizSchema = new mongoose.Schema({
    category: String,
    classNumber: Number,
    nameOfQuestion: String,
    generalQuestion: {type: String, required: true, unique: true},
    questions: [questionSchema]
  }
);

const quizModel = mongoose.model('Quiz', quizSchema);
module.exports = quizModel;
