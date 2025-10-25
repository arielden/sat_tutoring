const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5002;

// Middleware
app.use(cors());
app.use(express.json());

// Sample math questions data
const mathQuestions = [
  {
    id: 1,
    question: "If 60% of buttons in a jar are red, 40% of the red buttons are wooden, and 30% of the red wooden buttons are round, then what percent of all buttons in the jar are red wooden round buttons?",
    options: [
      { id: 'A', text: '7.2%' },
      { id: 'B', text: '92.8%' },
      { id: 'C', text: '93.4%' },
      { id: 'D', text: '95.2%' }
    ],
    correctAnswer: 'A',
    explanation: 'To find the percentage: 60% × 40% × 30% = 0.6 × 0.4 × 0.3 = 0.072 = 7.2%'
  },
  {
    id: 2,
    question: "Yvon has $10,000 to buy surfboards for his people. He must purchase 60 boards, and sales tax is 8%. To the nearest dollar, what is the largest price that Yvon can pay for each board before sales tax?",
    options: [
      { id: 'A', text: '$154' },
      { id: 'B', text: '$155' },
      { id: 'C', text: '$185' },
      { id: 'D', text: '$200' }
    ],
    correctAnswer: 'A',
    explanation: 'Let x be the price per board before tax. Total cost: 60x(1.08) ≤ 10,000. Solving: x ≤ 10,000/(60 × 1.08) = 154.32, so $154 is the largest whole dollar amount.'
  },
  {
    id: 3,
    question: "A music store reduces the original price of a clarinet by 40%. The store then adds a 7% sales tax to the price of the instrument. If k is the final price of the clarinet, including tax, then what was the original price in terms of k?",
    options: [
      { id: 'A', text: 'k / (0.6)(1.07)' },
      { id: 'B', text: 'k(0.6)(1.07)' },
      { id: 'C', text: 'k(1.4)(1.07)' },
      { id: 'D', text: 'k(0.6)(0.07)' }
    ],
    correctAnswer: 'A',
    explanation: 'If original price is P, after 40% reduction: 0.6P. After 7% tax: 0.6P × 1.07 = k. Therefore, P = k / (0.6 × 1.07).'
  }
];

// Routes
app.get('/api/questions', (req, res) => {
  res.json(mathQuestions);
});

app.get('/api/questions/:id', (req, res) => {
  const questionId = parseInt(req.params.id);
  const question = mathQuestions.find(q => q.id === questionId);
  
  if (!question) {
    return res.status(404).json({ error: 'Question not found' });
  }
  
  res.json(question);
});

app.post('/api/submit-answer', (req, res) => {
  const { questionId, answer } = req.body;
  const question = mathQuestions.find(q => q.id === questionId);
  
  if (!question) {
    return res.status(404).json({ error: 'Question not found' });
  }
  
  const isCorrect = answer === question.correctAnswer;
  
  res.json({
    correct: isCorrect,
    correctAnswer: question.correctAnswer,
    explanation: question.explanation
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Available endpoints:`);
  console.log(`  GET /api/questions - Get all questions`);
  console.log(`  GET /api/questions/:id - Get specific question`);
  console.log(`  POST /api/submit-answer - Submit answer`);
  console.log(`\nLoaded ${mathQuestions.length} percentage questions:`);
  mathQuestions.forEach((q, i) => {
    console.log(`  ${i+1}. ${q.question.substring(0, 60)}...`);
  });
});