import ServiceError from '../errors/ServiceError';
import Team from '../database/models/Team';

class TeamService {
  private _model = Team;

  public getAll = async (): Promise<Team[]> => this._model.findAll();

  public getById = async (teamId: number): Promise<Team> => {
    const team = await this._model.findByPk(teamId);
    if (!team) throw ServiceError.teamNotFound;
    return team;
  };
}

export default TeamService;
