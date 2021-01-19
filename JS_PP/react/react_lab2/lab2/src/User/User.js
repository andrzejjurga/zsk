import React, {Component } from 'react';
import '../App.css'

export default class User extends Component{
	
	constructor(props){
		super(props);
		

	}//constructor
	
	render(){
		return(
			<div>
				<h2>Username: {props.username}</h2>
				<h3>Role: {props.role}</h3>
				<p>State: {props.children}</p>
			</div>
		)
	}
}
