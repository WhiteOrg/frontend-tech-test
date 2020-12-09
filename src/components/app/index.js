import React, { useState, useEffect } from "react";

import { fetchData } from "../../services";

import PageDescription from "../page-description";
import TermsAndConditions from "../terms-and-conditions";
import GamesList from "../games-list";

function App() {
  const [pageData, setPageData] = useState({});

  useEffect(() => {
    const getPageData = async () => {
      const fetchedData = await fetchData();
      await setPageData(fetchedData);
    };

    getPageData();
  }, []);

  const {description, games} = {...pageData};
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
      {description && <PageDescription content={description}/>}
      {games && <GamesList list={games} />}
      <TermsAndConditions />
    </>
  );
}

export default App;
