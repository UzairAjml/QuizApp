// = { } [ ] +
"use strict";

function populate() {
  if (quiz.isEnded()) {
    showScore();
  } else {
    var ques = document.getElementById("question");
    ques.innerHTML = quiz.getQuestionIndex().text;

    var choices = quiz.getQuestionIndex().choices;

    for (let i = 0; i < choices.length; i++) {
      let element = document.getElementById("btn" + i);
      element.innerHTML = choices[i];

      guess("btn" + i, choices[i]);
    }
    showProgress();
  }
}

function guess(id, gess) {
  let btn = document.getElementById(id);
  btn.onclick = function () {
    quiz.guess(gess);
    populate();
  };
}

function showProgress() {
  let currQues = quiz.questionIndex + 1;
  let ele = document.getElementById("road");
  ele.innerHTML = "Question " + currQues + " out of " + quiz.questions.length;
}

function showScore() {
  let ele = "<h1 id ='result'> Result  </h1> ";
  ele += "<h1 id  ='score1'>" + "Your Score is : " + "</h1>";
  ele += "<h2 id ='score'>" + quiz.score + "</h2>";

  let el = document.querySelector(".container");
  el.innerHTML = ele;
}

var questions = [
  new Question(
    "Which data structure uses LIFO?",
    ["Int", "Array", "Stack", "Queues "],
    "Stack"
  ),
  new Question(
    "What command do you use to output data to the screen?",
    ["Cin", "Cout ", "Output", "Cout>>"],
    "Cin"
  ),
  new Question(
    "A memory location that holds a single letter or number.",
    ["Double", "Int", "Char", "Word"],
    "Char"
  ),
  new Question(
    " A short sections of code written to complete a task. ",
    ["Buffer", "Array", "Tree", "Function"],
    "Function"
  ),
  new Question(
    "One loop inside the body of another loop is called ",
    ["Inside Loop", "Loop in Loop", "Nested", "Loops"],
    "Nested"
  ),
];

var quiz = new Quiz(questions);

populate();
