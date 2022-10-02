import { RequestHandler } from 'express';
import { LoginAttributes } from '../@types';
import LoginDTO from '../dtos/LoginDTO';
import UserService from '../services/UserService';

class UserController {
  private _service = new UserService();

  public login: RequestHandler = async (req, res) => {
    const loginDTO = new LoginDTO(req.body as LoginAttributes);
    const token = await this._service.login(loginDTO);

    return res.status(200).json({ token });
  };
}

export default UserController;
