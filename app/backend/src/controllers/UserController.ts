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

  public validate: RequestHandler = async (req, res) => {
    const { headers: { userId } } = req;
    const role = await this._service.getById(Number(userId));
    res.status(200).json({ role });
  };
}

export default UserController;
