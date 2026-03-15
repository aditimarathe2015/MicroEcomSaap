

import { Router } from 'express';
import { login } from '../controllers/auth.controller';
import { createAdminUser ,getAdminUser} from '../controllers/adminuser.controller.js';

import { authMiddleware } from '../middleware/authMiddleware.js';


const router = Router();


router.post('/login', login);
//router.post('/adminusers', authMiddleware, createAdminUser);

router.get('/adminusers', getAdminUser);
router.post('/createuser', createAdminUser);




export default router;
