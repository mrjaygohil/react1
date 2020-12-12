import React, { Component } from "react";
import "./Login.css";

import cookie from "react-cookies";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import swal from "sweetalert";

import "../assets/loader.scss";
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			isloading: false,
		};
		//this.getsingledata = this.getsingledata.bind(this);
	}
	componentDidMount() {
		if (this.props.Isloged === true) {
			this.props.history.push("/admin/dashbord");
			console.log("user is logged in");
		}
	}
	getsingledata = async (unm, pass) => {
		this.setState({ isloading: true });
		fetch("http://localhost/adminApi/Admin/Checking_admin_login_or_not.php", {
			method: "POST",

			body: JSON.stringify({
				admin_name: unm,
				admin_pass: pass,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				//onesetValue(data);
				console.log(data.status);
				if (data.status === true) {
					this.setState({ isloading: false });
					//swal("Yehhh", "Done Successfully..", "success");
					this.props.setlogin(true);
					cookie.save("Isloged", true);
					this.props.setlogin(true);
					this.props.history.push("/admin/dashbord");
				} else {
					this.setState({ isloading: false });
					swal("Password not match", "Please Enter valid password!", "error");
				}
			})
			.catch((error) => {
				this.setState({ isloading: false });
				swal("Opps.!", "Something want wrong!", "error");
			});
		console.log("[app js] getdataa");
	};
	handlechange = (event) => {
		const { name, value } = event.target;

		this.setState((preval) => {
			return { ...preval, [name]: value };
		});
	};
	Checklogin = () => {
		this.getsingledata(this.state.username, this.state.password);
	};

	render() {
		console.log("[login js] render");

		return (
			<>
				{this.state.isloading ? (
					<div className="content1">
						<div className="loading1">
							<p>loading...</p>
							<span></span>
						</div>
					</div>
				) : null}
				<div className="login-dark">
					<form>
						<h2 className="sr-only">Login Form</h2>
						<div className="illustration">
							<LockOutlinedIcon className="icon" />
						</div>
						<div className="form-group">
							<input
								className="form-control"
								type="text"
								name="username"
								value={this.state.username}
								placeholder="User name"
								onChange={this.handlechange}
							/>
						</div>
						<div className="form-group">
							<input
								className="form-control"
								type="password"
								name="password"
								value={this.state.password}
								placeholder="Password"
								onChange={this.handlechange}
							/>
						</div>

						<div className="form-group">
							<p
								className="btn btn-default btn-block"
								onClick={this.Checklogin}
							>
								Log in
							</p>
						</div>

						<p className="forgot">Forgot your email or password?</p>
					</form>
				</div>
			</>
		);
	}
}

export default Login;
