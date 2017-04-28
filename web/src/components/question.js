// User interface
import React from 'react'
import Fetch from 'react-fetch'
import List from './list'

// settings
import opts from '../settings'

// hoc's
import votable from './hoc/votable'


const QuestionRender = (props) => {

  console.log('QuestionRender what?', props)

  return(
    <section className="question">
      <h2>{props.text}</h2>
      <List { ...props.choices } />
    </section>
  )
}

// Single Question
const Question = (props) => {

  console.log(props);

  return (
    <Fetch url={opts.url.test.single_question}>
      <QuestionRender />
    </Fetch>
  );
}

export default Question;
