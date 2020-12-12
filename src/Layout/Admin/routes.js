/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "../../component/view/Dashbord";
import Categoty from "../../component/view/category/Category";

var routes = [
	{
		path: "/dashboard",
		name: "Dashboard",
		icon: "tim-icons icon-chart-pie-36",
		component: Dashboard,
		layout: "/admin",
	},
	{
		path: "/icons",
		name: "Categoty",
		icon: "tim-icons icon-atom",
		component: Categoty,
		layout: "/admin",
	},
];
export default routes;
