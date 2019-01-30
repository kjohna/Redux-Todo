import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: ""
    }
  }
  
  handleSubmit = e => {
    e.preventDefault();
    console.log("todo form submit");
    this.props.addTodo(this.state.inputText);
    this.setState(
      {
        inputText: ""
      }
    );
  }

  handleInput = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    )
  }

  render() {
    return (
      <form className="container mx-auto px-4" onSubmit={this.handleSubmit}>
        <input 
          type="text"
          placeholder="New Todo"
          value={this.state.inputText}
          name="inputText"
          onChange={this.handleInput}
        ></input>
        <button>Add Todo</button>
      </form>
    )
  }
}

export default connect(() => ({}), { addTodo })(TodoForm);