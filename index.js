const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('GameForge AI Backend Running!');
});

// POST route to handle AI questions
app.post('/ask', (req, res) => {
  const { question } = req.body;

  // Temporary dummy answer
  const answer = `You asked: "${question}". This is a sample AI response.`;

  res.json({ answer });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
