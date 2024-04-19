import express from 'express';

const app = express();
const PORT = 3000;

app.use((req, res) => {
  console.log(req.method);
  res.send('Hello from Express!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
