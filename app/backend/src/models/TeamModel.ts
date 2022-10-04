import Team from '../database/models/Team';

class TeamModel {
  private _sequelizeModel = Team;

  public findAll = async (): Promise<Team[]> => this._sequelizeModel.findAll();

  public findAllWithIds = async (ids: number[]) => this._sequelizeModel.findAll({
    where: {
      id: ids,
    },
  });

  public findByPk = async (teamId: number): Promise<Team | null> =>
    this._sequelizeModel.findByPk(teamId);
}

export default TeamModel;
