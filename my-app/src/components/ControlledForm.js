import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first: ""
      }
    }
  render() {
    return (
      <div>
        <form>
            <lable htmlFor="id-name">Your Name:</lable>
            <input id ="id-name" name="name" type="text" />
            <input type="submit" value="Submil" />
        </form>
      </div>
    )
  }
}

export default ControlledForm