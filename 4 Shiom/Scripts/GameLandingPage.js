
var isClickedQuiz = false;
var isClickedMemory = false;
var isClickedSpin = false;
var playerscore = 0;

$(document).ready(function() { 

    isClickedQuiz = localStorage.getItem("isClickedQuiz");
    isClickedMemory = localStorage.getItem("isClickedMemory");
    isClickedSpin = localStorage.getItem("isClickedSpin");

     //getting quiz game score
    if(!localStorage.getItem("playerscore")){
        playerscore += 0;
    }else{
      playerscore += parseInt(localStorage.getItem("playerscore"));
    }
    
     //getting Memmory game score
    if(!localStorage.getItem("memoryGameScore")){
      playerscore += 0;
    }else{
      playerscore += parseInt(localStorage.getItem("memoryGameScore"));
    }

    if(!localStorage.getItem("spinGameScore")){
      playerscore += 0;
    }else{
      playerscore += parseInt(localStorage.getItem("spinGameScore"));
    }

    document.getElementById("playerscore").innerHTML=playerscore;


//Changing the button back ground based on user click
    if(isClickedQuiz){
      document.getElementById("playButtonQuiz").style.setProperty('background-color', 'rgba(21, 49, 122, 0.7)', 'important');
    }

   
    if(isClickedMemory){
      document.getElementById("playButtonMemory").style.setProperty('background-color', 'rgba(21, 49, 122, 0.7)', 'important');
    }

    if(isClickedSpin){
      document.getElementById("playButtonSpin").style.setProperty('background-color', 'rgba(21, 49, 122, 0.7)', 'important');
    }




 $('.playButton').click(() => {
      if(!isClickedQuiz){
        localStorage.setItem("isClickedQuiz",true);
        window.location.href = 'QuizGame.html';
      }
    });
 

    $('.playButtonMemory').click(() => {
      if(!isClickedMemory){
        localStorage.setItem("isClickedMemory",true);
        window.location.href = 'MemoryGame.html';
      }
    });


    $('.playButtonSpin').click(() => {
      if(!isClickedSpin){
        localStorage.setItem("isClickedSpin",true);
        window.location.href = 'SpinWheel.html';
      } 
    });

    $('.LeaderBoardButton').click(() => {
        window.location.href = 'LeaderBoard.html';
    
    });

    

});