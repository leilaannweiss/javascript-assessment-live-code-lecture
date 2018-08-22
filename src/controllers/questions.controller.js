'use strict';

class QuestionsController {
  init() {
    Question.load()
  }
}

QuestionsController.render = function(question) {
  $('#questions').append(question.questionEl());
}
