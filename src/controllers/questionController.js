const express = require('express');
const bodyParser = require('body-parser');
const questionService = require('../services/questionService');

const app = express();
app.use(bodyParser.json());

// API to add a question
app.post('/questions', (req, res) => {
  const { question, subject, topic, difficulty, marks } = req.body;
  const newQuestion = new Question(question, subject, topic, difficulty, marks);
  questionService.addQuestion(newQuestion);
  res.status(201).json(newQuestion);
});

// API to get all questions
app.get('/questions', (req, res) => {
  
  const totalMarks = 100;
  const difficultyDistribution = [
  { difficulty: 'Easy', percentage: 10 },
  { difficulty: 'Medium', percentage: 80 },
  { difficulty: 'Hard', percentage: 10 },
];
  const questions = questionService.getQuestions(totalMarks,difficultyDistribution);
  console.log(questions);
  res.status(200).json(questions);
});

module.exports = app;
