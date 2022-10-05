import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { teams, findTeamByPk } from './dumps';
import Team from '../database/models/Team';

chai.use(chaiHttp);

const { expect, request } = chai;

describe('Tests /teams routes.', () => {
  afterEach(()=> { sinon.restore(); });

  it('GET /teams returns a list with all the teams.', async () => {
    sinon.stub(Team, 'findAll').resolves(teams as Team[]);

    const response = await request(app).get('/teams').send();    
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(teams);
  });

  it('GET /teams/:id returns a team if the id exists', async () => {
    const teamId = 1;
    sinon.stub(Team, 'findByPk').resolves(findTeamByPk(teamId) as Team);

    const response = await request(app).get(`/teams/${teamId}`).send();
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({...findTeamByPk(teamId)});
  });

  it('and returns an error if the id does not exist', async () => {
    const teamId = 999;
    sinon.stub(Team, 'findByPk').resolves(findTeamByPk(teamId) as Team);

    const response = await request(app).get(`/teams/${teamId}`).send();
    expect(response.status).to.equal(404);
    expect(response.body).to.deep.equal({ message: 'There is no team with such id!' });
  });
});


