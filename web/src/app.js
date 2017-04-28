import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

// => Components
import Questions from './components/questions'
import Question from './components/question'

// => awpplication with a router
class AppWithRouter extends React.Component {
  render() {
    return (
      <Router>

        <div className="nav navbar">
          <ul>
            <li>
              <Link to="/">Polls</Link>
            </li>
            <li>
              <Link to="/test">Test</Link>
            </li>
          </ul>

          <hr />

          <Route path='/' component={Questions} />
          <Route path='/test' component={Question} />

        </div>


      </Router>
    )
  }
}

export default AppWithRouter;
