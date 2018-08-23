class AnswersController {
  constructor() {
    this.$addAnswerForm = $(".add-answer")
  }

  init() {
    this.answerFormListener()
  }

  render(answerOb, questionId) {
    $(`#answers-${questionId}`).append(answerOb.answerEl())
    this.upvoteFormListener(answerOb.id)
  }

  answerFormListener() {
    this.$addAnswerForm.on("submit", (event) => {
      event.preventDefault()
      const questionId = event.target.dataset.id
      const answerContent = $(`#answer-content-${questionId}`)
      const newAnswer = new Answer(answerContent.val(), questionId)
      this.render(newAnswer, questionId)
      answerContent.val("")
    })
  }

  upvoteFormListener(answerId) {
    $(`#upvote-answer-${answerId}`).on("submit", (event) => {
      event.preventDefault()
      const $voteCount = $(`#vote-count-answer-${answerId}`)
      const updatedVoteCount = parseInt($voteCount.text()) + 1
      $voteCount.html(updatedVoteCount)
    })
  }
}
