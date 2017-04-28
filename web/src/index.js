import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'



// => App
class AppWithoutRouter extends React.Component {
  render() {
    return <Questions />
  }
}

// => render
ReactDOM.render(<App />,
  document.getElementById('app')
);
