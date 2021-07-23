import React, { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import PrizeList from "./components/PrizeList/PrizeList";
import Description from "./components/Description/Description";
import Games from "./components/Games/Games";
import Terms from "./components/Terms/Terms";
import Footer from "./components/Footer/Footer";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const getDataFromApi = () => {
    (async () => {
      try {
        const resData = await fetch(
          `https://run.mocky.io/v3/5ab803b0-5f91-4855-9d2c-ef5c44d69bff`
        );
        const data = await resData.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    })();
  };

  useEffect(getDataFromApi, []);

  return (
    <>
      {error ? (
        <div className="error-msg">Could not Fetch Data</div>
      ) : isLoading ? (
        <div className="loading-msg">Loading...</div>
      ) : (
        <>
          <Hero data={data} />
          <PrizeList
            data={data.prizeList}
            refreshData={getDataFromApi}
            isLoading={isLoading}
            error={error}
          />
          <Description description={data.description} />
          <Games games={data.games} />
          <Terms terms={data.terms} />
          <Footer />{" "}
        </>
      )}
    </>
  );
}

export default App;
