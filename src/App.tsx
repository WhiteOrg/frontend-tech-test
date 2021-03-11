import React, { useEffect, useState } from "react";
import "./App.css";
import { Countdown } from "./components/Countdown"
import { Stats } from "./components/Stats"
import { Leaderboard } from "./components/Leaderboard"
import { GamesList } from "./components/GamesList"
import { fetchData } from "./ApiService"
import { IApiData } from "./types"

const App = () => {

	const [apiData, setApiData] = React.useState<IApiData | null>();

	useEffect(() => {
		fetchData().then(data => setApiData(data))
	}, []);

	console.log(apiData);

	return (
		<main className="app-container">
			<section className="game-card-section">
				<img src={apiData?.backgroundImage} alt=""/>
				<h1 className="Playn-GO-Title-2-Li">{apiData && apiData.title}</h1>
				<input className="Close" type="button"></input>

				<Countdown />

				<Stats />

				<div className="start-date-container">
					<time className="start-date" dateTime={apiData ? apiData.startDate : ""}>{ apiData && apiData.startDate }</time>
				</div>

				<button className="join-button">JOIN</button>
			</section>

			<section className="leaderboard-section">
				<Leaderboard prizeList={apiData && apiData.prizeList} />
				<p className="description">{apiData && apiData.description}</p>
			</section>

			<section className="games-list-section">
				<h2>Include Games</h2>
				<GamesList games={apiData && apiData.games}/>
			</section>

			<section className="terms">
				<h2>Terms & Conditions</h2>
				<ul>
					<li>
						Advertising is key factor in your web site promotion. Let people talk 	about you, your products, and your services.
						You see, people are always on the look out for good content right?
					</li>

					<li>
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
				<div>
					<h3>Share this Tournament</h3>
					<a aria-label="Twitter" href="https://twitter.com/" >
						<svg></svg>
					</a>
					<a aria-label="Facebook" href="https://facebook.com/" >
						<svg></svg>
					</a>
				</div>
			</footer>
		</main >
	);
}

export default App;
