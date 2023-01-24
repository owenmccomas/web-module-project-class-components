import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <input 
          type='text'
          placeholder='add to todo list'
          // onChange={this.updateName()}
        />
        <button>add</button> 
        </form>
    )
  }
}
