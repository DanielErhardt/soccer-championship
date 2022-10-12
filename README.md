# Soccer Championship

<details> 
<summary>:brazil: Versão em Português</summary>

## Objetivo

Usar Typescript, MySQL, pacotes Node.js como express, sequelize, sequelize-cli, chai e sinon para construir uma API REST com testes de integração, aplicando conhecimentos de POO e os princípios SOLID.

A API tem o propósito de gerenciar a criação e edição de partidas de um campeonato de futebol, bem como calcular e exibir os resultados finais e o desempenho individual de cada time.

## Observações

- Nosso objetivo foi construir apenas o back-end da aplicação. O front-end nos foi fornecido pela Trybe, pronto e funcionado.

- Essa é uma aplicação monorepo, com front e back contidos no mesmo repositório.

- Todos os arquivos fora do diretório app/backend/src, com exceção dos Dockerfiles, foram criados e configurados pela Trybe.

## Executando a aplicação localmente

- Para instalar os containers docker:

```
npm run compose:up
```

Aguarde a criação e o healthcheck de todos os containers, então acesse:

http://localhost:3000

Faça login como usuário para ter acesso às informações do campeonato: </br>
login: User </br>
senha: secret_user

Faça login como admin para poder editar partidas em andamento, sinalizá-las como finalizadas ou criar novas partidas:</br>
login: Admin </br>
senha: secret_admin

- Para remover os containers:

```
npm run compose:down
```

<br />

## Endpoints

### Login

| Requisição | URL                                  |
| ---------- | ------------------------------------ |
| `POST`     | http://localhost:3001/login          |
| `GET`      | http://localhost:3001/login/validate |

### Teams

| Requisição | URL                             |
| ---------- | ------------------------------- |
| `GET`      | http://localhost:3001/teams     |
| `GET`      | http://localhost:3001/teams/:id |

### Matches

| Requisição | URL                                      |
| ---------- | ---------------------------------------- |
| `GET`      | http://localhost:3001/matches            |
| `POST`     | http://localhost:3001/matches            |
| `PATCH`    | http://localhost:3001/matches/:id        |
| `PATCH`    | http://localhost:3001/matches/:id/finish |

### Leaderboard

| Requisição | URL                                    |
| ---------- | -------------------------------------- |
| `GET`      | http://localhost:3001/leaderboard/     |
| `GET`      | http://localhost:3001/leaderboard/home |
| `GET`      | http://localhost:3001/leaderboard/away |

<br />

</details>

<details open> 
<summary>:us: English Version</summary>

## Objective

To use Typescript, MySQL, Node.js packages like express, sequelize, sequelize-cli, chai and sinon to build a REST API with integration tests, applying our knowledge in OOP and the SOLID principles.

The API has the purpose of managing the creation and editing of matches for a soccer championship, as well as calculating and displaying the final results and the individual performance of each team.

## Observations

- Our goal was to build the back-end of the application. The front-end was provided to us by Trybe, ready and working.

- This is a monorepo application, with front and back contained in the same repository.

- All files outside of app/backend/src directory, with the exception of the Dockerfiles, were created and configured by Trybe.

## Running the application locally

- To install the docker containers:

```
npm run compose:up
```

Wait for all containers to be created and healthchecked, then access: </br>
http://localhost:3000

Login as a user to have access to the championship progress:</br>
login: User </br>
senha: secret_user

Login as admin to be able to edit matches in progress, set them as finished or create new matches:</br>
login: Admin </br>
senha: secret_admin

- To remove all containers:

```
npm run compose:down
```

<br />

## Endpoints

### Login

| Request | URL                                  |
| ------- | ------------------------------------ |
| `POST`  | http://localhost:3001/login          |
| `GET`   | http://localhost:3001/login/validate |

### Teams

| Request | URL                             |
| ------- | ------------------------------- |
| `GET`   | http://localhost:3001/teams     |
| `GET`   | http://localhost:3001/teams/:id |

### Matches

| Request | URL                                      |
| ------- | ---------------------------------------- |
| `GET`   | http://localhost:3001/matches            |
| `POST`  | http://localhost:3001/matches            |
| `PATCH` | http://localhost:3001/matches/:id        |
| `PATCH` | http://localhost:3001/matches/:id/finish |

### Leaderboard

| Request | URL                                    |
| ------- | -------------------------------------- |
| `GET`   | http://localhost:3001/leaderboard/     |
| `GET`   | http://localhost:3001/leaderboard/home |
| `GET`   | http://localhost:3001/leaderboard/away |

</details>
