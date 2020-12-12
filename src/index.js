import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "./assets/scss/black-dashboard-react.scss";
import "./assets/demo/demo.css";
import "./assets/css/nucleo-icons.css";

import App from "./App";
const hist = createBrowserHistory();
ReactDOM.render(
	<>
		<Router history={hist}>
			<App />
		</Router>
	</>,
	document.getElementById("root")
);
