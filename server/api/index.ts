import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Lost & Found HQ API!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});