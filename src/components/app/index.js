import React, { useState, useEffect } from "react";

import { fetchData } from "../../services";

import {
  Hero,
  PrizeList,
  PageDescription,
  GamesList,
  TermsAndConditions,
} from "../index";
import { Loading, LoadingFailed } from "../common";

function App() {
  const [pageData, setPageData] = useState({});
  const [hasContent, setHasContent] = useState(false);
  const [failedLoading, setFailedLoading] = useState(false);

  const getPageData = async () => {
    try {
      const fetchedData = await fetchData();
      await setPageData(fetchedData);
      setHasContent(true);
      setFailedLoading(false);
    } catch (e) {
      setHasContent(false);
      setFailedLoading(true);
    }
  };

  useEffect(() => {
    getPageData();
  }, []);

  const handleRefresh = (e) => {
    e.preventDefault();
    setHasContent(false);
    setFailedLoading(false);
    setPageData({});
    getPageData();
  };

  const {
    description,
    games,
    prizeList,
    title,
    startDate,
    endDate,
    prizePool,
    players,
    backgroundImage,
  } = { ...pageData };

  const heroContent = {
    title,
    startDate,
    endDate,
    prizePool,
    players,
    backgroundImage,
  };

  return (
    <>
      {!hasContent && !failedLoading ? (
        <Loading />
      ) : hasContent && !failedLoading ? (
        <>
          <Hero content={heroContent}></Hero>
          {prizeList && (
            <PrizeList content={prizeList} refreshHandler={handleRefresh} />
          )}
          {description && <PageDescription content={description} />}
          {games && <GamesList content={games} />}
        </>
      ) : failedLoading ? (
        <LoadingFailed />
      ) : null}

      <TermsAndConditions />
    </>
  );
}

export default App;
