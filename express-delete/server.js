import express from 'express';

const app = express();
let PORT = 8090;

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

app.get('/api/grades', (req, res) => {
  let gradesArray = [];

  for (const key in grades) {
    gradesArray.push(grades[key]);
  }

  res.json(gradesArray);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.delete('/api/grades/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (!grades[id]) {
    res.status(404).json({ error: 'Grade not found' });
  } else {
    delete grades[id];
    res.sendStatus(204);
  }
});
