import React from 'react'
import Todo from './Todo';

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

      <ul>
        {
          todos.map(
            todo => {
              return(
              <li>
                {todo.name} 
                {todo.completed?<span> - complete </span>:<span></span>}</li>)
            }
          )
        }
      </ul>

        {/* <Todo todos={this.props.todos}/> */}
        <form>
        <input 
          type='text'
          placeholder='add to todo list'
          onChange={this.updateName()}
        />
        <button>add</button> 
        </form>
        <button>clear</button>
      </div>
    )
  }
}
