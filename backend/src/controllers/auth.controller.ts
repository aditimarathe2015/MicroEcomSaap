import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'mysecretkey';


export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === '1234') {
   const token = jwt.sign(
      { username: username },
      SECRET_KEY,
      { expiresIn: '1h' }
    );

    return res.json({
      message: 'Login successful',
      token: token
    });

  }

  return res.status(401).json({ message: 'Invalid credentials' });

};