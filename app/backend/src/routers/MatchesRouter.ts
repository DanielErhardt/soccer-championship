import { Router } from 'express';
import authenticate from '../middlewares/authenticate';
import MatchController from '../controllers/MatchController';

const MatchesRouter = Router();

const matchController = new MatchController();

MatchesRouter.get('/', matchController.findAll);

MatchesRouter.post('/', authenticate, matchController.create);

MatchesRouter.patch('/:id/finish', matchController.setFinished);

export default MatchesRouter;
