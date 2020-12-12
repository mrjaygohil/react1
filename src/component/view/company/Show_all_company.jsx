import React, { Component } from 'react';
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import { Card, CardHeader, CardBody, CardTitle, Table, Col } from "reactstrap";
import {DataTable} from "simple-datatables"

import { NavLink, Link } from "react-router-dom";
import "./datatable.css";
const $ = require("jquery");
class ShowAllCompany extends Component {
    constructor(props) {
		super(props);
		
    }
    
   componentDidMount(){
    //const dataTable = new DataTable("#myTable");

    }
 
      
    render() {
        return (
            <>
           <div className="container">
                        <table className="table table-borderd" id="myTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                    <th>No</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                 <th>Contact</th>
                                <th>Address</th>
                                <th>Description</th>
                                <th>Edit</th>
                                <th>Delete</th>
                                    
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                 <th>No</th>
                                 <th>Image</th>
                                 <th>Name</th>
                                <th>Contact</th>
                                <th>Address</th>
                                <th>Description</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </tfoot>
                        <tbody>
                        {this.props.status === false ?
                           (  <><tr>
                                    <td colSpan="7" align="center">
                                        Record not Available..
                                    </td>
                            </tr>
                            </>)
                        
                        
                        :  (  <>

                            {this.props.list.map((val,i)=>{
                            
                                let img=`http://localhost/AdminApi/Admin/image/${val.company_img}`;
                                let url=`/admin/editcompany/${val.company_id}`;
                                return( <> 
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                   
                                        <td><img src={img} width="70px" alt="logo" /> </td>
                                        <td>{val.company_name}</td>
                                        <td>{val.company_mobile}</td>
                                        <td>{val.company_address}</td>
                                        <td>{val.company_des}</td>
                                      
                                     
                                        <td><NavLink to={url} className="btn btn-dark"><EditIcon/></NavLink></td>
                                        <td><a className="btn btn-dark"
                                        onClick={() => {
                                            this.props.deleteData(val.company_id);
                                        }}
                                        ><DeleteIcon/></a></td>
                                    </tr>
                                    
                                    
                                    </>)
                            })}
                            
                           
                    </>)}
                            
                        
                        </tbody>
                    </table>
                    </div>
            </>
        );
    }
}

export default ShowAllCompany;