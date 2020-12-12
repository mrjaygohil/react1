import React, { Component } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import { Card, CardHeader, CardBody, CardTitle, Table, Col } from "reactstrap";
import * as Api from "../../../../Apicalling/CategoryApi";
class ShowAllCategory extends Component {
	constructor(props) {
		super(props);
		this.state = { mainindex: null, temp_categoryname: "" };
	}
	componentDidMount() {}
	temp_categoryname1 = "";
	Editdata = (index) => {
		this.setState({ mainindex: index });
	};
	unchackmain = () => {
		this.setState({ mainindex: "" });
	};
	Edit_add_data = (id) => {
		this.setState({ mainindex: "" });

		let value = this.temp_categoryname1.value;
		this.props.updateData(id, value);
	};
	render() {
		return (
			<>
				<Col lg="8">
					<Card className="card-chart">
						<CardHeader>
							<CardTitle tag="h3">
								<i className="tim-icons icon-bell-55 text-info" />
								Category List
							</CardTitle>
						</CardHeader>
						<CardBody>
							<div className="table-full-width table-responsive chart-area">
								<Table>
									<thead className="text-primary">
										<tr>
											<th>No</th>
											<th className="text-center">Category Name</th>
											<th className="text-center">Edit</th>
											<th className="text-center">Delete</th>
										</tr>
									</thead>
									<tbody>
										{this.props.status === false ? (
											<tr>
												<td className="text-center" colSpan="4">
													Record not Available..
												</td>
											</tr>
										) : (
											this.props.list.map((val, index) => {
												return (
													<tr key={index}>
														{index === this.state.mainindex ? (
															<>
																<td>
																	<CloseIcon onClick={this.unchackmain} />
																</td>
																<td className="text-center">
																	<input
																		className="form-control"
																		type="text"
																		ref={(input) =>
																			(this.temp_categoryname1 = input)
																		}
																		defaultValue={val.category_name}
																	/>
																</td>
																<td className="text-center">
																	<button
																		type="button"
																		className="btn btn-outline-secondary"
																		onClick={() => {
																			this.Edit_add_data(val.category_id);
																		}}
																	>
																		<AddIcon />
																	</button>
																</td>
															</>
														) : (
															<>
																<td>{index + 1}</td>
																<td className="text-center">
																	{val.category_name}
																</td>
																<td className="text-center">
																	<button
																		type="button"
																		className="btn btn-outline-secondary"
																		onClick={() => {
																			this.Editdata(index);
																		}}
																	>
																		<EditIcon />
																	</button>
																</td>
															</>
														)}

														<td className="text-center">
															<button
																type="button"
																className="btn btn-outline-secondary"
																onClick={() => {
																	this.props.deleteData(val.category_id);
																}}
															>
																<DeleteIcon />
															</button>
														</td>
													</tr>
												);
											})
										)}
									</tbody>
								</Table>
							</div>
						</CardBody>
					</Card>
				</Col>
			</>
		);
	}
}

export default ShowAllCategory;
