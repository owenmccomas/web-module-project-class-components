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
          completed: false
        }
      ]
    }
  }

    updateName = event => {
      // this.setState({name:event.target.value})
      // console.log({name:event.target.value})
  } 



  render() {
    const { todos } = this.state
    console.log(this.state)
    return (
      <div>
        Todo App <br/><br/>

      <TodoList todos={todos}/>

        {/* <Todo todos={this.props.todos}/> */}
        <Form />
        <button>clear</button>
      </div>
    )
  }
}
