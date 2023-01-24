import React from 'react'
import TodoList from './TodoList';
import Form from './Form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: true
        }
      ]
    }
  }

  clear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false)
      })
    }
    )
  }
  handleAdd = (name) => {
    const newTodo = {
      name: name,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }

  handleToggle = () => {
    
  }

  render() {
    const { todos } = this.state
    console.log(this.state)
    return (
      <div>
        Todo App <br/><br/>

      <TodoList todos={todos}/>

        {/* <Todo todos={this.props.todos}/> */}
        <Form handleAdd={this.handleAdd}/>
        <button onClick={this.clear}>clear</button>
      </div>
    )
  }
}
