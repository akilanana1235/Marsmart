var playerscore = 0;
$(document).ready(function(){

    
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

    document.getElementById("loyaltyscore").innerHTML=Math.round(playerscore/10);


});