class Answer {
  constructor(content, questionId) {
    this.id = this.constructor.all.length
    this.content = content
    this.question = this.findQuestion(questionId)
    this.constructor.all.push(this)
  }

  findQuestion(questionId) {
    const questionOb = Question.all.find(question => {
      return question.id === parseInt(questionId)
    })
    questionOb.answers.push(this)
    return questionOb
  }

  answerEl() {
    return `<li>
              Answer: ${this.content}</br>
              (Votes: <strong id="vote-count-answer-${this.id}"">0</strong>)
              <form id="upvote-answer-${this.id}" action="#" method="post">
                <input type="submit" value="Upvote">
              </form>
            </li>`
  }
}

Answer.all = []
