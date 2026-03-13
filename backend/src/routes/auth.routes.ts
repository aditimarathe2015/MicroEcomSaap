

import { Router } from 'express';
import { login } from '../controllers/auth.controller';

import { authMiddleware } from "../middleware/authMiddleware";


const router = Router();

router.post('/login', login);


router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route accessed"
  });
});




export default router;