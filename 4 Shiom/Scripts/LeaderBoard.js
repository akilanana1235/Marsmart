var playerscore = 0;
$(document).ready(function(){

  let loyaltyPoints = localStorage.getItem('UserLoyaltyPoints');
    document.getElementById("loyaltyscore").innerHTML=loyaltyPoints;


});