import {Component} from "react";
import {Routes, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import NavBar from "./NavBar.js";
import Login from "./Login.js";
import Dashboard from "./Dashboard.js";
import CustomersList from "./CustomersList.js";
import ShoppingCart from "./ShoppingCart.js";
import PageNotFound from "./PageNotFound.js";


class App extends Component {

	render() {
		return(
			<BrowserRouter>
				<NavBar />
				<div className="container-fluid">
					<Routes>
						<Route path="/" exact element={<Login/>}/>
						<Route path="/Dashboard" exact element={<Dashboard/>}/>
						<Route path="/CustomersList" exact element={<CustomersList/>}/>
						<Route path="/ShoppingCart" exact element={<ShoppingCart/>}/>
						<Route path="*" element={<PageNotFound/>}/>
					</Routes>
				</div>
			</BrowserRouter>	
		);
	}

}



export default App;