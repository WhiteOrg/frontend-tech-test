export interface IPrize {
  title: string;
  total: string;
}

export type TPrizeList = IPrize[];

export interface IGame {
  title: string;
  src: string;
}

export type TGames = IGame[];

export type TTermsList = string[];

export interface IData {
  title: string;
  description: string;
  endDate: string;
  startDate: string;
  prizePool: string;
  backgroundImage: string;
  players: number;
  prizeList: TPrizeList;
  games: TGames;
  terms: TTermsList;
}

export interface IError {
  message: string;
}
