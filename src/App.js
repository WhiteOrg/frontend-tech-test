import React, { useEffect, useState } from "react";

import "./App.css";

import icClose from "./images/close.svg";
import icUser from "./images/user.svg";
import icCalendar from "./images/calendar.svg";
import icRefresh from "./images/refresh.svg";
import icFacebook from "./images/facebook.svg";
import icTwitter from "./images/twitter.svg";
import IconButton from "./components/IconButton";
import { clearInterval } from "timers";

function App() {

  const [pageData, setPageData] = useState({});

  const [remainTime, setRemainTime] = useState(604800);

  const [rD, setRD] = useState(7);
  const [rH, setRH] = useState(0);
  const [rM, setRM] = useState(0);

  const loadData = async () => {
    let apiUrl = "https://run.mocky.io/v3/5ab803b0-5f91-4855-9d2c-ef5c44d69bff";
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();

      setPageData(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadData();

    const interval = setInterval(() => {
      if(remainTime > 0) {
        setRemainTime(remainTime => remainTime - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const dd = parseInt(remainTime / (24 * 60 * 60));
    const rHH = remainTime % (24 * 60 * 60);
    const hh = parseInt(rHH / (60 * 60));
    const rMM = rHH % (60 * 60);
    const mm = parseInt(rMM / 60);
    const ss = rMM % 60;
    setRD(dd);
    setRH(hh);
    setRM(mm);
  }, [remainTime]);

  const onClickCloseButton = () => {
    console.log('===== on click close button =====');
  }

  const onClickJoinButton = () => {
    console.log('===== on click join button =====');
  }

  const onClickRefreshButton = () => {
    console.log('===== on click refresh button =====');
    loadData();
  }

  const onClickFacebookButton = () => {
    console.log('===== on click facebook button =====');
  }

  const onClickTwitterButton = () => {
    console.log('===== on click twitter button =====');
  }

  return (
    <div className="app">
      <header style={{ backgroundImage: `url(${pageData?.backgroundImage})` }}>
        <div className="title-container">
          <span className="title">{pageData?.title}</span>
          <IconButton
            className="close-button"
            icon={icClose}
            onClick={onClickCloseButton}
          />
        </div>
        <div className="timer-container">
          <div className="label">Ends</div>
          <div className="value">{rD}</div>
          <div className="label">d</div>
          <div className="value">{rH}</div>
          <div className="label">h</div>
          <div className="value">{rM}</div>
          <div className="label">m</div>
        </div>

        <div className="info-container">
          <div className="plize-info">
            <div className="title">PRIZE POOL</div>
            <div className="value">{pageData.prizePool}</div>
          </div>
          <div className="player-info">
            <div className="title">PLAYER</div>
            <div className="value">
              <img src={icUser} />
              {' '}{pageData.players}
            </div>
          </div>
        </div>

        <div className="calendar-container">
          <img src={icCalendar} />
          <span className="title">Starts on {pageData.startDate}</span>
        </div>

        <div className="join-button" onClick={onClickJoinButton}>JOIN</div>
      </header>
      <main>
        <div className="prize-list">
          <span className="title">Prize List</span>
          <IconButton
            className="refresh-button"
            icon={icRefresh}
            onClick={onClickRefreshButton}
          />
        </div>
        <div className="divider" />
        <div className="prize-info">
          {pageData?.prizeList && pageData.prizeList.map((item, index) => (
            <div className="item" key={index}>
              <div className="no">{index + 1}</div>
              <div className="name">{item.title}</div>
              <div className="price">{item.total}</div>
            </div>
          ))}
        </div>
        <div className="divider" />
        <div className="description">
          {pageData.description}
        </div>
        <div className="title">
          Include Games
        </div>
        <div className="game-list">
          {pageData?.games && pageData.games.map((item, index) => (
            <div className="item" key={index}>
              <img src={item.src} />
            </div>
          ))}
        </div>
        <div>
          <p className="title">Terms & Conditions</p>
          {pageData?.terms && pageData.terms.map((item, index) => (
            <div key={index}>•	{item}</div>
          ))}
        </div>
      </main>
      <footer>
        <div className="title">Share this Tournament</div>
        <div className="button-container">
          <IconButton
            className="social-button"
            icon={icFacebook}
            onClick={onClickFacebookButton}
          />
          <IconButton
            className="social-button"
            icon={icTwitter}
            onClick={onClickTwitterButton}
          />
        </div>
      </footer>
    </div>
  );
}

export default App;
