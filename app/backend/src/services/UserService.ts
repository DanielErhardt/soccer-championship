import ServiceError from '../errors/ServiceError';
import Token from '../utilities/Token';
import User from '../database/models/User';
import LoginDTO from '../dtos/LoginDTO';
import BCrypt from '../utilities/BCrypt';

class UserService {
  private _model = User;

  public login = async (loginDTO: LoginDTO): Promise<string> => {
    const { email, password } = loginDTO.getData();
    const user = await this._model.findOne({ where: { email } });

    if (!user || !BCrypt.validate(password, user.password)) {
      throw ServiceError.incorrectLogin;
    }

    return Token.create(user.id);
  };

  public getById = async (userId: number): Promise<string> => {
    const user = await this._model.findByPk(userId);
    if (!user) throw ServiceError.userNotFound;
    return user.role;
  };
}

export default UserService;
