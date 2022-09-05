import './App.css';
import { Component } from 'react'
import Form from './components/Form.jsx'
import TodoList from './components/TodoList.jsx'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: "",
      todos: []
    };
  }



  addItem = () => {
    const inputValue = this.state.todoInput;

    if (this.state.todoInput !== "") {
      const userInput = {
        id: Math.random(),
        content: inputValue
      };
      this.setState(
        {
          todos: [...this.state.todos, userInput]
        },
        () => {
          this.setState({
            todoInput: ""
          })
        }
      )
    }
  }


  onInputChange = (e) => {
    const newInput = e.target.value;
    this.setState({
      todoInput: newInput
    })
  };

  render() {
    return (
      <div className='App'>
        TODO LIST APP with REACT
        <Form userInput={this.state.todoInput} onInputChange={this.onInputChange} addItem={this.addItem} />
        {this.state.todos.length > 0 && (
          <div className='list'>
            <TodoList todos={this.state.todos} />
          </div>
        )}
      </div>
    )
  }
}
export default App;
