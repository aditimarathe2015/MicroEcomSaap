import express from 'express';
import Auth_router from './routes/users.route';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.use('/auth', Auth_router);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});







