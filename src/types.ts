export declare interface ILeaderboardProps {
  prizeList: Prize[] | null | undefined;
}

export declare interface IGamesListProps {
  games: Game[] | null | undefined;
}

export declare interface IApiData {
  title: string;
  description: string;
  endDate: string;
  startDate: string;
  prizePool: string;
  backgroundImage: string;
  players: number;
  prizeList: Prize[];
  games: Game[];
}

interface Prize {
  title: string;
  total: string;
}

interface Game {
  title: string;
  src: string;
}
