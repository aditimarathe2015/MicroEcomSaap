import express from 'express';
import authRoutes from './routes/auth.routes';

const app = express();
const port = 3300;

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to backend!' });
});

app.use(express.json());

app.use('/auth', authRoutes);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});