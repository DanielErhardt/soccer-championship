import { RequestHandler } from 'express';
import TeamService from '../services/TeamService';

class TeamController {
  private _service = new TeamService();

  public findAll: RequestHandler = async (_req, res) => {
    const teams = await this._service.findAll();
    res.status(200).json(teams);
  };

  public findByPk: RequestHandler = async (req, res) => {
    const { params: { id } } = req;
    const team = await this._service.findByPk(+id);
    res.status(200).json(team);
  };
}

export default TeamController;
