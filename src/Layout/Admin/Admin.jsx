import React, { Fragment } from "react";

import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "./routes.js";
import AdminNavbar from "../../component/AdminNavbar";
import Sidebar from "../../component/Sidebar";
import Dashbord from "../../component/view/Dashbord";
import Category from "../../component/view/category/Category";
import SubCategory from "../../component/view/category/SubCategory";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";


import Product from "../../component/view/product/Product.jsx";
import Company from "../../component/view/company/Company.jsx";
import EditCompany from "../../component/view/company/Edit_company.jsx";

var ps;
class Admin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			backgroundColor: "blue",
			sidebarOpened:
				document.documentElement.className.indexOf("nav-open") !== -1,
		};
	}
	componentDidMount() {
		if (this.props.Isloged === false) {
			this.props.history.push("/login");
		}
		if (navigator.platform.indexOf("Win") > -1) {
			document.documentElement.className += " perfect-scrollbar-on";
			document.documentElement.classList.remove("perfect-scrollbar-off");
			ps = new PerfectScrollbar(this.refs.mainPanel, { suppressScrollX: true });
			let tables = document.querySelectorAll(".table-responsive");
			for (let i = 0; i < tables.length; i++) {
				ps = new PerfectScrollbar(tables[i]);
			}
		}
	}
	componentWillUnmount() {
		if (navigator.platform.indexOf("Win") > -1) {
			ps.destroy();
			document.documentElement.className += " perfect-scrollbar-off";
			document.documentElement.classList.remove("perfect-scrollbar-on");
		}
	}
	componentDidUpdate(e) {
		if (e.history.action === "PUSH") {
			if (navigator.platform.indexOf("Win") > -1) {
				let tables = document.querySelectorAll(".table-responsive");
				for (let i = 0; i < tables.length; i++) {
					ps = new PerfectScrollbar(tables[i]);
				}
			}
			document.documentElement.scrollTop = 0;
			document.scrollingElement.scrollTop = 0;
			this.refs.mainPanel.scrollTop = 0;
		}
	}
	// this function opens and closes the sidebar on small devices
	toggleSidebar = () => {
		document.documentElement.classList.toggle("nav-open");
		this.setState({ sidebarOpened: !this.state.sidebarOpened });
	};

	handleBgClick = (color) => {
		this.setState({ backgroundColor: color });
	};
	getRoutes = (routes) => {
		return routes.map((prop, key) => {
			if (prop.layout === "/admin") {
				return (
					<Route
						path={prop.layout + prop.path}
						component={prop.component}
						key={key}
					/>
				);
			} else {
				return null;
			}
		});
	};
	render() {
		const options = {
			position: "top center",
			timeout: 2000,
			offset: "5px",
			transition: "scale",
		};
	
		return (
			<>
				<div className="wrapper">
					<Sidebar
						{...this.props}
						bgColor={this.state.backgroundColor}
						toggleSidebar={this.toggleSidebar}
					/>
					<div
						className="main-panel"
						ref="mainPanel"
						data={this.state.backgroundColor}
					>
						<AdminNavbar
							{...this.props}
							toggleSidebar={this.toggleSidebar}
							sidebarOpened={this.state.sidebarOpened}
						/>
						<Switch>
							<Fragment>
								<AlertProvider template={AlertTemplate} {...options}>
									<Route path="/admin/dashbord" component={Dashbord} />

									<Route
										path="/admin/category"
										render={(props) => <Category {...props} />}
									/>
									<Route
										path="/admin/subcategory"
										render={(props) => <SubCategory {...props} />}
									/>
									<Route
										path="/admin/company"
										render={(props) => <Company {...props} />}
									/>

								
								<Route	path="/admin/editcompany/:id"
								 render={(props) => <EditCompany {...props}  />}
									/>
								
								<Route
										path="/admin/product"
										render={(props) => <Product {...props} />}
									/>
									<Redirect from="*" to="/admin/company" />
								</AlertProvider>
							</Fragment>
						</Switch>
					</div>
				</div>
			</>
		);
	}
}

export default Admin;
