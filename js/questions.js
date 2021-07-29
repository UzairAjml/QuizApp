// = { }
function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.correct = function (choice) {
  return choice === this.answer;
};
