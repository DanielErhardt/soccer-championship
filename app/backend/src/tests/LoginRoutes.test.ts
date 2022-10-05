import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { adminLogin, dbAdminResult } from './dumps';
import User from '../database/models/User';
import Token from '../utilities/Token';

chai.use(chaiHttp);

const { expect, request } = chai;

describe('Tests /teams routes.', () => {
  const token = Token.createMock(dbAdminResult.id);

  afterEach(()=> { sinon.restore(); });

  it('POST /login returns a token if login is valid', async () => {
    sinon.stub(User, 'findOne').resolves(dbAdminResult as User);
    sinon.stub(Token, 'create').returns(token);

    const response = await request(app).post('/login').send({...adminLogin});    
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({token});
  });

  it('and returns error when password is wrong.', async () => {
    sinon.stub(User, 'findOne').resolves(dbAdminResult as User);

    const response = await request(app).post('/login').send({...adminLogin, password:'wrong_password'}); 
    expect(response.status).to.equal(401);
    expect(response.body).to.deep.equal({ message: 'Incorrect email or password' });
  });

  it('GET /login/validate returns the role of the user when token is valid', async () => {
    sinon.stub(User, 'findByPk').resolves(dbAdminResult as User);
    sinon.stub(Token, 'validate').returns(Token.validateMock(token));
    
    const response = await request(app).get('/login/validate').set('authorization', token).send();

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({ role: dbAdminResult.role });
  });
});