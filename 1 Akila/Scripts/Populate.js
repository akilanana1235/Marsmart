$(document).ready(function () {
  let eventData;
  populateProductCard()

  var heartIcons = document.querySelectorAll("[id='heart']");

  var FavouriteList=[];
  
  $(".heart-icon").click(function () {

        if ($(this).attr('src') == "Icons/unfilled-heart.png") {
          $(this).attr('src', "Icons/heart.png");
          FavouriteList.push($('.product-id').eq($('.heart-icon').index(this)).text());
        }
        else {
          var prodID=$('.product-id').eq($('.heart-icon').index(this)).text();
          $(this).attr('src', "Icons/unfilled-heart.png");
            for( var i = 0; i < FavouriteList.length; i++){ 
              if ( FavouriteList[i] === prodID) {
                FavouriteList.splice(i, 1); 
              }
          }
        }

      localStorage.setItem('FavouritesList',FavouriteList);

  });

});

function populateProductCard() {
  var cardNum = document.getElementsByClassName("card");
  var images = document.querySelectorAll("[id='product-image']");
  for (var i = 0; i < cardNum.length; i++) {
    images[i].src = Products[i].img_url;
    document.getElementsByClassName("product-title")[i].innerHTML = Products[i].title;
    document.getElementsByClassName("product-id")[i].innerHTML = Products[i].product_id;
    document.getElementsByClassName("price")[i].innerHTML = 'Rs. ' + Products[i].price;
  }
}




// function createProductCard(data) {
//     var card = [
//         '<img id="product-image" src="', data.img_url, '">',
//         '<div class="product-title">', data.title, '</div>',
//         '<div class="price">Rs.', data.price, '</div>'    
//     ];

//     return card.join

// }