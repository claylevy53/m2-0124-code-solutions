import express from 'express';

let PORT = 8080;
let app = express();
let grades = {};
let nextId = 1;

app.use(express.json());

app.get('/api/grades', (req, res) => {
  let gradesArray = [];
  res.json(grades);
});

app.post('/api/grades', (req, res) => {
  const { name, course, score } = req.body;
  const id = nextId++;
  const grades = { id, name, course, score };
  grades[id] = newGrade;
  res.status(201).json(newGrade);
});

app.listen(PORT, () => {
  console.log(`App is listening on Port: ${PORT}`);
});
