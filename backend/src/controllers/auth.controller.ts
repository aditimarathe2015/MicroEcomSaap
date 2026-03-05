import { Request, Response } from 'express';

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === '1234') {
    return res.json({ message: 'Login successful' });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
};