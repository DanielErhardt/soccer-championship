import { MatchAttributes } from '../@types';
import DTO from './DTO';
import { matchSchema } from './Validations';

class MatchDTO extends DTO<MatchAttributes> {
  constructor(attributes: MatchAttributes) {
    super(attributes, matchSchema);
  }
}

export default MatchDTO;
