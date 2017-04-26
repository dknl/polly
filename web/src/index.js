
import React from 'react'
import ReactDOM from 'react-dom'
import Fetch from 'react-fetch'

// => HOC
const QuestionList = (props) => {

  // iterate
  const keys = Object.keys(props);
  const listItems = keys.map((item) =>
   <li key={item}>{props[item].text}</li>
  );

  return (
    <div class="q-list">
      <ul>{listItems}</ul>
    </div>
  );
}

// => BaseApp
class BaseApp extends React.Component {
  render() {
    return(
      <section className="questions">
        <h2>Vragen</h2>
        <Fetch url="http://localhost:8000/polls/questions/?format=json">
          <QuestionList />
        </Fetch>
      </section>
    )
  }
}

// => render
ReactDOM.render(<BaseApp />,
  document.getElementById('app')
);
