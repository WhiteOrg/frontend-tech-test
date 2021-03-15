import React, { useEffect, useState } from "react";
// import "./App.css";
import { Countdown } from "./components/Countdown"
import { Stats } from "./components/Stats"
import { Leaderboard } from "./components/Leaderboard"
import { GamesList } from "./components/GamesList"
import fetchData from "./ApiService"
import { IApiData } from "./types"
import styled from "styled-components"
import "./images/calendar.svg"

const StyledApp = styled.main`
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	max-width: 740px;

	.header-spacer {
		height: 120px;
		background-color: white;
	}

	section {
		background-color: white;
	}

	.game-card-section {
		position: relative;
		color: white;
		display: flex;
		flex-direction: column;
		background-size: cover;
		background-position: center;

		.close {
			position: absolute;
			right: 20px;
			top: 20px;
			border-radius: 50%;
			background: url(${require("./images/close.svg")});
			width: 34px;
			height: 34px;
			border: none;
			outline-style: none;
			margin-right: 5px;

			transition-property: transform box-shadow;
			transition-duration:200ms;
			transition-timing-function: cubic-bezier(0.42, 0, 0.54, 1.89);

			:focus {
				box-shadow: inset 30px 30px 30px 30px rgba(0,0,0,0.2);
			}

			:active {
				transform: scale(0.9);
			}
		}
	}

	.top-panel{
		display: flex;
		justify-content:space-between;
		height: 70px;
	}

	.start-date-container {
		display: flex;
		align-items: center;

		time {
			font-size: 14px;
			font-weight: 600;
			margin-left: 12px;
		}
	}

	.join-button {
		max-width: 334px;
		height: 42px;
		margin: 30px 0 10px;
		padding: 12px 0;
		border-radius: 1px;
		background-color: #f9cb11;
		border: none;
		font-size: 15px;
		font-weight: 600;
		font-family: "Barlow Condensed", sans-serif;
		font-stretch: condensed;
		font-style: normal;
		line-height: normal;
		letter-spacing: 1.88px;
		color: #0a0052;
	}

	.leaderboard-top-panel {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 10px;

		input {
			background: url(${require("./images/refresh.svg")}) no-repeat;
			background-position: center;
			width: 20px;
			height: 20px;
			border: none;
			border-radius: 50%;

			border: none;
			outline-style: none;

			transition-property: transform box-shadow;
			transition-duration: 500ms;
			transition-timing-function: ease-in-out;

			:focus {
				box-shadow: inset 30px 30px 30px 30px rgba(0,0,0,0.2);
			}

			:active {
				transform: scale(0.9);
			}

			:hover {
				transform: scale(1.1) rotate(180deg);
			}
		}
	}


	.description-section {
		padding-top: 0;
		padding-bottom: 0;
		.description {
			margin: -4px;
			font-size: 16px;
			line-height: 22px;
			padding: 0 5px;
		}
	}

	.games-list-section {
		padding-bottom: 10px;
		h2{
			padding: 10px 0;
		}
	}

	.terms-section {
		ul{
			padding: 5px 10px 0 23px;
			font-size: 14px;
			line-height: 1.58;
		}
	}

	footer {
		height: 150px;
		background-image: linear-gradient(-160deg, #158dd4, #56169b);
		display: flex;
		align-items: center;
		justify-content: center;

		.inner-wrapper {
			display: flex;
			flex-direction: column;
			justify-content: center;

			h4 {
				color: #f9cb11;
				margin: 0 0 15px;
				font-size: 16px;
				font-weight: 600;
			}

			.social-links-container {
				display: flex;
				justify-content: center;

				a {
					width: 46px;
					height: 46px;
					margin: 0 5px;

					&.twitter-link {
						background: url(${require("./images/twitter.svg")});
					}
					&.facebook-link {
						background: url(${require("./images/facebook.svg")});
					}
				}
			}
		}

	}

	/* DESKTOP */
	@media screen and (min-width: 740px) {
		.header-spacer {
			background: #091870;
		}

		section {
			padding: 50px 72px 20px 68px;
		}

		.top-panel {
			height: 26px;
		}
		.title {
			font-size: 48px;
			font-weight: 400px;
			width: 500px;

			line-height: 0.54;
			letter-spacing: -0.75px;
		}

		.join-button {
			width: 300px;
			margin-bottom: 20px;
		}

		.leaderboard-section {
			padding-top: 30px;
			padding-bottom: 35px;
		}

		.games-list-section {
			padding-top: 30px;
			padding-bottom: 35px;
		}

		.terms-section {
			padding-top: 0;
		}

		h2 {
			line-height: 0.93;
			font-size: 28px;
			font-weight: 500;
		}

		.footer-spacer {
			position: relative;
			height: 669px;
			width: 100%;
		}
	}

	/* MOBILE */
	@media screen and (max-width: 739px) {
		section {
			padding: 20px;
		}

		.title {
			width: 200px;
			font-weight: 400;
		}

		.join-button {
			max-width: 334px;
		}
	}
`

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
		<StyledApp className="app-container">
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
		</StyledApp >
	);
}

export default App;
