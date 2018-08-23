'use strict';

$(function() {
  const questionsController = new QuestionsController();
  questionsController.init();
  const answersController = new AnswersController();
  answersController.init();
});
