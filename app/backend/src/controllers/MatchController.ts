import { RequestHandler } from 'express';
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
}

export default MatchController;
