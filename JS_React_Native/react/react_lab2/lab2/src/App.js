import React, {Component} from 'react';
import './App.css'
import Customer from './Customer/Customer'


class User extends Component{
	
	constructor(props){
		super(props);
		

	}//constructor
	
	render(){
		return(
			<div>
				<h2>Username: {this.props.username}</h2>
				<h3>Role: {this.props.role}</h3>
				<p>State: {this.props.children}</p>
			</div>
		)
	}
}//User


class App extends Component {

  active = "Active";
  inactive = "Inactive";

  state = {
    username: "Szymon2",
    role: "admin",
    active: true
  }


  setUserDataHandler = () => {
    console.log("triggering setUserDataHandler");
    const username = document.getElementById("username").value;
    const role = document.getElementById("role").value;
    const active = document.getElementById("active").checked;

    // nie rób tego
    // this.state.username = username;
 
    this.setState(
      {
        username: document.getElementById("username").value,
        role: role,
        active: active
      }
    );

  }

  onCopyHandler = () => {
    console.log("onCopyHandler");
  }

  onMouseEnter = () => {
    console.log("onMouseEnter");
  }

  onMouseLeave = () => {
    console.log("onMouseLeave");
  }


  render(){  


    return(
      <div className='App'>
        <h1 className='Red-color' onCopy={this.onCopyHandler} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>Hello, I am a react App</h1>

        <div className="FormContainer">
          <label className="FormLabel">Username</label>
          <input className="FormElement" type="text" id="username" />
          <label className="FormLabel">Role</label>
          <input className="FormElement" type="text" id="role" />
          <label className="FormLabel">Active</label>
          <input className="FormElement" type="checkbox" id="active" />
          <button onClick={this.setUserDataHandler} className="FormButton">Show user</button>
        </div>



    <User username={this.state.username} role={this.state.role}>{this.state.active ? this.active : this.inactive}</User>
      <Customer />
      </div>
      
      
      // React.createElement('div', null, React.createElement('h1', {className: 'Red-color'}, 'Hello, I am a react App'))
    );
  }
}

export default App;