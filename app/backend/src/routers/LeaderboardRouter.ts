import { Router } from 'express';
import LeaderboardController from '../controllers/LeaderboardController';

const LeaderboardRouter = Router();

const leaderboardController = new LeaderboardController();

LeaderboardRouter.get('/', leaderboardController.getResults);
LeaderboardRouter.get('/home', leaderboardController.getHomeResults);
LeaderboardRouter.get('/away', leaderboardController.getAwayResults);

export default LeaderboardRouter;
