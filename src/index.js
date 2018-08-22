'use strict';

$(function() {
  const questionsController = new QuestionsController();
  questionsController.init();
  const answersController = new AnswersController();
  answersController.init();
  const votesController = new VotesController();
  votesController.init();
});
