export const adminLogin = {
  email: 'admin@admin.com',
  password: 'secret_admin',
};

export const dbAdminResult = {
  id: 1,
  username: 'Admin',
  email: 'admin@admin.com',
  role: 'admin',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
};

export const teams = [
  {
    id: 1,
    teamName: "Avaí/Kindermann"
  },
  {
    id: 2,
    teamName: "Bahia"
  },
  {
    id: 3,
    teamName: "Botafogo"
  },
  {
    id: 4,
    teamName: "Corinthians"
  },
  {
    id: 5,
    teamName: "Cruzeiro"
  },
  {
    id: 6,
    teamName: "Ferroviária"
  },
  {
    id: 7,
    teamName: "Flamengo"
  },
  {
    id: 8,
    teamName: "Grêmio"
  },
  {
    id: 9,
    teamName: "Internacional"
  },
  {
    id: 10,
    teamName: "Minas Brasília"
  },
  {
    id: 11,
    teamName: "Napoli-SC"
  },
  {
    id: 12,
    teamName: "Palmeiras"
  },
  {
    id: 13,
    teamName: "Real Brasília"
  },
  {
    id: 14,
    teamName: "Santos"
  },
  {
    id: 15,
    teamName: "São José-SP"
  },
  {
    id: 16,
    teamName: "São Paulo"
  },
];

export const findTeamByPk = (id: number) => teams.find((team) => team.id === id);

