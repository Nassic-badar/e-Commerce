import {Component} from "react";
import Product from "./Product";


class ShoppingCart extends Component{


	constructor(props){
		super(props);
		this.state = {
			"products": [],
		};
	}


	render() {
		return(
			<div>
				<h4>Shopping Cart</h4>
				<div className="row">
					{this.state.products.map((prod)=>{
						return(
							<Product 
							key={prod.id} 
							product={prod}
							// onIncrement={this.handleIncrement}
							// onDecrement={this.handleDecrement}
							// onDelete={this.handleDelete}
							>
								<button className="btn btn-primary">Buy Now</button>
						</Product>);
					})}
				</div>
			</div>
		);
	}


	componentDidMount = async () => {
		let response = await fetch("http://localhost:5000/products", {METHOD:"GET"});
		let productsArr = await response.json();
		this.setState({products:productsArr})
	}

	// handleIncrement = (product, maxValue) => {
	// 	let allProducts = [...this.state.products];
	// 	let index = allProducts.indexOf(product);
	// 	if(allProducts[index].quantity < maxValue){
	// 		allProducts[index].quantity++;
	// 		this.setState({products:allProducts});
	// 	};
	// }

	// handleDecrement = (product, minValue) => {
	// 	let allProducts = [...this.state.products];
	// 	let index = allProducts.indexOf(product);
	// 	if(allProducts[index].quantity > minValue){
	// 		allProducts[index].quantity--;
	// 		this.setState({products: allProducts});
	// 	};
	// }

	// handleDelete = (product) => {
	// 	let allProducts = [...this.state.products];
	// 	let index = allProducts.indexOf(product);
	// 	allProducts.slice(index,1);
	// 	this.setState({products: allProducts});
	// }

}


export default ShoppingCart;