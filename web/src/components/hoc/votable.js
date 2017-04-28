import React from 'react'
import Fetch from 'react-fetch'

// => Make default compoment voteable

const votable = (Wrapped) => {

  return class extends React.Component {

    // Make sure this handles vote: binds to parent prop.
    vote(event) {
      console.log('Toggle my goggle', this);
      return <Fetch url="http://google.nl" />
    }

    // render
    render() {
      const props = { ...this.props }
      console.log('props')
      console.log(props);
      return <Wrapped {...this.props} handleClick={ this.vote } />
    }
   }
}

// voteable
export default votable;
