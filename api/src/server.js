const express = require('express');
//import authRoutes from './routes/auth.routes.js'; // 👈 import routes
//import authRoutes from './routes/auth.routes'; // 👈 import routes
//sconst authRoutes = require('./routes/auth.routes');
const authroute =  require('./routes/auth.routes');

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 5000;

const app = express();

// 👇 middleware
app.use(express.json());

// 👇 routes
//app.use('/api/auth', authRoutes);

// 👇 test route
app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});