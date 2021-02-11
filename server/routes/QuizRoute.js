const express = require('express');
const Quiz = require('../models/quizModel');

const { getToken, isAdmin, isAuth } = require('../util');

const router = express.Router();

router.get('/',  async (req, res)=>{
  const category = req.query.category ? { category: req.query.category } : {};
  const classNumber = req.query.classNumber ? { classNumber: req.query.classNumber } : {};
 const questions = await Quiz.find({...category, ...classNumber});
 if(questions){
   res.send(questions)
 } else {
   res.send('Something goes wrong');
 }
})

router.post('/create-quiz', async (req,res)=>{
  const quiz = new Quiz({
    category: req.body.category,
    classNumber: req.body.classNumber,
    nameOfQuestion: req.body.nameOfQuestion,
    generalQuestion: req.body.generalQuestion,
    questions: req.body.questions,
  });
  const newQuiz = await quiz.save();
  if(newQuiz) res.send('Тест успішно створений')
})

router.get('/:id', async (req,res)=>{
  const quizId = req.params.id;
  const quiz = await Quiz.findOne({_id: quizId});
  if (quiz) {
    res.send(quiz)
  } else res.status(404).send({message: 'Quiz not found'});
});

// router.get("/create-test-quiz", async (req, res)=> {
//   const testquiz = new Quiz({
//     category: 'reading',
//     classNumber: 1,
//     nameOfQuestion: 'Та працюй вже',
//     generalQuestion: 'Чи працюватиме сьогодні вже ця фігня чи ні',
//     questions: [{
//       mainQuestion: 'Питання 1',
//       possibleAnswer1: 'dsada',
//       possibleAnswer2: 'Тактак',
//       possibleAnswer3: 'ніні',
//       possibleAnswer4: 'ні',
//       correctAnswer: 'Тактак'
//     }, {
//       mainQuestion: 'Питання 2',
//       possibleAnswer1: 'dsada',
//       possibleAnswer2: 'Тактак',
//       possibleAnswer3: 'ніні',
//       possibleAnswer4: 'ні',
//       correctAnswer: 'Тактак'
//     }]
//   });
//   const newQuiz = testquiz.save();
//   res.send(testquiz)
// })

module.exports = router;
