import express from 'express';

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Håkon Wium Lie',
    course: 'CSS',
    score: 92,
  },
};

const app = express();
const PORT = 8080;

app.get('/api/grades', (req, res) => {
  const gradesArray = [];

  for (const key in grades) {
    gradesArray.push(grades[key]);
  }

  res.json(gradesArray);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
