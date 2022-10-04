import { Router } from 'express';
import LeaderboardController from '../controllers/LeaderboardController';

const LeaderboardRouter = Router();

const leaderboardController = new LeaderboardController();

LeaderboardRouter.get('/', leaderboardController.getResults);

export default LeaderboardRouter;
