import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.css";
import { Layout } from "./components/common";
import App from "./components/app";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<Layout>
		<App />
	</Layout>,
	document.getElementById("root")
);

serviceWorker.unregister();
