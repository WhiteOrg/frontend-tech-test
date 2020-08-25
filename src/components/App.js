import React, { useEffect } from "react";
import Header from './Header';
import { connect } from 'react-redux';
import { fetchGames } from '../actions';
import PrizeList from './PrizeList';
import GameList from './GameList';
import Footer from './Footer';


const App = props => {

	useEffect(() => {
		props.fetchGames();
	}, []);

	if (props.pending) return <p>Loading...</p>

	return (
		<React.Fragment>
			<Header />
			<PrizeList />
			<section>
				<p>{props.content.description}</p>
			</section>
			<GameList />
			<Footer />
		</React.Fragment>
	);

}

const mapStateToProps = state => {
	return {
		pending: state.game.pending,
		content: state.game.tournament
	}
}

export default connect(mapStateToProps, { fetchGames })(App);