export const matches = [
  {
    "id": 1,
    "homeTeam": 16,
    "homeTeamGoals": 1,
    "awayTeam": 8,
    "awayTeamGoals": 1,
    "inProgress": false,
  },
  {
    "id": 2,
    "homeTeam": 9,
    "homeTeamGoals": 1,
    "awayTeam": 14,
    "awayTeamGoals": 1,
    "inProgress": false,

  },
  {
    "id": 3,
    "homeTeam": 4,
    "homeTeamGoals": 3,
    "awayTeam": 11,
    "awayTeamGoals": 0,
    "inProgress": false,

  },
  {
    "id": 4,
    "homeTeam": 3,
    "homeTeamGoals": 0,
    "awayTeam": 2,
    "awayTeamGoals": 0,
    "inProgress": false,
  },
  {
    "id": 5,
    "homeTeam": 7,
    "homeTeamGoals": 1,
    "awayTeam": 10,
    "awayTeamGoals": 1,
    "inProgress": false,

  },
  {
    "id": 6,
    "homeTeam": 5,
    "homeTeamGoals": 1,
    "awayTeam": 13,
    "awayTeamGoals": 1,
    "inProgress": false,

  },
  {
    "id": 7,
    "homeTeam": 12,
    "homeTeamGoals": 2,
    "awayTeam": 6,
    "awayTeamGoals": 2,
    "inProgress": false,
  },
  {
    "id": 8,
    "homeTeam": 15,
    "homeTeamGoals": 0,
    "awayTeam": 1,
    "awayTeamGoals": 1,
    "inProgress": false,
  },
  {
    "id": 9,
    "homeTeam": 1,
    "homeTeamGoals": 0,
    "awayTeam": 12,
    "awayTeamGoals": 3,
    "inProgress": false,
  },
  {
    "id": 10,
    "homeTeam": 2,
    "homeTeamGoals": 0,
    "awayTeam": 9,
    "awayTeamGoals": 2,
    "inProgress": false,
  },
  {
    "id": 11,
    "homeTeam": 13,
    "homeTeamGoals": 1,
    "awayTeam": 3,
    "awayTeamGoals": 0,
    "inProgress": false,
  },
  {
    "id": 12,
    "homeTeam": 6,
    "homeTeamGoals": 0,
    "awayTeam": 4,
    "awayTeamGoals": 1,
    "inProgress": false,
  },
  {
    "id": 13,
    "homeTeam": 8,
    "homeTeamGoals": 2,
    "awayTeam": 5,
    "awayTeamGoals": 1,
    "inProgress": false,
  },
  {
    "id": 14,
    "homeTeam": 14,
    "homeTeamGoals": 2,
    "awayTeam": 16,
    "awayTeamGoals": 1,
    "inProgress": false,
  },
  {
    "id": 15,
    "homeTeam": 10,
    "homeTeamGoals": 0,
    "awayTeam": 15,
    "awayTeamGoals": 1,
    "inProgress": false,
  },
  {
    "id": 16,
    "homeTeam": 11,
    "homeTeamGoals": 0,
    "awayTeam": 7,
    "awayTeamGoals": 0,
    "inProgress": false,
  },
  {
    "id": 17,
    "homeTeam": 1,
    "homeTeamGoals": 2,
    "awayTeam": 8,
    "awayTeamGoals": 3,
    "inProgress": false,
  },
  {
    "id": 18,
    "homeTeam": 12,
    "homeTeamGoals": 4,
    "awayTeam": 5,
    "awayTeamGoals": 2,
    "inProgress": false,
  },
  {
    "id": 19,
    "homeTeam": 11,
    "homeTeamGoals": 2,
    "awayTeam": 2,
    "awayTeamGoals": 2,
    "inProgress": false,
  },
  {
    "id": 20,
    "homeTeam": 7,
    "homeTeamGoals": 0,
    "awayTeam": 9,
    "awayTeamGoals": 1,
    "inProgress": false,
  },
  {
    "id": 21,
    "homeTeam": 6,
    "homeTeamGoals": 3,
    "awayTeam": 13,
    "awayTeamGoals": 1,
    "inProgress": false,

  },
  {
    "id": 22,
    "homeTeam": 4,
    "homeTeamGoals": 3,
    "awayTeam": 3,
    "awayTeamGoals": 1,
    "inProgress": false,
  },
  {
    "id": 23,
    "homeTeam": 15,
    "homeTeamGoals": 2,
    "awayTeam": 16,
    "awayTeamGoals": 3,
    "inProgress": false,

  },
  {
    "id": 24,
    "homeTeam": 10,
    "homeTeamGoals": 2,
    "awayTeam": 14,
    "awayTeamGoals": 2,
    "inProgress": false,

  },
  {
    "id": 25,
    "homeTeam": 2,
    "homeTeamGoals": 0,
    "awayTeam": 6,
    "awayTeamGoals": 1,
    "inProgress": false,
  },
  {
    "id": 26,
    "homeTeam": 13,
    "homeTeamGoals": 1,
    "awayTeam": 1,
    "awayTeamGoals": 0,
    "inProgress": false,
  },
  {
    "id": 27,
    "homeTeam": 5,
    "homeTeamGoals": 1,
    "awayTeam": 15,
    "awayTeamGoals": 2,
    "inProgress": false,

  },
  {
    "id": 28,
    "homeTeam": 16,
    "homeTeamGoals": 3,
    "awayTeam": 7,
    "awayTeamGoals": 0,
    "inProgress": false,
  },
  {
    "id": 29,
    "homeTeam": 9,
    "homeTeamGoals": 0,
    "awayTeam": 4,
    "awayTeamGoals": 4,
    "inProgress": false,
  },
  {
    "id": 30,
    "homeTeam": 3,
    "homeTeamGoals": 0,
    "awayTeam": 12,
    "awayTeamGoals": 4,
    "inProgress": false,

  },
  {
    "id": 31,
    "homeTeam": 8,
    "homeTeamGoals": 2,
    "awayTeam": 10,
    "awayTeamGoals": 0,
    "inProgress": false,

  },
  {
    "id": 32,
    "homeTeam": 14,
    "homeTeamGoals": 5,
    "awayTeam": 11,
    "awayTeamGoals": 1,
    "inProgress": false,

  },
  {
    "id": 33,
    "homeTeam": 1,
    "homeTeamGoals": 1,
    "awayTeam": 16,
    "awayTeamGoals": 1,
    "inProgress": false,

  },
  {
    "id": 34,
    "homeTeam": 9,
    "homeTeamGoals": 3,
    "awayTeam": 6,
    "awayTeamGoals": 1,
    "inProgress": false,
  },
  {
    "id": 35,
    "homeTeam": 10,
    "homeTeamGoals": 1,
    "awayTeam": 5,
    "awayTeamGoals": 3,
    "inProgress": false,
  },
  {
    "id": 36,
    "homeTeam": 2,
    "homeTeamGoals": 0,
    "awayTeam": 7,
    "awayTeamGoals": 1,
    "inProgress": false,
  },
  {
    "id": 37,
    "homeTeam": 15,
    "homeTeamGoals": 0,
    "awayTeam": 13,
    "awayTeamGoals": 1,
    "inProgress": false,

  },
  {
    "id": 38,
    "homeTeam": 14,
    "homeTeamGoals": 2,
    "awayTeam": 4,
    "awayTeamGoals": 1,
    "inProgress": false,
  },
  {
    "id": 39,
    "homeTeam": 3,
    "homeTeamGoals": 2,
    "awayTeam": 11,
    "awayTeamGoals": 0,
    "inProgress": false,

  },
  {
    "id": 40,
    "homeTeam": 12,
    "homeTeamGoals": 4,
    "awayTeam": 8,
    "awayTeamGoals": 1,
    "inProgress": false,
  },
  {
    "id": 41,
    "homeTeam": 16,
    "homeTeamGoals": 2,
    "awayTeam": 9,
    "awayTeamGoals": 0,
    "inProgress": true,
  },
  {
    "id": 42,
    "homeTeam": 6,
    "homeTeamGoals": 1,
    "awayTeam": 1,
    "awayTeamGoals": 0,
    "inProgress": true,
  },
  {
    "id": 43,
    "homeTeam": 11,
    "homeTeamGoals": 0,
    "awayTeam": 10,
    "awayTeamGoals": 0,
    "inProgress": true,

  },
  {
    "id": 44,
    "homeTeam": 7,
    "homeTeamGoals": 2,
    "awayTeam": 15,
    "awayTeamGoals": 2,
    "inProgress": true,

  },
  {
    "id": 45,
    "homeTeam": 5,
    "homeTeamGoals": 1,
    "awayTeam": 3,
    "awayTeamGoals": 1,
    "inProgress": true,
  },
  {
    "id": 46,
    "homeTeam": 4,
    "homeTeamGoals": 1,
    "awayTeam": 12,
    "awayTeamGoals": 1,
    "inProgress": true,

  },
  {
    "id": 47,
    "homeTeam": 8,
    "homeTeamGoals": 1,
    "awayTeam": 14,
    "awayTeamGoals": 2,
    "inProgress": true,

  },
  {
    "id": 48,
    "homeTeam": 13,
    "homeTeamGoals": 1,
    "awayTeam": 2,
    "awayTeamGoals": 1,
    "inProgress": true,
  }
]

