import { Router } from 'express';

import * as UserController from '../controllers/userController';
import checkUserAuth from '../middlewares/checkUserAuth';
import validateBody from '../middlewares/validateBody';
import { updateUserSchema } from '../middlewares/schemas/UserSchema';

const router = Router();

router.route('/').get(UserController.getAll);
router.route('/:id').get(UserController.getById);
router.route('/:id').put(checkUserAuth,validateBody(updateUserSchema),UserController.update);
router.route('/:id').delete(checkUserAuth,UserController.remove);

export default router;
