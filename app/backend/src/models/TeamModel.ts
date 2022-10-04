import Team from '../database/models/Team';

class TeamModel {
  private _sequelizeModel = Team;

  public findAll = async (): Promise<Team[]> => this._sequelizeModel.findAll();

  public findByPk = async (teamId: number): Promise<Team | null> =>
    this._sequelizeModel.findByPk(teamId);
}

export default TeamModel;
