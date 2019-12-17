// { Component } is a use case of Object Deconstruction
import React, { Component } from 'react'

// class based components
// - use the class keyword
// - they extend the default React.Component class
// - require a render() method...a function that is part of a class
// - the render method must return JSX (HTML/JS)
// - constructor is needed only if you want STATE
// - changes to STATE trigger the Component to re-render
// - the keyword THIS is used to reference the Class Component
class Form extends Component{
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  handleClick(e) {
    e.preventDefault()
    console.log('handleClick')
  }

  // return...returns JSX (combo of HTML/JS)
  render() {
    return (
        <form>
          <input type="text" placeholder="add a color" />
          <button 
           onClick={(e) => this.handleClick(e)}
          >Submit</button>
        </form>
    )
  }
}

export default Form

// successfully upgraded from functional to Class based Component
// the button needs and event listerer added to it..click event
//  - a click event is now onClick
// the EV needs to then call some function
// create the handleClick function
