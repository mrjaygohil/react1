import React, { Component } from "react";
import { Button, Card, CardHeader, CardBody, CardTitle, Col } from "reactstrap";

import "./subcat.css";
class AddSubCategory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data:{category:"?",
			subcategoryname:""},
			Isloading:""
			
		};
	}
	

	componentDidMount() {
		this.props.getallcategory();
	}
	handlechange = (event) => {
		const { name, value } = event.target;

		//this.setState((preval)=> ({...preval,data:{...preval.data,[name]:value}})); //short code for set state.
		
		this.setState((preval)=>{
			
			return({...preval,data:{...preval.data,[name]:value}});
		});
			 	
		
	
	
		
	
	};


	onclick = (e) => {
		e.preventDefault();
		e.stopPropagation();
		
		console.log("val=",this.state.data.category);
		
		console.log("val=",this.state.data.subcategoryname);
	
		this.props.submitdata(e, this.state.data);
		//this.setState({ value: "" });
		// this.setState((preval)=>{
			
		// 	return({...preval,data:{...preval.data,[name]:value}});
		// });
		//alert.show("Oh look, an alert!");
	};
	render() {
		//const {category} = this.state;
		return (
			<>
				<Col lg="4">
					<Card className="card-chart">
						<CardHeader>
							<CardTitle tag="h3">
								<i className="tim-icons icon-bell-55 text-info" />
								Add Sub Category
							</CardTitle>
						</CardHeader>
						<CardBody>
							<div className="chart-area">
								<form
									onSubmit={(e) => {
										this.onclick(e);
									}}
								>
									<div className="form-group"></div>
									<div className="form-group">
										<select className="form-control" name="category" value={this.state.data.category} onChange={this.handlechange}>
											<option className="select-items " value="null">
												--{"  "} Select Category{"  "} --
											</option>
											{this.props.status_category === false ? (
												<option className="select-items " value="null">
													Records are not load
												</option>
											) : (
												this.props.list.map((val, index) => {
													return (
														<option
															className="select-items "
															value={val.category_id}
															key={index}
														>
															{val.category_name}
														</option>
													);
												})
											)}
										</select>
									</div>
									<div className="form-group">
										<input
											className="form-control"
											type="text"
											name="subcategoryname"
											value={this.state.data.subcategoryname}
											placeholder="Enter Sub-Category"
											onChange={this.handlechange}
											required
										/>
									</div>
									<div className="form-group">
										<Button
											className="form-control"
											name="categoryname"
											type="submit"
										>
											<h5>Add Sub-Category</h5>
										</Button>
									</div>
									<div className="form-group"></div>
								</form>
							</div>
						</CardBody>
					</Card>
				</Col>
			</>
		);
	}
}

export default AddSubCategory;
