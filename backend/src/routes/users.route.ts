import express from 'express';

const Auth_router = express.Router();

Auth_router.get('/login', (req, res) => {
  res.json({ message: 'Login API working ✅' });
});

export default Auth_router;