export type ModelAttributes = {
  id: number;
};

export type LoginAttributes = {
  email: string;
  password: string;
};

export type UserAttributes = ModelAttributes & LoginAttributes & {
  username: string;
  role: string;
};

export type TeamAttributes = ModelAttributes & {
  teamName: string;
};

export type MatchAttributes = ModelAttributes & {
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: number;
};

export type JwtPayload = {
  id: string;
};
