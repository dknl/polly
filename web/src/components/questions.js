// ui
import React from 'react'
import Fetch from 'react-fetch'
import List from './list'

// settings
import opts from '../settings'

// Questions
const Questions = () => {
  return (
    <section className="questions">
      <h2>Polly questions</h2>
      <Fetch url={opts.url.questions}>
        <List />
      </Fetch>
    </section>
  );
}

export default Questions;
