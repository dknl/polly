import React from 'react'
import List from './list'

// Questions
class Choice extends React.Component {

  voteOnChoice() {

    // grab id of choice
    const { id }  =  this.props.choice;

    // fetch params
    const options = { method: 'POST' };
    const uri     = `http://localhost:8000/polls/choices/${id}/vote/?format=json`;

    // excute
    fetch(uri, options).then((res)=> {
      console.log(res)
    });
  }

  render() {

    let { text }  = this.props.choice;

    return (
      <li
        onClick={this.voteOnChoice.bind(this)}>
        {text}
      </li>
    );
  }
}

export default Choice;
