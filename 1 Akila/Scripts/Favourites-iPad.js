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
          '<br>' +
          '<span class="price"> Rs. ' + Products[i].price + '</span>' +
          '<span class="rating1">' +
          '<img id="rating-star1" src="Icons/rating star.png">' +
          '<img id="rating-star1" src="Icons/rating star.png">' +
          '<img id="rating-star1" src="Icons/rating star.png">' +
          '<img id="rating-star1" src="Icons/rating star.png">' +
          '<img id="rating-star1" src="Icons/rating star half-filled.png">' +
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
          '<a href="#temporary" data-role="button" id="add-to-cart" class="ui-link ui-btn ui-shadow ui-corner-all" role="button">ADD TO CART' + '</a>' +
          '<a href="#temp" data-role="button" id="BuyNow1" class="ui-link ui-btn ui-shadow ui-corner-all" role="button">BUY NOW' + '</a>' +
          '</div>' +
          '</div>'

          if (i % 2 !== 0) {
            document.getElementsByClassName('card-area-1')[0].innerHTML += CartHTML;
          } else {
            document.getElementsByClassName('card-area-2')[0].innerHTML += CartHTML;
          }
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

  $('#submit-mail').click(function () {

    var emailToSend = $('#mail-to').val();

    console.log(FavouriteIDList.length);

    for (EmailfavouriteID of FavouriteIDList) {

      for (var i = 0; i < Products.length; i++) {
        if (Products[i].product_id === EmailfavouriteID) {
          var Emaildata = {
            "from": {
              "email": "spreemart1@gmail.com"
            },
            "personalizations": [
              {
                "to": [
                  {
                    "email": emailToSend
                  }
                ],
                "dynamic_template_data": {
                  "Prod_title": Products[i].title,
                  "prod_img": ProductImgLinks[i].link,
                  "Prod_Price": Products[i].price
                }
              }],
            "template_id": "d-04a9d735ed454201a08f2700b86a26b7"
          }
          break;
        }
      }

      $.ajax
        ({
          type: "POST",
          url: "https://api.sendgrid.com/v3/mail/send",
          contentType: "application/json; charset=utf-8",
          async: false,
          data: JSON.stringify(Emaildata),
          beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', "Bearer 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 ");
          },
          success: function () {
            alert('Email Successfully sent !');
          }
        });
    }

  });


});

