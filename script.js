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

  console.log(el);
}
var questions = [
  new Question(
    "What command do you use to   screen?",
    ["Cin", "Cout ", "Output", "Cout>>"],
    "Cout>>"
  ),
  new Question(
    "What command do you use to output data to the screen?",
    ["Cin", "Cout ", "Output", "Cout>>"],
    "Cin"
  ),
  new Question(
    " to output data to the screen?",
    ["Cin", "Cout ", "Output", "Cout>>"],
    "Cout>>"
  ),
];

var quiz = new Quiz(questions);

populate();
