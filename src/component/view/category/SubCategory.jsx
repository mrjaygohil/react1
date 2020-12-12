import React, { Component } from "react";

// react plugin used to create charts

import { Row } from "reactstrap";

import swal from "sweetalert";

import "../../../assets/loader.scss";
import CatTitle from "./category_sub_component/Cat_title";
import AddSubCategory from "./sub-category_sub_component/Add_sub_category";

import ShowSubAllCategory from "./sub-category_sub_component/Show_all_sub_category";

import { withAlert } from "react-alert";

import CategoryApi from "../../../Apicalling/CategoryApi";
import Sub_CategoryApi from "../../../Apicalling/Sub_CategoryApi";
class SubCategory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bigChartData: "data1",
			isloading: false,
			category_data: [{ category_id: "", category_name: "" }],
			sub_category_data: [{ sub_category_id: "",category_id: "", sub_category_name: "",category_name:"" }],
			
			status_category: false,
			status_sub_category:false
		};
	}

	componentDidMount() {
		this.getAllCategory();
		this.getAllSubCategory();
	}
	alert = this.props.alert;
	Api_category = new CategoryApi();
	Api_sub_category= new Sub_CategoryApi();
	//---------------------------select all category------------------------------------

	getAllCategory = async () => {
		this.setState({ isloading: true });

		let data = await this.Api_category.getAllCategory();

		if (data === "TypeError: Failed to fetch") {
			this.setState({ status_category: false });
			this.setState({ isloading: false });
			swal(`Something want wrong..!`, `Server Connection Is Lost..`, "error");
		}

		if (data.status === true) {
			this.setState({ status_category: true });
			this.setState({ isloading: false });
			this.setState({ category_data: data[0] });
		} else {
			this.setState({ status_category: false });
			this.setState({ isloading: false });
		}
	};

	//---------------------------select all category------------------------------------

	getAllSubCategory = async () => {
		this.setState({ isloading: true });

		let data = await this.Api_sub_category.getAllSubCategory();

		if (data === "TypeError: Failed to fetch") {
			this.setState({ status_sub_category: false });
			this.setState({ isloading: false });
			swal(`Something want wrong..!`, `Server Connection Is Lost..`, "error");
		}

		if (data.status === true) {
			this.setState({ status_sub_category: true });
			this.setState({ isloading: false });
			this.setState({ sub_category_data: data[0] });
		} else {
			this.setState({ status_sub_category: false });
			this.setState({ isloading: false });
		}
	};
	//--------------------------------------insert sub category api --------------------------------
		InsertSubCategory = async (val) => {
		//	this.setState({ isloading: true });


			console.log(val.category);
			console.log(val.subcategoryname);
			let res = await this.Api_sub_category.InsertSubCategory(val.category,val.subcategoryname);
			if (res.status === true) {
				this.getAllSubCategory();
				this.setState({ isloading: false });

				this.alert.show("Record Succesfully Inserted...");
			} else {
				this.setState({ isloading: false });
				
				swal(`Not done`, `Can't Insert Record..`, "error");
				
			}
		};
	//-------------------------Update data -----------------------------------------------------
	UpdateSubCategoryData = async (id,cat_id ,sub_cat_name) => {
		console.log(id+"=="+cat_id);
		this.setState({ isloading: true });
		let res = await this.Api_sub_category.UpdateSubCategoryData(id,cat_id ,sub_cat_name);
		if (res.status === true) {
			this.getAllSubCategory();
			this.setState({ isloading: false });
			this.alert.show("Record Succesfully Updated...");
		} else {
			this.setState({ isloading: false });
			swal(`Not done`, `Can't update Record..`, "error");
		}
	};
	//-------------------------Delete data -----------------------------------------------------
	DeleteSubCategoryData = async (id) => {
		this.setState({ isloading: true });
		let res = await this.Api_sub_category.DeleteSubCategoryData(id);
		if (res.status === true) {
			this.getAllSubCategory();
			this.setState({ isloading: false });
			this.alert.show("Record Succesfully Deleted...");
		} else {
			this.setState({ isloading: false });
			swal(`Not done`, `Can't Deleted Record..`, "error");
		}
	};

	//----------------------------api over ----------------------------------------------------
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
		this.InsertSubCategory(val);
		this.getAllSubCategory();
	};
	// alertshow = () => {
	// 	this.props.alert;
	// 	console.log("alert");
	// };
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
					<CatTitle title="Sub - Category Management" />
					<Row>
						<AddSubCategory
						submitdata={this.submitdata}
							status_category={this.state.status_category}
							list={this.state.category_data}
							getallcategory={this.getAllCategory}
						/>
						<ShowSubAllCategory
						list={this.state.sub_category_data}
						catlist={this.state.category_data}
						status={this.state.status_sub_category}
						deleteData={this.DeleteSubCategoryData}
						updateData={this.UpdateSubCategoryData}
						/>
						
					</Row>
				</div>
			</>
		);
	}
}

export default withAlert()(SubCategory);
