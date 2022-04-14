import React, { Component } from "react";
import { render } from "react-dom";
import Homepage from "./homepage";
import "../../static/css/index.css";
import ReactDOM from "react-dom";
import Projectsdetails from "./Projectsdetailsfolder/details"
import {
	BrowserRouter as Router,
	Switch,
	Link,
	Redirect,
	Route,
} from "react-router-dom";
import Mainpage from "./mainpage";



export default class App extends Component{
	constructor(props){
		super(props)
	}
	render (){
		return(
			<div>
			<Mainpage />

		   </div>

		)
	}


	


}
const appDiv = document.getElementById("app");
render(<App />, appDiv);