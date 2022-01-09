$(document).ready(function() {

    let addtocartlist = localStorage.getItem("addtocartList");

    const AddToCartIDArray = addtocartlist.split(",");

    const noOfItems = AddToCartIDArray.length;

    document.getElementById('delete-txt').innerHTML = '(' + noOfItems + ')' + 'Items';

    for (cartItem of AddToCartIDArray) { 
        var cartProduct;
        console.log(cartItem);
        for (var i = 0; i < Products.length; i++) {
            if (Products[i].product_id === cartItem) {
                const CartHTML = '<div class="ui-grid-b card">' +
                    '<div class="ui-block-a left-wrapper">' +
                    '<div class=" ui-checkbox">' +
                    '<input type="checkbox"  class="product-check" name="checkbox-mini-0" id="checkbox-select-all" data-mini="true">' +
                    '</div>' +
                    '</div>' +
                    '<div class="ui-block-b middle-wrapper">' +
                    '<img id="nutella" src="' + Products[i].img_url + '">' +
                    '</div>' +
                    '<div class="ui-block-c right-wrapper">' +
                    '<span class="producttitle">' + Products[i].title + '</span>' +
                    '<img id="share-2" src="Icons/delete.png">' +
                    '<br>' +
                    '<span class="price"> Rs.' + Products[i].price + '</span>' +
                    '<span class="rating1">' +
                    '<img id="rating-star1" src="Icons/rating star.png">' +
                    '<img id="rating-star1" src="Icons/rating star.png">' +
                    '<img id="rating-star1" src="Icons/rating star.png">' +
                    '<img id="rating-star1" src="Icons/rating star.png">' +
                    '<img id="rating-star1" src="Icons/rating star half-filled.png">' +
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


    $('#delete-icon').click(function() {
        localStorage.clear('addtocartList');
        location.reload();
    });

    var checkedItemsList = [];
    var checkedNameList=[];

    $(".product-check").change(function() {

        if (this.checked) {
            var itemprice = parseInt(($('.price').eq($('.product-check').index(this)).text()).split(".").pop());
            var itemName=$('.producttitle').eq($('.product-check').index(this)).text()
            subtotal += itemprice;
            checkedItemsList.push(itemprice);
            checkedNameList.push(itemName)
            NetTotal = subtotal;
            document.getElementsByClassName('subprice')[0].innerText = 'Rs.' + subtotal;
            document.getElementsByClassName('subprice3')[0].innerHTML = 'Rs. ' + NetTotal;
        }

        if (!this.checked) {
            var itemprice = parseInt(($('.price').eq($('.product-check').index(this)).text()).split(".").pop());
            var itemName=$('.producttitle').eq($('.product-check').index(this)).text()
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
            
            document.getElementsByClassName('subprice')[0].innerHTML = 'Rs. ' + subtotal;
            document.getElementsByClassName('subprice3')[0].innerHTML = 'Rs. ' + NetTotal;
        }
    });

    document.getElementById("BuyNow1").addEventListener("click", function() {
        localStorage.setItem("PriceList", checkedItemsList);
        localStorage.setItem("NameList", checkedNameList);
        localStorage.setItem("NetTotal", NetTotal);
        localStorage.setItem("Subtotal", subtotal);

        var path = window.location.pathname;
        var page = path.split("/").pop();
        

        if (page === "Cart-ipad.html") {
            
            window.location.href = 'Checkout-iPad.html';    
        }
        if (page === "Cart-iPhone.html") {
           
            window.location.href = 'Checkout-iPhone.html';
        }


        
    });

});