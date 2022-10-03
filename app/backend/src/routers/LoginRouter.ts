import { Router } from 'express';
import authenticate from '../middlewares/authenticate';
import UserController from '../controllers/UserController';

const LoginRouter = Router();

const userController = new UserController();

LoginRouter.post('/', userController.login);

LoginRouter.get('/validate', authenticate, userController.validate);

export default LoginRouter;
