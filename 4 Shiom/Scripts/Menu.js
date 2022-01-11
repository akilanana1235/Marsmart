function openNav() {
    document.getElementById("mySidenav").style.width = "270px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

filterSelection("all")
function filterSelection(c) {
    var x, i, button;
    x = document.getElementsByClassName("card");
    buttonText = document.getElementsByClassName("dropdown-toggle-text");
    if (c == "all"){
        c = "";
        buttonText[0].innerHTML= "All";
    } else
    if(c == "best"){
      buttonText[0].innerHTML= "Best Sellers";
    }else if(c == "trending"){
      buttonText[0].innerHTML= "Trending";
    }
    for (i = 0; i < x.length; i++) {
      RemoveClass(x[i], "show-card");
      RemoveClass(x[i], "hide-card");
      if (x[i].className.indexOf(c) > -1){
        AddClass(x[i], "show-card");
      }else{
        AddClass(x[i], "hide-card");
      }
    }
  }

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

$(document).ready(function () {
$('#continue-from').click(() => {
  window.location.href = 'Landing page-iPad.html';
});
});