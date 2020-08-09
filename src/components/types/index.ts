export type Prize = {
  title: string;
  total: string;
};

export type Game = {
  title: string;
  src: string;
};

export type Data = {
  title: string;
  description: string;
  endDate: string;
  startDate: string;
  prizePool: string;
  backgroundImage: string;
  players: number;
  prizeList: Prize[];
  games: Game[];
};
