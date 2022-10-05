import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { teams, matches, leaderboard } from './dumps';
import Team from '../database/models/Team';
import Match from '../database/models/Match';

chai.use(chaiHttp);

const { expect, request } = chai;

describe('Tests /leaderboard routes.', () => {
  afterEach(()=> { sinon.restore(); });

  it('GET /leaderboard returns a list with all teams statuses.', async () => {
    sinon.stub(Team, 'findAll').resolves(teams as Team[]);
    sinon.stub(Match, 'findAll').resolves(matches as Match[])

    const response = await request(app).get('/leaderboard').send();    
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(leaderboard);
  });
});


