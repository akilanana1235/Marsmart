$(document).ready(function () {

    let addtocartlist = localStorage.getItem("addtocartList");

    const AddToCartIDArray = addtocartlist.split(",");

    const noOfItems = AddToCartIDArray.length;

    document.getElementById('delete-txt').innerHTML = '(' + noOfItems + ')' + 'Items';

    for (cartItem of AddToCartIDArray) {
        var cartProduct;
        console.log(cartItem);
        for (var i = 0; i < Products.length; i++) {
            if (Products[i].product_id === cartItem) {
                const CartHTML =
                    '<div class="ui-grid-b card">' +
                    '<div class="ui-block-a left-wrapper">' +
                    '<div class=" ui-checkbox">' +
                    '<input type="checkbox" class="product-check" name="checkbox-mini-0" id="checkbox-select-all" data-mini="true">' +
                    '</div>' +
                    '</div>' +
                    '<div class="ui-block-b middle-wrapper">' +
                    '<img id="nutella" src="' + Products[i].img_url + '">' +
                    '</div>' +
                    '<div class="ui-block-c right-wrapper">' +
                    '<span class="producttitle">' + Products[i].title + '</span>' +
                    '<span class="price" style="float: right;">$' + Products[i].price + '</span>' +
                    '<br>' +
                    '<span style="font-size:12px;">' + Products[i].category + '</span>' +
                    '<span class="rating1">' +
                    '<img id="rating-star1" src="Icons/rating star.png">' +
                    '<span style="font-size:12px;">' + Products[i].rating + '</span>' +
                    '</span>' +
                    '<br>' +
                    '<span style="font-size:12px;">' + Products[i].description + '</span>' +
                    '<br>' +
                    '<span>' +
                    '<img src="Images/Qty Button.png" style="margin-top:8px;" alt="">' +
                    '</span>' +

                    '</div>' +


                    '</div>'
                document.getElementsByClassName('card-area')[0].innerHTML += CartHTML;
                break;
            }
        }
        console.log(cartProduct);
    }

    var subtotal = 0;
    var NetTotal = 0;


    $('#DeletePopUpButton').click(function () {
        localStorage.clear('addtocartList');
        location.reload();
    });

    var checkedItemsList = [];
    var checkedNameList = [];

    $(".product-check").change(function () {

        if (this.checked) {
            var itemprice = parseInt(($('.price').eq($('.product-check').index(this)).text()).split(".").pop());
            var itemName = $('.producttitle').eq($('.product-check').index(this)).text()
            subtotal += itemprice;
            checkedItemsList.push(itemprice);
            checkedNameList.push(itemName)
            NetTotal = subtotal;
            document.getElementsByClassName('subprice')[0].innerText = '$' + subtotal;
            document.getElementsByClassName('subprice3')[0].innerHTML = '$' + NetTotal;
        }

        if (!this.checked) {
            var itemprice = parseInt(($('.price').eq($('.product-check').index(this)).text()).split(".").pop());
            var itemName = $('.producttitle').eq($('.product-check').index(this)).text()
            subtotal -= itemprice;
            NetTotal = subtotal;

            for (var i = 0; i < checkedItemsList.length; i++) {
                if (checkedItemsList[i] === itemprice) {
                    checkedItemsList.splice(i, 1);
                }

                if (checkedNameList[i] === itemName) {
                    checkedNameList.splice(i, 1);
                }
            }

            document.getElementsByClassName('subprice')[0].innerHTML = '$' + subtotal;
            document.getElementsByClassName('subprice3')[0].innerHTML = '$' + NetTotal;
        }


        if (checkedItemsList.length > 0) {

            $('.redeemLoyalty').css("background-color", "#15317A")


            // document.getElementById("RedeemLoyaltyPopUp").style.visibility='hidden';
        } else {
            $('.redeemLoyalty').css('background-color', 'rgba(21, 49, 122, 0.7)')

            // document.getElementById("RedeemLoyaltyPopUp").style.visibility='visible';
        }


    });


    $(".checkOut").on('click', function () {

        if (checkedItemsList.length == 0) {
            document.getElementById("popUpHeader").innerHTML = "Oops!";
            document.getElementById("popupContent").innerHTML = "Please select the item/s to buy in the cart";
            document.getElementById("buttonTextcheckout").innerHTML = "Select Item/s";
            document.getElementById("checkoutPopUpButton").style.marginLeft = "-18%";
            document.getElementById("checkoutPopUpCancelButton").style.visibility = "hidden";


            document.getElementById("checkOutPopUpicon").style.marginTop = "40px";
            document.getElementById("checkOutPopUpicon").style.width = "20%";
            document.getElementById("checkOutPopUpicon").style.visibility = "visible";

            document.getElementById("checkOutPopUpiconCaution").style.width = "0%";
            document.getElementById("checkOutPopUpiconCaution").style.marginTop = "0px";
            document.getElementById("checkOutPopUpiconCaution").style.visibility = "hidden";


        } else {

            document.getElementById("checkOutPopUpicon").style.width = "0%";
            document.getElementById("checkOutPopUpicon").style.marginTop = "0px";
            document.getElementById("checkOutPopUpicon").style.visibility = "hidden";

            document.getElementById("checkOutPopUpiconCaution").style.visibility = "visible";
            document.getElementById("checkOutPopUpiconCaution").style.width = "20%";
            document.getElementById("checkOutPopUpiconCaution").style.marginTop = "0px";


            document.getElementById("checkOutPopUpiconCaution").style.marginTop = "0px";




            document.getElementById("popUpHeader").innerHTML = "";
            document.getElementById("popupContent").innerHTML = "Are you sure you want to proceed to <br> checkout?";
            document.getElementById("buttonTextcheckout").innerHTML = "Proceed";
            document.getElementById("checkoutPopUpButton").style.marginLeft = "5%";
            document.getElementById("checkoutPopUpCancelButton").style.visibility = "visible";

        }

    });








    // document.getElementById("BuyNow1").addEventListener("click", function () {

    //     localStorage.setItem("PriceList", checkedItemsList);
    //     localStorage.setItem("NameList", checkedNameList);
    //     localStorage.setItem("NetTotal", NetTotal);
    //     localStorage.setItem("Subtotal", subtotal);

    //     var path = window.location.pathname;
    //     var page = path.split("/").pop();


    //     if (page === "Cart-ipad.html") {

    //         window.location.href = 'Checkout-iPad.html';
    //     }
    //     if (page === "Cart-iPhone.html") {

    //         window.location.href = 'Checkout-iPhone.html';
    //     }



    // });



    let userloyaltyPoints=parseInt(localStorage.getItem('UserLoyaltyPoints'));

  if(userloyaltyPoints==null){
      userloyaltyPoints=0;
  }


    document.getElementById("reducePointbox1").innerHTML=(userloyaltyPoints*20)/100;
    document.getElementById("reducePointbox2").innerHTML=(userloyaltyPoints*25)/100;
    document.getElementById("reducePointbox3").innerHTML=(userloyaltyPoints*45)/100;
    

  $('.loyaltyBoxe1').click(()=>{
      

    var toReduce = (userloyaltyPoints*20)/100;

    if(userloyaltyPoints>5 && (NetTotal>toReduce) ){
        document.getElementById('subprice').innerText = '$' + subtotal;
        var discounted = subtotal-toReduce;
        document.getElementById('subprice2').innerText = '$' + discounted;
        document.getElementById('subprice1').innerHTML='$' + toReduce;
        NetTotal=NetTotal-toReduce;
        document.getElementsByClassName('subprice3')[0].innerHTML = '$' + NetTotal;

        userloyaltyPoints=userloyaltyPoints-toReduce;
        localStorage.setItem("UserLoyaltyPoints",userloyaltyPoints);

    }

  });

  $('.loyaltyBoxe2').click(()=>{
      
        var toReduce = (userloyaltyPoints*25)/100;

        if(userloyaltyPoints>5 && (NetTotal>toReduce) ){
        document.getElementById('subprice').innerText = '$' + subtotal;
        var discounted = subtotal-toReduce;
        document.getElementById('subprice2').innerText = '$' + discounted;
        document.getElementById('subprice1').innerHTML='$' + toReduce;
        NetTotal=NetTotal-toReduce;
        document.getElementsByClassName('subprice3')[0].innerHTML = '$' + NetTotal;

        userloyaltyPoints=userloyaltyPoints-toReduce;
        localStorage.setItem("UserLoyaltyPoints",userloyaltyPoints);

    }
  });


  $('.loyaltyBoxe3').click(()=>{
    var toReduce = (userloyaltyPoints*45)/100;
    if(userloyaltyPoints>5 && (NetTotal>toReduce) ){

       
        document.getElementById('subprice').innerText = '$' + subtotal;
        var discounted = subtotal-toReduce;
        document.getElementById('subprice2').innerText = '$' + discounted;
        document.getElementById('subprice1').innerHTML='$' + toReduce;
        NetTotal=NetTotal-toReduce;
        document.getElementsByClassName('subprice3')[0].innerHTML = '$' + NetTotal;

        userloyaltyPoints=userloyaltyPoints-toReduce;
        localStorage.setItem("UserLoyaltyPoints",userloyaltyPoints);

    }
  });



    $('#checkoutPopUpButton').click(()=>{

   

        if(checkedItemsList.length >0){
            localStorage.setItem("PriceList",checkedItemsList);
            localStorage.setItem("NameList",checkedNameList);
           localStorage.setItem("NetTotal",NetTotal);
            window.location.href = 'Checkout-iPhone.html';
        }


    })




});