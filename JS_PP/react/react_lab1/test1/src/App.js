import React, {Component} from 'react';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      userName: "Andrzej",
      todoItems: [{ action: "Umyć zęby", done: true},
                  { action: "Zrobić zakupy", done: true},
                  { action: "Pozmywać naczynia", done: false}],
      newItemText: ""
    }
  }

  changeStateData = () => {
    this.setState({
      userName: this.state.userName === "Andrzej" ? "Janusz" : "Andrzej"
    })
  }
  updateNewTextValue = (event) => {
    this.setState({ newItemText: event.target.value});
  }
  createNewTodo = () => {
    if (!this.state.todoItems.find(item => item.action === this.state.newItemText)) {
      this.setState({
        todoItems: [...this.state.todoItems,
        { action: this.state.newItemText, done: false }],
        newItemText: ""
      });
    }
  }

  toogleToDo = (todo) => this.setState({
    todoItems:
      this.state.todoItems.map(item => item.action === todo.action
      ? {...item, done: !item.done} : item)
  });

  todoTableRows = () => this.state.todoItems.map(item =>
    <tr ket={item.action}>
      <td>{item.action}</td>
      <td>
        <input type="checkbox" checked={item.done}
        onChange={() => this.toogleToDo(item)} />
      </td>
    </tr>);

  render(){
  return (
    <div className="App">
      <h4 className="bg-primary text-white text-center p-2">
        Lista zadań użytkonika {this.state.userName}
        (Liczba zadań: {this.state.todoItems.filter(t => !t.done).length})
      </h4>
      <div className="container-fluid">
        <div className="my-1">
          <input className="form-control"
            value={this.state.newItemText}
            onChange={this.updateNewTextValue} />
            <button className="btn btn-primary mt-1"
            onClick={this.createNewTodo}>Dodaj</button>
        </div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr><th>Opis</th><th>Wykonanie</th></tr>
          </thead>
          <tbody>{this.todoTableRows()}</tbody>
        </table>
      </div>

      {/* <button className="btn btn-primary m-2"
          onClick={this.changeStateData}> Zmień
      </button> */}
    </div>
  )};
}