export const leaderboard = [
  {
    "name": "Palmeiras",
    "totalPoints": 13,
    "totalGames": 5,
    "totalVictories": 4,
    "totalDraws": 1,
    "totalLosses": 0,
    "goalsFavor": 17,
    "goalsOwn": 5,
    "goalsBalance": 12,
    "efficiency": "86.67"
  },
  {
    "name": "Corinthians",
    "totalPoints": 12,
    "totalGames": 5,
    "totalVictories": 4,
    "totalDraws": 0,
    "totalLosses": 1,
    "goalsFavor": 12,
    "goalsOwn": 3,
    "goalsBalance": 9,
    "efficiency": "80.00"
  },
  {
    "name": "Santos",
    "totalPoints": 11,
    "totalGames": 5,
    "totalVictories": 3,
    "totalDraws": 2,
    "totalLosses": 0,
    "goalsFavor": 12,
    "goalsOwn": 6,
    "goalsBalance": 6,
    "efficiency": "73.33"
  },
  {
    "name": "Grêmio",
    "totalPoints": 10,
    "totalGames": 5,
    "totalVictories": 3,
    "totalDraws": 1,
    "totalLosses": 1,
    "goalsFavor": 9,
    "goalsOwn": 8,
    "goalsBalance": 1,
    "efficiency": "66.67"
  },
  {
    "name": "Internacional",
    "totalPoints": 10,
    "totalGames": 5,
    "totalVictories": 3,
    "totalDraws": 1,
    "totalLosses": 1,
    "goalsFavor": 7,
    "goalsOwn": 6,
    "goalsBalance": 1,
    "efficiency": "66.67"
  },
  {
    "name": "Real Brasília",
    "totalPoints": 10,
    "totalGames": 5,
    "totalVictories": 3,
    "totalDraws": 1,
    "totalLosses": 1,
    "goalsFavor": 5,
    "goalsOwn": 4,
    "goalsBalance": 1,
    "efficiency": "66.67"
  },
  {
    "name": "São Paulo",
    "totalPoints": 8,
    "totalGames": 5,
    "totalVictories": 2,
    "totalDraws": 2,
    "totalLosses": 1,
    "goalsFavor": 9,
    "goalsOwn": 6,
    "goalsBalance": 3,
    "efficiency": "53.33"
  },
  {
    "name": "Ferroviária",
    "totalPoints": 7,
    "totalGames": 5,
    "totalVictories": 2,
    "totalDraws": 1,
    "totalLosses": 2,
    "goalsFavor": 7,
    "goalsOwn": 7,
    "goalsBalance": 0,
    "efficiency": "46.67"
  },
  {
    "name": "São José-SP",
    "totalPoints": 6,
    "totalGames": 5,
    "totalVictories": 2,
    "totalDraws": 0,
    "totalLosses": 3,
    "goalsFavor": 5,
    "goalsOwn": 6,
    "goalsBalance": -1,
    "efficiency": "40.00"
  },
  {
    "name": "Flamengo",
    "totalPoints": 5,
    "totalGames": 5,
    "totalVictories": 1,
    "totalDraws": 2,
    "totalLosses": 2,
    "goalsFavor": 2,
    "goalsOwn": 5,
    "goalsBalance": -3,
    "efficiency": "33.33"
  },
  {
    "name": "Cruzeiro",
    "totalPoints": 4,
    "totalGames": 5,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 3,
    "goalsFavor": 8,
    "goalsOwn": 10,
    "goalsBalance": -2,
    "efficiency": "26.67"
  },
  {
    "name": "Avaí/Kindermann",
    "totalPoints": 4,
    "totalGames": 5,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 3,
    "goalsFavor": 4,
    "goalsOwn": 8,
    "goalsBalance": -4,
    "efficiency": "26.67"
  },
  {
    "name": "Botafogo",
    "totalPoints": 4,
    "totalGames": 5,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 3,
    "goalsFavor": 3,
    "goalsOwn": 8,
    "goalsBalance": -5,
    "efficiency": "26.67"
  },
  {
    "name": "Bahia",
    "totalPoints": 2,
    "totalGames": 5,
    "totalVictories": 0,
    "totalDraws": 2,
    "totalLosses": 3,
    "goalsFavor": 2,
    "goalsOwn": 6,
    "goalsBalance": -4,
    "efficiency": "13.33"
  },
  {
    "name": "Minas Brasília",
    "totalPoints": 2,
    "totalGames": 5,
    "totalVictories": 0,
    "totalDraws": 2,
    "totalLosses": 3,
    "goalsFavor": 4,
    "goalsOwn": 9,
    "goalsBalance": -5,
    "efficiency": "13.33"
  },
  {
    "name": "Napoli-SC",
    "totalPoints": 2,
    "totalGames": 5,
    "totalVictories": 0,
    "totalDraws": 2,
    "totalLosses": 3,
    "goalsFavor": 3,
    "goalsOwn": 12,
    "goalsBalance": -9,
    "efficiency": "13.33"
  }
];
