// User interface
import React from 'react'
import Fetch from 'react-fetch'
import List from './list'

// settings
import opts from '../settings'

// hoc's
import votable from './hoc/votable'



// => Question render
const Question = (props) => {

  const VotableList = votable(List);
  console.log('QuestionRender what?', props)
  
  return(
    <section className="card">
      <h2>{props.text}</h2>
      <VotableList { ...props.choices } />
    </section>
  )
}

// => Single Question component
const QuestionWrapped = (props) => {
  return (
    <Fetch url={opts.url.test.single_question}>
      <Question />
    </Fetch>
  );
}

export default QuestionWrapped;
