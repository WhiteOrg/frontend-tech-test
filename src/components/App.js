import React, { useEffect } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { fetchGames } from '../actions';


const App = (props) => {

	useEffect(() => {
		console.log(props)
	}, []);


	return (
		<p>Initial App</p>
	);
}

const mapStateToProps = state => {
	return state
}

export default connect(mapStateToProps, { fetchGames })(App);