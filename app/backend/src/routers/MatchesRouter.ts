import { Router } from 'express';
import MatchController from '../controllers/MatchController';

const MatchesRouter = Router();

const matchController = new MatchController();

MatchesRouter.get('/', matchController.findAll);

export default MatchesRouter;
