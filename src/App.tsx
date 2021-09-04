import React, { useEffect, useState } from "react";

import "./App.css";
import { get } from "./api/http";
import { TTournament } from "./types";
import { Games } from "./components/Games";
import { Header } from "./components/Header";
import { PrizeList } from "./components/PrizeList";
import { StyledBody as Body } from "./components/Body";
import { PrizeDescription } from "./components/PrizeDescription";
import { Terms } from "./components/Terms";
import { Footer } from "./components/Footer/Footer";
import { Flex } from "reflexbox";
import { ErrorWrapper } from "./styles";

function App() {
  const [tournamentData, setTournamentData] = useState<TTournament>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const {
    title,
    games,
    endDate,
    startDate,
    prizePool,
    players,
    prizeList,
    description,
    backgroundImage,
    terms,
  } = tournamentData;
  const headerData = { title, endDate, startDate, prizePool, players, backgroundImage };

  useEffect(() => {
    loadPrizes().then(data => data && setTournamentData(data));
  }, []);

  const loadPrizes = () => {
    setIsLoading(true);
    return get("5ab803b0-5f91-4855-9d2c-ef5c44d69bff")
      .then(res => {
        setIsLoading(false);
        return res.data as TTournament;
      })
      .catch(() => setError(true));
  };

  return (
    <>
      {error ? (
        <ErrorWrapper>Sorry, something isn't working how it's supposed to be</ErrorWrapper>
      ) : (
        <Flex maxWidth="740px" flexDirection="column" alignItems="center" backgroundColor="white">
          <Header {...headerData} />
          <Body>
            <PrizeList prizeList={prizeList} refresh={loadPrizes} isLoading={isLoading} />
            <PrizeDescription description={description} />
          </Body>
          <Games games={games} />
          <Terms terms={terms} />
          <Footer />
        </Flex>
      )}
    </>
  );
}

export default App;
