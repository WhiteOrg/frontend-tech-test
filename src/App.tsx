import React, { useState, useEffect } from "react";
import { getData } from "./fetchData";
import { IData } from "./utils/dataTypes";
import LoadingSpinner from "./components/LoadingSpinner";
import Header from "./components/Header";
import PrizeList from "./components/PrizeList";
import Description from "./components/Description";
import IncludeGames from "./components/IncludeGames";
import Terms from "./components/Terms";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import "./App.scss";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [tourneyData, setTourneyData] = useState<IData | null>(null);
  const [fetchError, setFetchError] = useState<any>(null);

  const fetchData = () => {
    setIsLoading(true);
    getData()
      .then((response) => response.json())
      .then((data) => {
        setTourneyData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setFetchError(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (!isLoading && !tourneyData) {
      fetchData();
    }
  }, []);

  return (
    <div className="App">
      {/* simply checking isLoading generally works fine
		but sometimes the error page renders briefly after loading
		is complete and before any of the data has been assigned to a state*/}
      {isLoading || (!fetchError && !tourneyData) ? (
        <LoadingSpinner />
      ) : (
        <>
          {tourneyData ? (
            <>
              <Header data={tourneyData} />
              <PrizeList list={tourneyData.prizeList} />
              <Description text={tourneyData.description} />
              <IncludeGames games={tourneyData.games} />
              <Terms termsList={tourneyData.terms} />
              <Footer />
            </>
          ) : (
            <>
              <ErrorPage error={fetchError} />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
