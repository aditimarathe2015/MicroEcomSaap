

import { Router } from 'express';
import { login } from '../controllers/auth.controller';
import { createAdminUser ,getAdminUser} from '../controllers/adminuser.controller.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import helmet from "helmet";
import cors from 'cors';



const router = Router();

// Apply helmet only to this router
router.use(
  helmet({
    contentSecurityPolicy: false, // example override
  })
);
router.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));



router.post('/login', login);
router.get('/adminusers',authMiddleware, getAdminUser);

router.post('/createuser', authMiddleware,createAdminUser);




export default router;
