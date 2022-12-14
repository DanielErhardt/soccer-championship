import 'express-async-errors';
import * as express from 'express';
import errorHandler from './middlewares/errorHandler';
import LoginRouter from './routers/LoginRouter';
import TeamsRouter from './routers/TeamsRouter';
import MatchesRouter from './routers/MatchesRouter';
import LeaderboardRouter from './routers/LeaderboardRouter';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));

    this.app.use('/login', LoginRouter);

    this.app.use('/teams', TeamsRouter);

    this.app.use('/matches', MatchesRouter);

    this.app.use('/leaderboard', LeaderboardRouter);

    this.app.use(errorHandler);
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
