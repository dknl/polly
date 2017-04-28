// TODO: move all url stuff into this file
export default {
  uri: {
    questions: 'http://localhost:8000/polls/questions/?format=json',
    question:    (id) => { return `http://localhost:8000/polls/questions/${id}/?format=json`; }
    choice_vote: (id) => { return `http://localhost:8000/polls/choices/${id}/vote/?format=json`; }
  }
}
