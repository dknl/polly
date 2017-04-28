// User interface
import React from 'react'
import Fetch from 'react-fetch'
import Choice from './choice'

// Questions
class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      choices: []
    }
  }

  componentDidMount() {
    const { id }  =  this.props.match.params;
    const uri = `http://localhost:8000/polls/questions/${id}/?format=json`;

    console.log('url=',uri);

    fetch(uri).then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({
        text: data.text,
        choices: data.choices
      });
    });
  }

  renderChoices() {

    const { choices } = this.state;
    const keys = Object.keys(choices);
    return keys.map((index) => {
      console.log(index)
      return <Choice key={index} choice={choices[index]} />
    });
  }


  render() {

    let { choices, text } = this.state;

    return (
      <section className="card">
        <h2>{ text }</h2>
        <ul>
          {this.renderChoices()}
        </ul>
      </section>
    );
  }
}

export default Question;
