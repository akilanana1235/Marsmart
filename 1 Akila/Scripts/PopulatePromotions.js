$(document).ready(function () {
    let eventData;
    populatePromotion();

    $("#scrollToBest").click(function(){
      var elmnt = document.getElementById("bestSellers");
      elmnt.scrollIntoView();
    });
    $("#scrollToPersonalized").click(function(){
      var elmnt = document.getElementById("personalized");
      elmnt.scrollIntoView();
    });
    $("#scrollToEnding").click(function(){
      var elmnt = document.getElementById("ending");
      elmnt.scrollIntoView();
    });
    $("#scrollToDiscount").click(function(){
      var elmnt = document.getElementById("discounted");
      elmnt.scrollIntoView();
    });
    $("#scrollToSpecial").click(function(){
      var elmnt = document.getElementById("special");
      elmnt.scrollIntoView();
    });
    $("#scrollToUpcoming").click(function(){
      var elmnt = document.getElementById("upcoming");
      elmnt.scrollIntoView();
    });

});

 function populatePromotion(){
  var cardNum= document.getElementsByClassName("promos");
  var images = document.querySelectorAll("[id='poster']");
    for(var i=0;i<cardNum.length;i++){
      document.getElementsByClassName("promotion-id")[i].innerHTML=Promotions[i].promotion_id;
    }
}

