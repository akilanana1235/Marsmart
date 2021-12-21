
var isClicked = false;
var playerscore = 0;


$(document).ready(function() { 

    isClicked = localStorage.getItem("isClickedQuiz");

    if(!localStorage.getItem("playerscore")){
        playerscore = 0;
    }else{
        playerscore = localStorage.getItem("playerscore");
    }

    document.getElementById("playerscore").innerHTML=playerscore;

 $('.playButton').click(() => {
      if(!isClicked){
        localStorage.setItem("isClickedQuiz",true);
        window.location.href = 'QuizGame.html';
      }
    });
 

});