import { TPrize } from "./components/PrizeList/types";
import { TGame } from "./components/Games/types";

type TTournament = {
  title?: string;
  description?: string;
  endDate?: string;
  startDate?: string;
  prizePool?: string;
  backgroundImage?: string;
  players?: number;
  prizeList?: TPrize[];
  games?: TGame[];
  terms?: string[];
};

export type { TTournament };
