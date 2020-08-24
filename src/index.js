import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';

import "./index.css";
import App from "./components/App";
import reducers from './reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware())

);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

serviceWorker.unregister();
