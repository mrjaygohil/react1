import { Component } from "react";
import ApiUrl from "./ApiUrl";
class Sub_CategoryApi extends Component {
	
	ApiThisPageUrl = "sub_category_managemant.php";

	async getAllSubCategory() {
		return await fetch(`${ApiUrl}${this.ApiThisPageUrl}`, {
			method: "POST",
			body: JSON.stringify({
				task: "select_sub_category",
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
	
	
	
	
	
	
	async InsertSubCategory(category_id,subcategoryname) {
		return await fetch(`${ApiUrl}${this.ApiThisPageUrl}`, {
			method: "POST",
			body: JSON.stringify({
				task: "insert_sub_category",
				category_id: category_id,
				sub_category_name: subcategoryname,
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

	async UpdateSubCategoryData(id,cat_id ,sub_cat_name) {
		return await fetch(`${ApiUrl}${this.ApiThisPageUrl}`, {
			method: "POST",
			body: JSON.stringify({
				task: "update_sub_category",
				id: id,
				category_id:cat_id,
				sub_categoty_name: sub_cat_name,
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
	async DeleteSubCategoryData(id) {
		return await fetch(`${ApiUrl}${this.ApiThisPageUrl}`, {
			method: "POST",
			body: JSON.stringify({
				task: "delete_sub_category",
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

export default Sub_CategoryApi;
