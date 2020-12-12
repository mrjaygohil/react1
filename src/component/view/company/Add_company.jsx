import React, { Component } from 'react';

import { Button, Card, CardHeader, CardBody, CardTitle, Col } from "reactstrap";
const $ = require("jquery");
class Add_company extends Component {

    constructor(props) {
        super(props);
        this.state ={
          file:null,
          companyname:"",
          companydesc:"",
          companyno:"",
          companyaddress:""
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
       
    }
      
    onChange(e) {
        const {name,value}=e.target;
        

        if(name === "file"){
            this.setState({file:e.target.files[0]});
        }else{
           this.setState((preval)=>{
               return({...preval,[name]:value})
           });
           
        }

        // if(name ==="companyname"){
        //     this.setState({companyname:value});
        //  }
        console.log(this.state.companyname);
        console.log(this.state.companydesc);
        console.log(this.state.companyno);
        console.log(this.state.file);
     //   this.setState({file:e.target.files[0]})
    }

     onSubmit(e){
        e.preventDefault() 
        // console.log(this.state.companyname);
        // console.log(this.state.file);
        const data={
            companyname:this.state.companyname,
            companydesc:this.state.companydesc,
            companyno:this.state.companyno,
            companyaddress:this.state.companyaddress,
            file:this.state.file
        }
        // console.log(data.companyaddress);
      this.props.InsertCompany(data);
      $('#example-file').val('');
        this.setState(()=>{
            return({ file:null,
                companyname:"",
                companydesc:"",
                companyno:"",
                companyaddress:""})
        });
    }
    
   
   

    
    render() {
        return (
            <>
           
            <Col  className="col-md-12">
            <div className="container">
                <div className="row h-100 justify-content-center align-items-center">
                <div className="col-md-6">
                
                
                <Card className="">
                <CardHeader>
                    <CardTitle tag="h3">
                        <i className="tim-icons icon-bell-55 text-info" />
                        Add Company
                    </CardTitle>
                </CardHeader>
                
                <CardBody>
							<div className="chart-area">
                            <form>
                                <div className="form-group">
                                <label htmlFor="formGroupExampleInput2">Company Name</label>
                                    <input type="text" name="companyname" className="form-control" id="formGroupExampleInput"  placeholder="Enter Company Name" 
                                    value={this.state.companyname} onChange = {this.onChange}/>
                                </div>




                                <div className="form-group">
                                <label htmlFor="inputEmailAddress">Description</label>
                               <textarea  className="form-control" rows="2" cols="4"  value={this.state.companydesc} name="companydesc"  placeholder="Enter Company Description" onChange = {this.onChange}></textarea>
                                 </div>
                                 <div className="form-group">
                                     <label   htmlFor="inputEmailAddress"> Mobile no. </label>
                                    <input className="form-control" name="companyno"  value={this.state.companyno} type="text" placeholder="Enter Company Mobile no." onChange = {this.onChange}/>
                                </div>

                                <div className="form-group">
                                <label   htmlFor="inputEmailAddress">Address</label>
                                 <textarea  className="form-control" rows="2" cols="4"   name="companyaddress" value={this.state.companyaddress} placeholder="Enter Company Address" onChange = {this.onChange}></textarea>
                                 </div>

                                <label  htmlFor="formGroupExampleInput2">Company Image</label>
                                <input type="file" className="form-control" id="example-file"  name="file"  onChange = {this.onChange}/>
                                <div className="form-group">
                                            <Button
                                                className="form-control"
                                                name="categoryname"
                                            
                                                onClick = {this.onSubmit}
                                            >
                                                <h5>Add Company</h5>
                                            </Button>
                                </div>
                            </form>  
							</div>
						</CardBody>
                        </Card>
                     
                </div>
                </div>
                </div>
            </Col>
            </>
        );
    }
}

export default Add_company;