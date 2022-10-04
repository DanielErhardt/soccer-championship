import ServiceError from '../errors/ServiceError';
import Team from '../database/models/Team';
import TeamModel from '../models/TeamModel';

class TeamService {
  private _model = new TeamModel();

  public findAll = async (): Promise<Team[]> => this._model.findAll();

  public findByPk = async (teamId: number): Promise<Team> => {
    const team = await this._model.findByPk(teamId);
    if (!team) throw ServiceError.teamNotFound;
    return team;
  };
}

export default TeamService;
