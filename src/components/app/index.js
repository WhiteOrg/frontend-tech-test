import React, { useState, useEffect } from "react";

import { fetchData } from "../../services";
import { Loading, LoadingFailed } from "../common";

import PrizeList from "../prize-list";
import PageDescription from "../page-description";
import GamesList from "../games-list";
import TermsAndConditions from "../terms-and-conditions";

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

  const { description, games, prizeList } = { ...pageData };

  return (
    <>
      <header className="App-header">
        <h1>Stech Frontend Challenge</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/WhiteOrg/frontend-tech-test"
          target="_blank"
          rel="noopener noreferrer"
        >
          Full Instructions
        </a>
      </header>
      
      {!hasContent && !failedLoading ? (
        <Loading />
      ) : hasContent && !failedLoading ? (
        <>
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
