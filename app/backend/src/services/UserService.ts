import ServiceError from '../errors/ServiceError';
import Token from '../utilities/Token';
import User from '../database/models/User';
import LoginDTO from '../dtos/LoginDTO';

class UserService {
  private _model = User;

  async login(loginDTO: LoginDTO): Promise<string> {
    const { email } = loginDTO.getData();
    const user = await this._model.findOne({ where: { email } });

    if (!user) throw new ServiceError(404, 'User not found');

    return Token.create(user.id);
  }
}

export default UserService;
