

import React, { Component } from 'react';
import { Row } from "reactstrap";
import swal from "sweetalert";

import "../../../assets/loader.scss";
import Company_title from "./Company_title";
import { withAlert } from "react-alert";




class EditCompany extends Component {
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
        console.log(this.props.match.params.id);
	}
	//---------------------------------main variable-------------------------------------
	alert = this.props.alert;

   
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
                    <Company_title title="Edit Company Details" />
                        <Row>
                           
                        </Row>
                    </div>
           
            </>
        );
    }
}

export default withAlert()(EditCompany);
