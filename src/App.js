import React from "react";
import Login from "./component/Login";
import User from "./Layout/User/User";
import Admin from "./Layout/Admin/Admin";
import cookie from "react-cookies";
import { Router, Route, Switch, Redirect } from "react-router-dom";
class App extends React.Component {
	constructor(props) {
		console.log("[app js ] constructor");
		super(props);
		this.state = {
			Isloged: cookie.load("Isloged", false),
		};
	}
	componentDidMount() {
		console.log("[app js ] componet did mount ");
	}
	setlogin = (value) => {
		cookie.save("Isloged", value);
		this.setState({ Isloged: value });
	};
	ApiBaseUrl = "----api base url";
	render() {
		// let cookieValue = document.cookie.replace(
		// 	/(?:(?:^|.*;\s*)Isloged\s*\=\s*([^;]*).*$)|^.*$/,
		// 	"$1"
		// );
		console.log("[app js] render");
		return (
			<>
				<Switch>
					<Route
						path="/login"
						render={(props) => (
							<Login
								{...props}
								Isloged={this.state.Isloged}
								setlogin={this.setlogin}
							/>
						)}
					/>
					<Route
						path="/admin"
						render={(props) => (
							<Admin
								{...props}
								Isloged={this.state.Isloged}
								setlogin={this.setlogin}
							/>
						)}
					/>

					<Redirect from="/" to="/login" />
				</Switch>
			</>
		);
	}
}

export default App;
