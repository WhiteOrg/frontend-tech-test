import { TTournament } from "../../types";

type TPrize = {
  title: string;
  total: string;
};

type TPrizeList = {
  prizeList?: TPrize[];
  refresh: () => Promise<TTournament | void>;
  isLoading: boolean;
};

export type { TPrize, TPrizeList };
