declare module '../controllers/adminuser.controller.js' {
  import { RequestHandler } from 'express';

  export const createAdminUser: RequestHandler;
}

declare module '../middleware/authMiddleware' {
  import { RequestHandler } from 'express';

  export const authMiddleware: RequestHandler;
}
