import { MatchAttributes } from '../@types';
import Match from '../database/models/Match';
import { matchIncludeTeams } from './FindOptions';

class MatchModel {
  private _sequelizeModel = Match;

  public findAll = async (): Promise<Match[]> => this._sequelizeModel.findAll(matchIncludeTeams);

  public findByPk = async (matchId: number): Promise<Match | null> =>
    this._sequelizeModel.findByPk(matchId);

  public create = async (match: MatchAttributes): Promise<Match> =>
    this._sequelizeModel.create(match);

  public setFinished = async (matchId: number) => this._sequelizeModel.update(
    { inProgress: false },
    {
      where: {
        id: matchId,
      },
    },
  );
}

export default MatchModel;
