import { TeamAttributes } from '../@types';
import DTO from './DTO';
import { teamSchema } from './Validations';

class TeamDTO extends DTO<TeamAttributes> {
  constructor(attributes: TeamAttributes) {
    super(attributes, teamSchema);
  }
}

export default TeamDTO;
