import { MatchGoalsAttributes } from '../@types';
import ServiceError from '../errors/ServiceError';
import MatchDTO from '../dtos/MatchDTO';
import Match from '../database/models/Match';
import MatchModel from '../models/MatchModel';
import TeamModel from '../models/TeamModel';

class MatchService {
  private _matchModel = new MatchModel();
  private _teamModel = new TeamModel();

  public findAll = async (): Promise<Match[]> => this._matchModel.findAll();

  public create = async (match: MatchDTO) => {
    const matchData = match.getData();
    const dataTeams = [matchData.awayTeam, matchData.homeTeam];

    const teams = await this._teamModel.findAllWithIds(dataTeams);

    if (dataTeams[0] === dataTeams[1]) throw ServiceError.repeatedTeams;

    if (teams.length !== dataTeams.length) throw ServiceError.teamNotFound;

    const created = await this._matchModel.create(matchData);
    return created;
  };

  public setFinished = async (matchId: number) => {
    const match = await this._matchModel.findByPk(matchId);
    if (!match) throw ServiceError.matchNotFound;
    await this._matchModel.setFinished(matchId);
  };

  public updateGoals = async (matchId: number, goals: MatchGoalsAttributes) => {
    const match = await this._matchModel.findByPk(matchId);
    if (!match) throw ServiceError.matchNotFound;
    await this._matchModel.updateGoals(matchId, goals);
  };
}

export default MatchService;
