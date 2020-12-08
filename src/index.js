import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.css";
import Layout from "./components/Layout";
import App from "./components/app/App";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<Layout>
		<App />
	</Layout>,
	document.getElementById("root")
);

serviceWorker.unregister();
