import {Component} from "react";

class CustomersList extends Component{

	state = {
		pageTitle: "customers",
		customersCount: 5,
		customers: [
		{
			id: 1, name: "Scot", phone: "123-456", 
			address: {city: "London"},
			photo: "https://robohash.org/1?size=100x100"
		},
		{
			id: 2, name: "Jones", phone: "456-789", 
			address: {city: "Berlin"},
			photo: "https://robohash.org/2?size=100x100"
		},
		{
			id: 3, name: "Allen", phone: "987-654", 
			address: {city: "New Jersy"},
			photo: "https://robohash.org/3?size=100x100"
		},
		{
			id: 4, name: "James", phone: null , 
			address: {city: "Hong Kong"},
			photo: "https://robohash.org/4?size=100x100"
		},
		{
			id: 5, name: "John", phone: null, 
			address: {city: "Melborn"},
			photo: "https://robohash.org/5?size=100x100"
		}
		]
	};


	render(){
		return(
			<div>
				<h4 className = "border-bottom m-1 p-1 "> {this.state.pageTitle}
					<span className = "badge badge-secondary m-2"> {this.state.customersCount}</span>
					<button className = "btn btn-info" onClick = {this.onRefreshClick}>Refresh</button>
				</h4>
				<table className = "table table-dark text-center">
					<thead>
						<tr>
							<th>ID</th>
							<th>Photo</th>
							<th>Customer Name</th>
							<th>Phone</th>
							<th>City</th>
						</tr>
					</thead>
					<tbody className='text-center'>
						{
						this.state.customers.map((cust,index) => {
							return(
								<tr key={cust.id}>
									<td>{cust.id}</td>
									<td>
										<img src={cust.photo} alt="Customer"/>
										<div>
											<button className="btn btn-sm btn-secondary" onClick={()=>{this.onChangePictureClick(cust,index);}}>Change Picture</button>
										</div>
									</td>
									<td>{cust.name}</td>
									<td>{this.getPhoneToRender(cust.phone)}</td>
									<td>{cust.address.city}</td>
								</tr>
									
							);
						})
						}
					</tbody>
				</table>
			</div>
		);
	}



	onRefreshClick = () => {
		this.setState({
			customersCount: Math.round(Math.random(100))
		});
	};


	getPhoneToRender = (phone) => {
		return phone ?
		(phone) :
		(<div className = "bg-warning p-2 text-center"> No Phone </div>);
	};


	onChangePictureClick = (cust,index) => {
		let custArr = this.state.customers;
		custArr[index].photo = `https://robohash.org/${Math.random()}?size=100x100`;
		this.setState({customers: custArr});
	}


	// method for styling customers names
	// customerNameStyle = (custName) => {
	// 	if(custName.startsWith("S")) return "green-highlight border-left";
	// 	else if(custName.startsWith("J")) return "red-highlight border-right";
	// 	else return {};
	// }


	// Method for rendring customer row 
	// getCustomerRow = () => {
	// 	return (this.state.customers.map((cust) => {
	// 		return (
	// 			<tr key = {cust.id}>
	// 				<td>{cust.id}</td>
	// 				<td>{cust.name}</td>
	// 				<td>{this.getPhoneToRender(cust.phone)}</td>
	// 				<td>{cust.address.city}</td>
	// 			</tr>
	// 		);
	// 	}));
	// }



}



export default CustomersList;