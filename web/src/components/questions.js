// ui
import React from 'react'
import { Link } from 'react-router-dom'
import opts from '../settings';


// Questions
class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    fetch(opts.url.questions).then((response) => {
      return response.json();
    }).then((items) => {
      this.setState({ items });
    });
  }

  renderQuestionsMenu() {

    const { items } = this.state;

    const keys = Object.keys(items);
    return keys.map((index) => {
      const uri = `/question/${items[index].id}`;
      return (
        <Link key={index} to={uri} replace>
          {items[index].text}
        </Link>
      );
    });
  }

  render() {
    let { items } = this.state;
    return (
      <section className="card">
        {this.renderQuestionsMenu()}
      </section>
    );
  }
}


export default Questions;
