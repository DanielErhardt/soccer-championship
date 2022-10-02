import { Router } from 'express';
import UserController from '../controllers/UserController';

const LoginRouter = Router();

const userController = new UserController();

LoginRouter.post('/', userController.login);

LoginRouter.get('/validate');

export default LoginRouter;
