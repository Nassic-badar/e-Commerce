import {Component} from "react";

class Login extends Component{

	constructor(props){
		super(props);
		this.state = {
			email: "abc@test.com",
			password: "abc123",
			message: ""
		};
	}



	render(){
		return(
			<div>
				<h4 className="m-1 p-2 border-bottom">Login</h4>
				<div className="form-group from-group-row">
					<label htmlFor="/#" className="col-lg-4">Email</label>
					<input type="email" className="form-control" 
					value={this.state.email} 
					onChange = {(event)=>{this.setState({email:event.target.value})}}
					/>
				</div>
				<div className="form-group from-group-row">
					<label htmlFor="/#" className="col-lg-4">Password</label>
					<input type="Password" className="form-control"
					value={this.state.password} 
					onChange = {(event)=>{this.setState({password:event.target.value})}}
					/>
				</div>
				<div className="text-right">
				{this.state.message}
				<button className="btn btn-primary m-2" onClick={this.onLoginClick}>Login</button>
				</div>
			</div>
		);
	}

	
	onLoginClick = async () => {
		let response = await fetch(`http://localhost:5000/users?
			email=${this.state.email}&password=${this.state.password}`,
			{method:"GET"}
		);

		let users = await response.json();
		if(users.length > 0){
			this.setState({
				message:(<span className="text-success">Successfuly Logged-in</span>),
			});
		}else{
			this.setState({
				message:(<span className="text-danger">Invalid Login!</span>),
			});
		}
	};


}

export default Login;