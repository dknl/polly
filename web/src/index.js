// Import React, ReactDOM and the DummyComponent.
import React from 'react'
import ReactDOM from 'react-dom'
import Fetch from 'react-fetch'


class TestComponent extends React.Component{
  render(){
    console.log(this.props)
    return <div/>
  }
}

class App extends React.Component {
  render() {
    return(
      <Fetch url="http://localhost:8000/polls/questions/?format=json">
        <TestComponent/>
      </Fetch>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
