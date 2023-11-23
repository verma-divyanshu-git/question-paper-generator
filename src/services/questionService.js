const Question = require('../models/questionModel');

class QuestionService {

  constructor() {
    this.questions = [
  {"question": "What is the capital of France?", "subject": "Geography", "topic": "Countries", "difficulty": "Easy", "marks": 4 },
  {"question": "Name the largest ocean on Earth.", "subject": "Geography", "topic": "Oceans", "difficulty": "Easy", "marks": 6},
  {"question": "In which continent is the Sahara Desert located?", "subject": "Geography", "topic": "Deserts", "difficulty": "Easy", "marks": 5 },
  {"question": "In which continent is the Sahara Desert located?", "subject": "Geography", "topic": "Deserts", "difficulty": "Easy", "marks": 5 },
  {"question": "In which continent is the Sahara Desert located?", "subject": "Geography", "topic": "Deserts", "difficulty": "Easy", "marks": 5 },
  {"question": "What are the major greenhouse gases?", "subject": "Environmental Science", "topic": "Climate Change", "difficulty": "Medium", "marks": 8},
  {"question": "Explain the concept of biodiversity.", "subject": "Environmental Science", "topic": "Ecology", "difficulty": "Medium", "marks": 10},
  {"question": "Explain the concept of biodiversity.", "subject": "Environmental Science", "topic": "Ecology", "difficulty": "Medium", "marks": 10},
  {"question": "Explain the concept of biodiversity.", "subject": "Environmental Science", "topic": "Ecology", "difficulty": "Medium", "marks": 10},
  {"question": "Explain the concept of biodiversity.", "subject": "Environmental Science", "topic": "Ecology", "difficulty": "Medium", "marks": 10},
  {"question": "Discuss the impact of deforestation on the environment.", "subject": "Environmental Science", "topic": "Deforestation", "difficulty": "Medium", "marks": 9 },
  {"question": "Define quantum entanglement in quantum physics.", "subject": "Physics", "topic": "Quantum Mechanics", "difficulty": "Hard", "marks": 15},
  {"question": "Examine the principles of special relativity.", "subject": "Physics", "topic": "Relativity", "difficulty": "Hard", "marks": 14},
  {"question": "Discuss the applications of nuclear fusion.", "subject": "Physics", "topic": "Nuclear Physics", "difficulty": "Hard", "marks": 16}
];
  }

  addQuestion(question) {
    this.questions.push(question);
  }

  getQuestions(totalMarks, difficultyDistribution) {
    const questionPaper = [];
    difficultyDistribution.forEach(({ difficulty, percentage }) => {
      const questions = this.questions.filter((q) => q.difficulty === difficulty);
      const shuffledQuestions = this.shuffleArray(questions);
      const marksForDifficulty = (percentage / 100) * totalMarks;
      let marksCount = 0;

      for (const q of shuffledQuestions) {
        if (marksCount + q.marks <= marksForDifficulty) {
          questionPaper.push(q);
          marksCount += q.marks;
        }
      }
    });

    return questionPaper;
  }  

//   generateQuestionPaper(totalMarks, difficultyDistribution) {
//     const questionPaper = [];

//     difficultyDistribution.forEach(({ difficulty, percentage }) => {
//       const questions = this.questions.filter((q) => q.difficulty === difficulty);
//       const shuffledQuestions = this.shuffleArray(questions);
//       const marksForDifficulty = (percentage / 100) * totalMarks;
//       let marksCount = 0;

//       for (const q of shuffledQuestions) {
//         if (marksCount + q.marks <= marksForDifficulty) {
//           questionPaper.push(q);
//           marksCount += q.marks;
//         }
//       }
//     });

//     return questionPaper;
//   }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

}

module.exports = new QuestionService();