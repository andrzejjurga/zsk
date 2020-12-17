import React, {Component} from 'react';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      userName: "XD",
      newItemText: ""
    }
  };
  render(){
  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-dark justify-content-end">
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search for..." aria-label="Search"></input>
          <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
      <div class="d-flex" id="wrapper">
        <div class="bg-dark border-right" id="sidebar-wrapper">
          <div class="list-group list-group-flush">
            <a href="#" class="list-group-item list-group-item-action bg-light">Dashboard</a>
            <a href="#" class="list-group-item list-group-item-action bg-light">Layouts</a>
            <a href="#" class="list-group-item list-group-item-action bg-light">Pages</a>
            <a href="#" class="list-group-item list-group-item-action bg-light">Charts</a>
            <a href="#" class="list-group-item list-group-item-action bg-light">Tables</a>
          </div>
        </div>
        <div id="page-content-wrapper">
          <div class="container-fluid">
            <h1 class="mt-4">Dashboard</h1>
          </div>
        </div>
      </div>
    </div>
  )};
}

