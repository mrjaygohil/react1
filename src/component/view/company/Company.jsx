import React, { Component } from 'react';

import { Row } from "reactstrap";
import swal from "sweetalert";




import "../../../assets/loader.scss";
import { withAlert } from "react-alert";
import Company_title from './Company_title';
import Add_company from './Add_company';

import CompanyApi from "../../../Apicalling/CompanyApi";
import ShowAllCompany from './Show_all_company';


class Company extends Component {
    constructor(props) {
		super(props);
		this.state = {
			bigChartData: "data1",
			isloading: false,
            status: false,
            company_data: [{ company_id:"", company_name:"",company_des:"",company_mobile:"", company_address:"",company_img:""}],
		};
    }
    alert = this.props.alert;
	Api = new CompanyApi();
    componentDidMount() {
		this.getdataasyncronously();
    }
  

    getdataasyncronously = () => {
		this.getAllCompany();
    };
    



    getAllCompany = async () => {
		this.setState({ isloading: true });
       
		let data = await this.Api.getAllCompany();
     
 
    
		if (data === "TypeError: Failed to fetch") {
		this.setState({ status: false });
			this.setState({ isloading: false });
			swal(`Something want wrong..!`, `Server Connection Is Lost..`, "error");
		}

		if (data.status === true) {
			this.setState({ status: true });
            this.setState({ isloading: false });
        
			this.setState({ company_data: data[0] });
		} else {
			this.setState({ status: false });
			this.setState({ isloading: false });
        }
       
       
       
 
	};
  


      InsertCompany = async (data) => {
		this.setState({ isloading: true });
        let res = await this.Api.InsertCompany(data);
       console.log("res.",res.data);
		if (res.data.status === true) {
			this.getAllCompany();
			this.setState({ isloading: false });
			this.alert.show("Record Succesfully Inserted...");
        }
         if(res.data.status === false && res.data.message === "===plase select valid image formate===" ) {
			this.setState({ isloading: false });
			swal(`Not done`, `Invalid Image Formate...`, "error");
        }
        if(res.data.status === false && res.data.message === "===file not move===" ) {
		this.setState({ isloading: false });
			swal(`Not done`, `Record Not Inserted..file not moved..`, "error");
        }
        if(res.data.status === false && res.data.message === "===not insert data===" ) {
			 this.setState({ isloading: false });
            swal(`Not done`, `Record Not Inserted..`, "error");
        }
        this.setState({ isloading: false });
     
    };
    


    DeleteCompanyData = async (id) => {
		this.setState({ isloading: true });
		let res = await this.Api.DeleteCompanyData(id);
		if (res.status === true) {
			this.getAllCompany();
			this.setState({ isloading: false });
			this.alert.show("Record Succesfully Deleted...");
		} else {
			this.setState({ isloading: false });
			swal(`Not done`, `Can't Deleted Record..`, "error");
		}
	};



    
    
    submitdata = (e, val) => {
		e.preventDefault();
		e.stopPropagation();
		//this.InsertCategory(val);
	//	this.getAllCategory();
	};
	//---------------------------------main variable-------------------------------------
	

   
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
                    <Company_title title="Company Management" />
                        <Row>
                        <Add_company onclick={this.submitdata} InsertCompany={this.InsertCompany}/>
                        
                        <ShowAllCompany 	
                        list={this.state.company_data}
                        status={this.state.status}
                        deleteData={this.DeleteCompanyData}
                        />
                        </Row>
                    </div>
           
            </>
        );
    }
}

export default withAlert()(Company);
