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
      <form className="container mx-auto px-8 py-4" onSubmit={this.handleSubmit}>
        <input 
          type="text"
          placeholder="New Todo"
          value={this.state.inputText}
          name="inputText"
          onChange={this.handleInput}
          className="rounded p-2 bg-grey-lighter focus:bg-white border-transparent focus:border-blue-light"
          autoComplete="off"
        ></input>
        <button className="rounded p-2 bg-transparent hover:bg-blue text-blue-dark hover:text-white">Add Todo</button>
      </form>
    )
  }
}

export default connect(() => ({}), { addTodo })(TodoForm);