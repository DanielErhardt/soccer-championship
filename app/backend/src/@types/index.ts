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

export type MatchGoalsAttributes = {
  homeTeamGoals: number;
  awayTeamGoals: number;
};

export type MatchAttributes = ModelAttributes & MatchGoalsAttributes & {
  homeTeam: number;
  awayTeam: number;
  inProgress: number;
};

export type JwtPayload = {
  id: string;
};
