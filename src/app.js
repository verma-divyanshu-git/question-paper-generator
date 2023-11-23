const express = require('express');
const questionController = require('./controllers/questionController');

const app = express();
const port = 3000;

app.use('/', questionController);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
