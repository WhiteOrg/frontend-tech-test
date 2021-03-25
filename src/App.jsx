import React from "react";
// COMPONENTS
import Description from "./components/Description";
import Games from "./components/Games";
import Header from "./components/Header";
import Terms from './components/Terms'
import PriceList from "./components/PriceList";
import Footer from './components/Footer'
// HELPERS
import {getDataFromAPI} from './utils'



// CREATING TERMS AND CONDITION OBJECT FOR EASIER MANIPULATING DATA 
// FOR EXAMPLE ADDING DATA WOULD REQUIRE ADDING ONLY ANOTHER OBJECT KEY AND VALUE WITHOUT
// MESSING AROUND WITH STYLES AND HTML AGAIN
const TermsAndConitions = [
	{id: 1, content: "Advertising is key factor in your web site promotion. Let people talk about , your products, and your services."},
	{id: 2, content: "You see, people are always on the look out for good content right? Your site should have really good contents."},
	{id: 3, content: "Dont't write \"Welcome to my website\" or \"Our's is a World's first company....blah blah\" unless and until you really have dominating product."},
	{id: 4, content: "You see all products or services as like others, but you think you must be noticed."},
	{id: 5, content: "Your offer should be different to attract visitor. Your presentation should be mind catching."},
	{id: 6, content: "Get aware of advertisers online. There are few major players around."},
]


function App() {
	// SETTING UP REACTIVE STATE VARIABLES
	const [description, setDescription] = React.useState('')
	const [gameList, setGameList] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(true)

	// SIDE-EFFECT
	React.useEffect( () => {
		// CALLING FUNCTION TO RETRIEVE DATA OBJECT FROM THE API
		getDataFromAPI().then( data => {
			// UPDATING STATE VARIABLES WITH RECEIVED DATA 
			setDescription(data.description)
			setGameList(data.games)
			// SETTING TIMEOUT JUST TO SHOWOFF THE LOADER
			setTimeout( () => {
				setIsLoading( prev => !prev )
			}, 1500)
		})
	}, [])

	// JSX
	return (
		<React.Fragment>
			{
				isLoading ? (
					<div className="globalLoader">
						<div className="sk-folding-cube">
							<div className="sk-cube1 sk-cube"></div>
							<div className="sk-cube2 sk-cube"></div>
							<div className="sk-cube4 sk-cube"></div>
							<div className="sk-cube3 sk-cube"></div>
						</div>
					</div>
				) : (
					<>
						<Header />
						<PriceList />
						<Description description={description} />
						<Games games={gameList} />
						<Terms termsList={TermsAndConitions} />
						<Footer />
					</>
				)
			}

		</React.Fragment>
	);
}

export default App;
