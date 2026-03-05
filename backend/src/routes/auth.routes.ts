

// import { Router, Request, Response } from 'express';

// const router = Router();

// router.get('/login', (req: Request, res: Response) => {
//   const { username, password } = req.query;

//   if (username === 'admin' && password === '1234') {
//     return res.json({ message: 'Login successful' });
//   }

//   return res.status(401).json({ message: 'Invalid credentials' });
// });

// export default router;

import { Router } from 'express';
import { login } from '../controllers/auth.controller';

const router = Router();

router.post('/login', login);

export default router;