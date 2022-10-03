import { UserAttributes } from '../@types';
import DTO from './DTO';
import { userSchema } from './JoiSchemes';

class UserDTO extends DTO<UserAttributes> {
  constructor(attributes: UserAttributes) {
    super(attributes, userSchema);
  }
}

export default UserDTO;
