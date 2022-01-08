$(document).ready(function () {

  let subtotval = localStorage.getItem("Subtotal");
  var LeaderScore = localStorage.getItem("Leaderscore");
  console.log(subtotval);
  console.log(LeaderScore);
  var currentscore;
  var score;

  if (LeaderScore === null) {
    currentscore = 0;
  } else {
    currentscore = LeaderScore;

  }
  score = subtotval / 100;
  currentscore = currentscore + score;
  console.log(currentscore);
  localStorage.setItem("LeaderScore", currentscore);
  console.log(document.getElementsByClassName('leader-score'));
  document.getElementsByClassName('leader-score')[0].innerHTML = currentscore;

});