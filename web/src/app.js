import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

// => Components
import Questions from './components/questions'
import Question from './components/question'

// => awpplication with a router
class App extends React.Component {
  render() {
    return (
      //
      <Router>
        <div className="app">
          <ul className="nav">
            <li>
              <Link to="/questions">Overzicht</Link>
            </li>
            <li>
              <Link to="/question/3">Test Link</Link>
            </li>
          </ul>
          <div className="container">
            <Route path='/questions' component={Questions} />
            <Route path='/question/:id' component={Question} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
