import ApiUrl from "./ApiUrl";
import { Component } from "react";

class CategoryApi extends Component {
	
	ApiThisPageUrl = "category_managemant.php";
	async getAllCategory() {
		return await fetch(`${ApiUrl}${this.ApiThisPageUrl}`, {
			method: "POST",
			body: JSON.stringify({
				task: "select_category",
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
	async InsertCategory(cat_name) {
		return await fetch(`${ApiUrl}${this.ApiThisPageUrl}`, {
			method: "POST",
			body: JSON.stringify({
				task: "insert_category",
				categoty_name: cat_name,
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

	async UpdateCategoryData(id, cat_name) {
		return await fetch(`${ApiUrl}${this.ApiThisPageUrl}`, {
			method: "POST",
			body: JSON.stringify({
				task: "update_category",
				id: id,
				categoty_name: cat_name,
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
	async DeleteCategoryData(id) {
		return await fetch(`${ApiUrl}${this.ApiThisPageUrl}`, {
			method: "POST",
			body: JSON.stringify({
				task: "delete_category",
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

export default CategoryApi;
