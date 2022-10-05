import {Component} from "react";


class Product extends Component{

	constructor(props){
		super(props);
		this.state = {
			id: this.props.product.id,
			productName: this.props.product.productName,
			price: this.props.product.price,
			quantity: this.props.product.quantity
		}
	}

	


	render() {
		return(
			<div className="col-lg-6">
				<div className="card m-2">
					<div className="card-body">
						<div className="text-muted">
							#{this.state.id}
							<span className="pull-right hand-icon"
							// onClick={()=>{this.props.onDelete(this.props.product);}}
							>
								<i className="fa fa-times"></i>
							</span>
						</div>
						<h5 className="pt-2 border-top">{this.state.productName}</h5>
						<div>${this.state.price}</div>
					</div>
					<div className="card-footer text-right">
						<div className="float-left">
							<span className="badge">{this.state.quantity}</span>
							<div className="btn-group">
								<button className="btn btn-outline-success" 
								// onClick={()=>{this.props.onIncrement(this.props.product, 10);}}
								> +
								</button>
								<button className="btn btn-outline-success" 
								// onClick={()=>{this.props.onDecrement(this.props.product, 0);}}
								> -
								</button>
							</div>
						</div>
						<div className="float-right">
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		);
	}
}		


export default Product;