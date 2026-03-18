

import { Router } from 'express';
import { login } from '../controllers/auth.controller';
import { createAdminUser ,getAdminUser} from '../controllers/adminuser.controller.js';
import helmet from "helmet";


import { authMiddleware } from '../middleware/authMiddleware.js';


const router = Router();

// Apply helmet only to this router
router.use(
  helmet({
    contentSecurityPolicy: false, // example override
  })
);

router.post('/login', login);
router.get('/adminusers',authMiddleware, getAdminUser);

router.post('/createuser', authMiddleware,createAdminUser);




export default router;
