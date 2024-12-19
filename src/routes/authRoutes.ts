import { Router } from 'express';

import * as AuthController from '../controllers/authController';
import validateBody from '../middlewares/validateBody';
import { createUserSchema } from '../middlewares/schemas/UserSchema';

const router = Router();

router.route('/signup').post(validateBody(createUserSchema),AuthController.registry);
router.route('/signin').post(AuthController.login);

export default router;