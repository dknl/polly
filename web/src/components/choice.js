import React from 'react'

// => opts
import opts from '../settings';

// Questions
class Choice extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      votes: this.props.choice.votes,
    }
  }
  
  voteOnChoice() {

    // grab id of choice
    const { id }  =  this.props.choice;
    const { votes } = this.state;

    // fetch params
    const options = { method: 'POST' };
    const uri = opts.uri.choice_vote(id);

    // excute
    fetch(uri, options).then((res)=> {
      return res.json()
    }).then((data) => {
      this.setState({
        votes: votes + 1
      });
    });
  }

  render() {
    const { text }  = this.props.choice;
    const { votes } = this.state;
    return (
      <li
        onClick={this.voteOnChoice.bind(this)}>
        {text}

        <div className="vote">
          {votes}
        </div>

      </li>
    );
  }
}

export default Choice;
