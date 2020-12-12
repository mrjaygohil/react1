import ApiUrl from "./ApiUrl";
import { Component } from "react";

import axios from 'axios'; 
class CompanyApi extends Component {
 
	ApiThisPageUrl = "company_management.php";
	ApiThisSelect = "company_select.php";
	async getAllCompany() {
	
		return await fetch(`${ApiUrl}${this.ApiThisSelect}`, {
			method: "POST",
			body: JSON.stringify({
				task: "select_company",
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				return data;
			})
			.catch((error) => {
				console.log("data--error--", error);
				return error;
			});
     
	}

	


	async InsertCompany(data) {
		console.log("api--",data.companyname);
        console.log("api--",data.file);
        const formData = new FormData();
        
        formData.append('avatar',data.file);
      
		formData.append('task',"insert_company");
		formData.append('cpnm',data.companyname);
		formData.append('cpdes',data.companydesc);
		formData.append('cpno',data.companyno);
		formData.append('cpadd',data.companyaddress);
		
        return  await axios.post(`${ApiUrl}${this.ApiThisPageUrl}`, formData,{
            headers: {
                'content-type': 'multipart/form-data'
            }
        }).then((response) => response)
			.then((data) => {
                console.log("data..",data);
				return data;
			})
			.catch((error) => {
                console.log(error);
				return error;
			});
    
    
       
	}

	async DeleteCompanyData(id) {
		return await fetch(`${ApiUrl}${this.ApiThisSelect}`, {
			method: "POST",
			body: JSON.stringify({
				task: "delete_company",
				id: id,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				return data;
			})
			.catch((error) => {
				return error;
			});
	}

	render() {
		return null;
	}
}

export default CompanyApi;
