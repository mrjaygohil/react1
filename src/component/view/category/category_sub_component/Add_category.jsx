import React, { Component } from "react";
import { Button, Card, CardHeader, CardBody, CardTitle, Col } from "reactstrap";

class AddCategory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
		};
	}

	handlechange = (e) => {
		let name = e.target.value;
		this.setState({ value: name });
	};
	onclick = (e) => {
		e.preventDefault();
		e.stopPropagation();
		console.log(this.state.value);

		this.props.onclick(e, this.state.value);
		this.setState({ value: "" });
		//alert.show("Oh look, an alert!");
	};
	render() {
		return (
			<>
				<Col lg="4">
					<Card className="card-chart">
						<CardHeader>
							<CardTitle tag="h3">
								<i className="tim-icons icon-bell-55 text-info" />
								Add Category
							</CardTitle>
						</CardHeader>
						<CardBody>
							<div className="chart-area">
								<form
									onSubmit={(e) => {
										this.onclick(e);
									}}
								>
									<div className="form-group">
										<input
											className="form-control"
											type="text"
											name="categoryname"
											value={this.state.value}
											placeholder="Enter Category"
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
											<h5>Add category</h5>
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

export default AddCategory;
