import React, { Component } from 'react';
import { Row } from "reactstrap";
import swal from "sweetalert";




import "../../../assets/loader.scss";
import { withAlert } from "react-alert";
import Product_title from './Product_title';



class Product extends Component {
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
                    <Product_title title="Product Management" />
                        <Row>

                           product
                        </Row>
                    </div>
           
            </>
        );
    }
}

export default withAlert()(Product);





	
