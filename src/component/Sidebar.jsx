import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import logo1 from "../assets/img/favicon.png";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import "./slidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// reactstrap components
import { Nav } from "reactstrap";

const $ = require("jquery");
var ps;

class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.activeRoute.bind(this);
		this.state = { toggle: false };
		console.log("[sidebar] constrctor");
	}
	style = {
		backgroundColor: "#525f7f",
		borderRadius: "4%",
		boxShadow: "1px 1px 6px 1px",
	};
	style1 = {};

	// verifies if routeName is the one active (in browser input)
	activeRoute(routeName) {
		return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
	}
	linkOnClick = () => {
		document.documentElement.classList.remove("nav-open");
	};
	componentDidMount() {
				if (navigator.platform.indexOf("Win") > -1) {
					ps = new PerfectScrollbar(this.refs.sidebar, {
						suppressScrollX: true,
						suppressScrollY: false,
					});
					console.log("[sidebar] cmpdidm");
				}

			let down = true;
	
			$(".liclicking").on("click", function () {
		
				$(".liclicking").addClass("toggleclass");
				$(".hideandshow").slideDown(1000);
				$("#navright").hide(500);

				$("#navdown").show(500);

			});


			$(".liclicking").on("mouseleave", function () {
				$("#navdown").hide(500);
				$(".hideandshow").slideUp(500);
				$("#navright").show(500);
				$(".liclicking").removeClass("toggleclass");
				
			});
	
	
	}

	componentWillUnmount() {
		if (navigator.platform.indexOf("Win") > -1) {
			ps.destroy();
		}
		console.log("[sidebar] cmpwill");
		//this.setState({ toggle: false });
	}
	
	togglecat = () => {
			this.setState({ toggle: !this.state.toggle });
	};

	render() {
		console.log("[sidebar] render");
		window.onclick = function(event) {
			if (event.target.matches('#liclicking')) {
			 console.log("ttt");
			}
		  }

		const { bgColor, routes, rtlActive, logo } = this.props;
		let logoImg = null;
		let logoText = null;
		
	
		
		if (this.state.toggle === false) {
			this.style = {};
		} else {
			this.style = {
				backgroundColor: "#32325d",
				borderRadius: "4%",
				boxShadow: "1px 1px 6px 1px skyblue",
			};
		}

		return (
			<div className="sidebar" data={bgColor}>
				<div className="sidebar-wrapper" ref="sidebar">
					<div className="logo">
						<Link to="" className="simple-text logo-mini">
							<div className="logo-img">
								<img src={logo1} alt="" />
							</div>
						</Link>
						<Link
							to=""
							className="simple-text logo-normal"
							style={{ color: "black" }}
						>
							Manu
						</Link>
					</div>

					<Nav>
						<li>
							<NavLink
								to="/admin/dashbord"
								className="nav-link "
								onClick={() => {
									this.props.toggleSidebar();
								}}
							>
								<h5>
									<NavigateNextIcon />
									Dashbord
								</h5>
							</NavLink>
						</li>
						<li  className="liclicking" id="liclicking" > 
							<a
								className="nav-link "
								
							>
								<h5>
									<NavigateNextIcon id="navright" />
									<ExpandMoreIcon
										id="navdown"
										style={{ display: "none" }}
										onClick={() => {
											this.props.toggleSidebar();
										//	this.togglecat();
										}}
									/>{" "}
									Category Management
								</h5>
							</a>

							<ul className="hideandshow">
								<li className="slide-fade">
									<NavLink
										to="/admin/category"
										className="nav-link "
										activeClassName="active"
										onClick={() => {
											this.props.toggleSidebar();
											//this.togglecat();
										}}
									>
										<h5>
											<NavigateNextIcon />
											Category
										</h5>
									</NavLink>
								</li>
								<li className="slide-fade">
									<NavLink
										to="/admin/subcategory"
										className="nav-link "
										onClick={() => {
											this.props.toggleSidebar();
											//this.togglecat();
										}}
									>
										<h5>
											<NavigateNextIcon />
											Sub Category
										</h5>
									</NavLink>
								</li>
							</ul>
						</li>
						<li>
							<NavLink
								to="/admin/company"
								className="nav-link "
								onClick={this.props.toggleSidebar}
							>
								<h5>
									<NavigateNextIcon /> Company 
								</h5>
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/admin/product"
								className="nav-link "
								onClick={this.props.toggleSidebar}
							>
								<h5>
									<NavigateNextIcon /> Product 
								</h5>
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/admin/editcompany"
								className="nav-link "
								activeClassName="active"
								onClick={this.props.toggleSidebar}
							>
								<h5>
									<NavigateNextIcon />
									edit company
								</h5>
							</NavLink>
						</li>
						<li>
							<NavLink
								to=""
								className="nav-link "
								activeClassName="active"
								onClick={this.props.toggleSidebar}
							>
								<i className="tim-icons icon-atom" />
								<h5>sub 1</h5>
							</NavLink>
						</li>
					</Nav>
				</div>
			</div>
		);
	}
}

Sidebar.defaultProps = {
	rtlActive: false,
	bgColor: "primary",
	routes: [{}],
};

Sidebar.propTypes = {
	// if true, then instead of the routes[i].name, routes[i].rtlName will be rendered
	// insde the links of this component
	rtlActive: PropTypes.bool,
	bgColor: PropTypes.oneOf(["primary", "blue", "green"]),
	routes: PropTypes.arrayOf(PropTypes.object),
	logo: PropTypes.shape({
		// innerLink is for links that will direct the user within the app
		// it will be rendered as <Link to="...">...</Link> tag
		innerLink: PropTypes.string,
		// outterLink is for links that will direct the user outside the app
		// it will be rendered as simple <a href="...">...</a> tag
		outterLink: PropTypes.string,
		// the text of the logo
		text: PropTypes.node,
		// the image src of the logo
		imgSrc: PropTypes.string,
	}),
};

export default Sidebar;
