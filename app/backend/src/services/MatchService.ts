import Match from '../database/models/Match';
import MatchModel from '../models/MatchModel';

class MatchService {
  private _model = new MatchModel();

  public findAll = async (): Promise<Match[]> => this._model.findAll();
}

export default MatchService;
