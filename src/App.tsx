import React, { useEffect} from "react";
import "./App.scss";
import { Countdown } from "./components/Countdown"
import { Stats } from "./components/Stats"
import { Leaderboard } from "./components/Leaderboard"
import { GamesList } from "./components/GamesList"
import fetchData from "./ApiService"
import { IApiData } from "./types"

const App = () => {

	const [apiData, setApiData] = React.useState<IApiData | null>();

	useEffect(() => {
		fetchData().then(data => setApiData(data))
	}, []);

	const startDate = apiData && new Date(apiData!.startDate).toLocaleString("en-GB", {
		weekday: "short",
		day: "numeric",
		month: "short",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	});

	return (
		<main className="app-container">
			<div className="header-spacer" />
			<section className="game-card-section page" style={{ backgroundImage: `url(${apiData?.backgroundImage})` }} >
				<div className="top-panel">
					<h1 className="title">{apiData && apiData.title}</h1>
					<input className="close" type="button" />
				</div>

				<Countdown />

				<Stats prizePool={apiData && apiData.prizePool} players={apiData && apiData.players} />

				<div className="start-date-container">
					<img src={require("./images/calendar.svg")} alt="" />
					<time className="start-date" dateTime={apiData ? apiData.startDate : ""}>Starts on {apiData && startDate} GMT</time>
				</div>

				<button className="join-button">JOIN</button>
			</section>

			<section className="leaderboard-section page">
				<div className="leaderboard-top-panel">
					<h2>Prize List</h2>
					<input type="button" className="refresh-button" />
				</div>
				<Leaderboard prizeList={apiData && apiData.prizeList} />
			</section>

			<section className="description-section">
				<p className="description">{apiData && apiData.description}</p>
			</section>

			<section className="games-list-section page">
				<h2>Include Games</h2>
				<GamesList games={apiData && apiData.games} />
			</section>

			<section className="terms-section page">
				<h2>Terms & Conditions</h2>
				<ul>
					<li>
						Advertising is key factor in your web site promotion. Let people talk 	about you, your products, and your services.
					</li>

					<li>
						You see, people are always on the look out for good content right?
						Your site should have really good contents. Don’t write
						“Welcome to my website” or “Ours is a World’s first company…blah blah” unless and until you really have dominating product.
					</li>

					<li>
						You sell your products or services as like others, but you think you must be noticed.
					</li>

					<li>
						Your offer should be different to attract visitor.
						Your presentation should be mind catching.
					</li>

					<li>
						Get aware of advertisers online. There are few major players around.
					</li>
				</ul>
			</section>

			<footer>
				<div className="inner-wrapper">
					<h4>Share this Tournament</h4>
					<div className="social-links-container">
						<a className="twitter-link" aria-label="Twitter" href="https://twitter.com/" ></a>
						<a className="facebook-link" aria-label="Facebook" href="https://facebook.com/" ></a>
					</div>
				</div>
			</footer>
			<div className="footer-spacer" />
		</main>
	);
}

export default App;
