import React, { Component } from "react";

// react plugin used to create charts

import { Row } from "reactstrap";

import swal from "sweetalert";

import "../../../assets/loader.scss";
import CatTitle from "./category_sub_component/Cat_title";
import AddCategory from "./category_sub_component/Add_category";

import ShowAllCategory from "./category_sub_component/Show_all_category";

import { withAlert } from "react-alert";

import CategoryApi from "../../../Apicalling/CategoryApi";

class Category extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bigChartData: "data1",
			isloading: false,
			status: false,
			category_data: [{ category_id: "", category_name: "" }],
		};
	}

	componentDidMount() {
		this.getdataasyncronously();
	}
	//---------------------------------main variable-------------------------------------
	alert = this.props.alert;
	Api = new CategoryApi();

	//--------------------------------------get all  category api  --------------------------------
	getdataasyncronously = () => {
		this.getAllCategory();
	};
	getAllCategory = async () => {
		this.setState({ isloading: true });

		let data = await this.Api.getAllCategory();

		if (data === "TypeError: Failed to fetch") {
			this.setState({ status: false });
			this.setState({ isloading: false });
			swal(`Something want wrong..!`, `Server Connection Is Lost..`, "error");
		}

		if (data.status === true) {
			this.setState({ status: true });
			this.setState({ isloading: false });
			this.setState({ category_data: data[0] });
		} else {
			this.setState({ status: false });
			this.setState({ isloading: false });
		}
	};

	//--------------------------------------insert category api --------------------------------
	InsertCategory = async (cat_name) => {
		this.setState({ isloading: true });
		let res = await this.Api.InsertCategory(cat_name);
		if (res.status === true) {
			this.getAllCategory();
			this.setState({ isloading: false });

			this.alert.show("Record Succesfully Inserted...");
		} else {
			this.setState({ isloading: false });

			swal(`Not done`, `Can't Insert Record..`, "error");
		}
	};

	//-------------------------Update data -----------------------------------------------------

	UpdateCategoryData = async (id, cat_name) => {
		this.setState({ isloading: true });
		let res = await this.Api.UpdateCategoryData(id, cat_name);
		if (res.status === true) {
			this.getAllCategory();
			this.setState({ isloading: false });
			this.alert.show("Record Succesfully Updated...");
		} else {
			this.setState({ isloading: false });
			swal(`Not done`, `Can't update Record..`, "error");
		}
	};

	//-------------------------Delete data -----------------------------------------------------

	DeleteCategoryData = async (id) => {
		this.setState({ isloading: true });
		let res = await this.Api.DeleteCategoryData(id);
		if (res.status === true) {
			this.getAllCategory();
			this.setState({ isloading: false });
			this.alert.show("Record Succesfully Deleted...");
		} else {
			this.setState({ isloading: false });
			swal(`Not done`, `Can't Deleted Record..`, "error");
		}
	};
	setBgChartData = (name) => {
		this.setState({
			bigChartData: name,
		});
	};
	handlechange = (event) => {
		let cat_name = event.target.value;
		this.setState({
			category_name: cat_name,
		});
	};
	submitdata = (e, val) => {
		e.preventDefault();
		e.stopPropagation();
		this.InsertCategory(val);
		this.getAllCategory();
	};

	render() {
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
				<div className="content">
					<CatTitle title="Category Management" />
					<Row>
						<AddCategory onclick={this.submitdata} />

						<ShowAllCategory
							list={this.state.category_data}
							status={this.state.status}
							deleteData={this.DeleteCategoryData}
							updateData={this.UpdateCategoryData}
						/>
					</Row>
				</div>
			</>
		);
	}
}

export default withAlert()(Category);
