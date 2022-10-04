import { RequestHandler } from 'express';
import { MatchAttributes } from '../@types';
import MatchDTO from '../dtos/MatchDTO';
import MatchService from '../services/MatchService';

class MatchController {
  private _service = new MatchService();

  public findAll: RequestHandler = async (req, res) => {
    const { query: { inProgress } } = req;
    const matches = await this._service.findAll();
    res.status(200).json(inProgress
      ? matches.filter((match) => (inProgress === 'true') === match.inProgress)
      : matches);
  };

  public create: RequestHandler = async (req, res) => {
    const match = new MatchDTO(req.body as MatchAttributes);
    const createdMatch = await this._service.create(match);
    res.status(201).json(createdMatch);
  };

  public setFinished: RequestHandler = async (req, res) => {
    const { params: { id } } = req;
    await this._service.setFinished(+id);
    res.status(200).json({ message: 'Finished' });
  };
}

export default MatchController;
