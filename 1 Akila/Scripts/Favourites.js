$(document).ready(function () {

  const IDs = localStorage.getItem("FavouritesList");
  var noOfItems;
  var FavouriteIDList

  if (IDs.length != 0) {
    FavouriteIDList = IDs.split(",");
    noOfItems = FavouriteIDList.length;
  } else {
    FavouriteIDList = []
    noOfItems = IDs.length;
  }



  document.getElementById('share-txt').innerHTML = '(' + noOfItems + ')' + 'Items';
  document.getElementById('delete-txt').innerHTML = '(' + noOfItems + ')' + 'Items'

  var ProductImgLinks = [
    {
      "product_id": "1",
      "link": "https://i.ibb.co/n7TpH85/lays.png",
    },
    {
      "product_id": "2",
      "link": "https://i.ibb.co/51Px6NZ/strawberry.png",
    },
    {
      "product_id": "3",
      "link": "https://i.ibb.co/mvM5VN4/cheese.png",
    },
    {
      "product_id": "4",
      "link": "https://i.ibb.co/h7p7Dsq/cheerios.png",
    },
    {
      "product_id": "5",
      "link": "https://i.ibb.co/hKJdTJN/jam.png",
    },
    {
      "product_id": "6",
      "link": "https://i.ibb.co/Mpb7kWt/coconut.png",
    },
    {
      "product_id": "7",
      "link": "https://i.ibb.co/6tXb3Tb/corn.png",
    },
    {
      "product_id": "8",
      "link": "https://i.ibb.co/sKXFhtt/handwash.png",
    },
    {
      "product_id": "9",
      "link": "https://i.ibb.co/JxdSnxT/noodles.png ",
    }
  ]


  for (favouriteID of FavouriteIDList) {
    for (var i = 0; i < Products.length; i++) {
      if (Products[i].product_id === favouriteID) {

        console.log(Products[i]);

        const CartHTML = '<div class="ui-grid-b card">' +
          '<div class="ui-block-a left-wrapper">' +
          '<div class="heart-wrapper">' +
          '<img id="heart" class="heart-icon" src="Icons/heart.png">' +
          '</div>' +
          '<div class=" ui-checkbox"><input type="checkbox" name="checkbox-mini-0" id="checkbox-select-all" data-mini="true">' +
          '</div>' +
          '</div>' +
          '<div class="ui-block-b middle-wrapper">' +
          '<img id="nutella" src="' + Products[i].img_url + '">' +
          '</div>' +
          '<div class="ui-block-c right-wrapper">' +
          '<span class="producttitle">' + Products[i].title + '</span>' +
          '<div hidden class="product-id">' + Products[i].product_id + '</div>' +

          '<span class="price" style="float:right; margin-top:2px; font-size:12px; color:#FF2525; font-weight:700;"> $' + Products[i].price + '</span>' +
          '<br>' +
          '<span>' + Products[i].category + '</span>' +
          '<span class="rating1">' +
          '<img id="rating-star1" src="Icons/rating star.png">' + Products[i].rating +
          '</span>' +
          '<br>' +
          '<span style="font-size:12px;">' +
          Products[i].description +
          '</span>' +



          '<div class="quantity1">' +
          '<fieldset class="ui-grid-b">' +
          '<div class="ui-block-a">' +
          '<a href="#temporary" data-role="button" id="minus1" class="ui-link ui-btn ui-shadow ui-corner-all" role="button">-' + '</a>' +
          '</div>' +
          '<div class="ui-block-b">' +
          '<div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">' + '<input type="number" name="quantity" id="quantity1" value="1">' + '</div>' +
          '</div>' +
          '<div class="ui-block-c">' +
          '<a href="temporary.html" data-role="button" id="plus1" class="ui-link ui-btn ui-shadow ui-corner-all" role="button">+' + '</a>' +
          '</div>' +
          '</fieldset>' +
          '</div>' +
          '<a href="#addToBasketPopUp" data-rel="popup" style="bottom: 36px; left: 120px;" data-role="button" id="add-to-cart" class="ui-link ui-btn ui-shadow ui-corner-all" role="button">Add to cart' + '</a>' +


          '</div>' +
          '</div>'



        document.getElementsByClassName('card-area')[0].innerHTML += CartHTML;
        break;
      }

    }

  }

  $(".heart-icon").click(function () {

    var prodID = $('.product-id').eq($('.heart-icon').index(this)).text()

    for (var i = 0; i < FavouriteIDList.length; i++) {
      if (FavouriteIDList[i] === prodID) {
        FavouriteIDList.splice(i, 1);
      }
    }

    localStorage.setItem('FavouritesList', FavouriteIDList);

    location.reload();

  });

  $('#sharepopup').click(function () {
    var emailToSend = $('#mail-to').val();

    console.log(FavouriteIDList.length);






    var emailProductNames = [];
    var productName = $('.producttitle').text();

    emailProductNames.push(productName);

    localStorage.setItem('FavoriteProducts', emailProductNames);

    var EmailItemList = localStorage.getItem("FavoriteProducts");


    $('#EmailPopUpButton').click(function () {

      var emailToSend = $('#mail-to').val();
      var data = {
        service_id: 'service_enrwg2k',
        template_id: 'template_xj3h6js',
        user_id: 'user_WpvegYgBZvYJ9bfV2YnmZ',
        template_params: {
          to_name: emailToSend,
          from_name: 'Marsmart',
          message_html: '<b>' + EmailItemList + '</b>'
        }
      };
      $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
      }).done(function () {
        alert('Your mail is sent!');
      }).fail(function (error) {
        alert('Oops... ' + JSON.stringify(error));
      });

    });

  
  });


$("#DeletePopUpButton").click(() => {

  localStorage.clear('FavouritesList');
  location.reload();
})

});

