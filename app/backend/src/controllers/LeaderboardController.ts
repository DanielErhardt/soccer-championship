import { RequestHandler } from 'express';
import { leaderboardSorter } from '../utilities/Sorters';
import LeaderboardService from '../services/LeaderboardService';

class LeaderboardController {
  private _service = new LeaderboardService();

  public getResults: RequestHandler = async (_req, res) => {
    const results = await this._service.getResults();
    res.status(200).json(
      results.map((result) => result.getCalculatedStatus())
        .sort(leaderboardSorter),
    );
  };

}

export default LeaderboardController;
