import { Router } from 'express';
import TeamController from '../controllers/TeamController';

const TeamsRouter = Router();

const teamController = new TeamController();

TeamsRouter.get('/', teamController.findAll);

TeamsRouter.get('/:id', teamController.findByPk);

export default TeamsRouter;
