$(document).ready(function() {

    let productCartList = localStorage.getItem("ProductCartList");

    const CartProductIDArray = productCartList.split(",");

    const noOfProducts = CartProductIDArray.length;

    document.getElementById('deletetxt').innerHTML = '(' + noOfProducts + ')' + 'Items';

    for (cartItem of CartProductIDArray) { 
        var cartProduct;
        console.log(cartItem);
        for (var i = 0; i < Products.length; i++) {
            if (Products[i].product_id === cartItem) {
                const CartHTML = `
                <div class="ui-grid-c cardBody">
                             <div class="ui-block-a containerOne">
                                    <input type="checkbox" name="checkboxSelectAll" class="productCheckBox" id="checkboxSelectAllProduct" data-mini="true" />    
                            </div>
                             <div class="ui-block-b containerTwo">
                                    <img id="productImage" src="${Products[i].img_url}">
                            </div>
                             <div class="ui-block-c containerThree">
                                    
                                    <div class="card-body">

                                        <div class="product_title">
                                            <h5 id="productTitle" class="card-title">${Products[i].title}</h5>
                                        </div>
                
                                        <div class="product_sub_info">
                                             <p id="product_cat">${Products[i].category}</p>
                                        </div>
                
                                        <div class="product_description">
                                            <p id="productDescription" class="card-text">${Products[i].description}</p>
                                        </div>

                                        <div class="product_footer">
                                            <div class="QuanitityContainer">
                                                <button type="button" id="plusButton" class="btn btn-secondary">${'+'}</button>
                                                <span id="quantity">1</span>
                                               <button type="button" id="minusButton" class="btn btn-secondary">-</button>
                                            </div>
                                        </div>                    
                
                                    </div>
                            </div>
                             <div class="ui-block-d containerFour">
                                    <div>

                                    </div>
                                    <div class="product_price">
                                        <p id="productPrice"> <span id="beforeDiscounted">${Products[i].beforeDiscount}</span> <span id="price_product" class="price">${'$'+Products[i].price}</span></p>
                                 </div>
                                 <div class="product_rating">
                                    <p id="procustRating"> <span>&#9733;</span> ${Products[i].rating}</p>
                                </div>
                            </div>
                        </div>
                `;
                 document.getElementsByClassName('productcardContainer')[0].innerHTML += CartHTML;
                 $("#minusButton").unbind('hover');
                break;
            }
        }
        console.log(cartProduct);
    }

    var subtotal = 0;
    var NetTotal = 0;

    

    $('#delete-icon').click(function() {
        localStorage.clear('ProductCartList');
        location.reload();
    });



    var checkedItemsList = [];
    var checkedNameList=[];




    $(".productCheckBox").change(function() {

        if (this.checked) {
            var itemprice = parseFloat(($('.price').eq($('.productCheckBox').index(this)).text().split("$")[1]));


            var itemName=$('.card-title').eq($('.productCheckBox').index(this)).text()
            subtotal += itemprice;
            checkedItemsList.push(itemprice);
            checkedNameList.push(itemName)
            NetTotal = subtotal;
            document.getElementById('subtotalprice').innerText = '$' + subtotal;
            document.getElementById('priceAfterDiscount').innerText = '$' + subtotal;
            document.getElementsByClassName('finalPrice')[0].innerHTML = '$' + NetTotal;
        }

        if (!this.checked) {
            var itemprice = parseFloat(($('.price').eq($('.productCheckBox').index(this)).text().split("$")[1]));
            var itemName=$('.card-title').eq($('.productCheckBox').index(this)).text()
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
            
            document.getElementById('subtotalprice').innerText = '$' + subtotal;
            document.getElementById('priceAfterDiscount').innerText = '$' + subtotal;
            document.getElementsByClassName('finalPrice')[0].innerHTML = '$' + NetTotal;
        }


        if(checkedItemsList.length>0){
            document.getElementById("loyaltyButton").style.setProperty('background-color', '#15317A', 'important');
            document.getElementById("RedeemLoyaltyPopUp").style.visibility='hidden';
        }else{
            document.getElementById("loyaltyButton").style.setProperty('background-color', 'rgba(21, 49, 122, 0.7)', 'important');
            document.getElementById("RedeemLoyaltyPopUp").style.visibility='visible';
        }
    
    });

    $('#loyaltyButton').click(()=>{
        if(checkedItemsList.length>0){
            document.getElementById("RedeemLoyaltyPopUp").style.visibility='visible';
            
        }else{
        
            document.getElementById("RedeemLoyaltyPopUp").style.visibility='hidden';
        }
    });

//Getting Loyalty Points

    let userloyaltyPoints=localStorage.getItem('UserLoyaltyPoints');

  if(userloyaltyPoints==null){
      userloyaltyPoints=0;
  }


    document.getElementById("reducePointbox1").innerHTML=(userloyaltyPoints*20)/100;
    document.getElementById("reducePointbox2").innerHTML=(userloyaltyPoints*25)/100;
    document.getElementById("reducePointbox3").innerHTML=(userloyaltyPoints*45)/100;
    

  $('#reducePointbox1').click(()=>{
      

    if(userloyaltyPoints>5 && (NetTotal>userloyaltyPoints) ){

        var toReduce = (userloyaltyPoints*20)/100;
        document.getElementById('subtotalprice').innerText = '$' + subtotal;
        document.getElementById('priceAfterDiscount').innerText = '$' + subtotal-toReduce;
        document.getElementById('discountedPrice').innerHTML='$' + toReduce;
        NetTotal=NetTotal-toReduce;
        document.getElementsByClassName('finalPrice')[0].innerHTML = '$' + NetTotal;

        userloyaltyPoints=userloyaltyPoints-toReduce;
        localStorage.setItem("userloyaltyPoints",userloyaltyPoints);

    }

  });

  $('#reducePointbox2').click(()=>{
      

    if(userloyaltyPoints>5 && (NetTotal>userloyaltyPoints) ){

        var toReduce = (userloyaltyPoints*25)/100;
        document.getElementById('subtotalprice').innerText = '$' + subtotal;
        document.getElementById('priceAfterDiscount').innerText = '$' + subtotal-toReduce;
        document.getElementById('discountedPrice').innerHTML='$' + toReduce;
        NetTotal=NetTotal-toReduce;
        document.getElementsByClassName('finalPrice')[0].innerHTML = '$' + NetTotal;

        userloyaltyPoints=userloyaltyPoints-toReduce;
        localStorage.setItem("userloyaltyPoints",userloyaltyPoints);

    }
  });


  $('#reducePointbox3').click(()=>{
      
    if(userloyaltyPoints>5 && (NetTotal>userloyaltyPoints) ){

        var toReduce = (userloyaltyPoints*45)/100;
        document.getElementById('subtotalprice').innerText = '$' + subtotal;
        document.getElementById('priceAfterDiscount').innerText = '$' + subtotal-toReduce;
        document.getElementById('discountedPrice').innerHTML='$' + toReduce;
        NetTotal=NetTotal-toReduce;
        document.getElementsByClassName('finalPrice')[0].innerHTML = '$' + NetTotal;

        userloyaltyPoints=userloyaltyPoints-toReduce;
        localStorage.setItem("userloyaltyPoints",userloyaltyPoints);

    }
  });

    
   $(".checkOut").on('click',function(){

    if(checkedItemsList.length==0){
        document.getElementById("popUpHeader").innerHTML="Oops!";
        document.getElementById("popupContent").innerHTML="Please select the item/s to buy in the cart";
        document.getElementById("buttonTextcheckout").innerHTML="Select Item/s";
        document.getElementById("checkoutPopUpButton").style.marginLeft="-18%";
        document.getElementById("checkoutPopUpCancelButton").style.visibility="hidden";

        document.getElementById("checkOutPopUpicon").style.fontSize="120px";
        document.getElementById("checkOutPopUpicon").style.marginTop="60px";
        document.getElementById("checkOutPopUpicon").style.visibility="visible";

        document.getElementById("checkOutPopUpiconCaution").style.fontSize="0px";
        document.getElementById("checkOutPopUpiconCaution").style.marginTop="0px";
        document.getElementById("checkOutPopUpiconCaution").style.visibility="hidden";


    }else{

        document.getElementById("checkOutPopUpicon").style.fontSize="0px";
        document.getElementById("checkOutPopUpicon").style.marginTop="0px";
        document.getElementById("checkOutPopUpicon").style.visibility="hidden";

        document.getElementById("checkOutPopUpiconCaution").style.visibility="visible";
        document.getElementById("checkOutPopUpiconCaution").style.fontSize="120px";
        document.getElementById("checkOutPopUpiconCaution").style.marginTop="60px";

        


        document.getElementById("popUpHeader").innerHTML="Are you sure you want to proceed to checkout?";
        document.getElementById("popupContent").innerHTML="";
        document.getElementById("buttonTextcheckout").innerHTML="Proceed";
        document.getElementById("checkoutPopUpButton").style.marginLeft="5%";
        document.getElementById("checkoutPopUpCancelButton").style.visibility="visible";
        
    }

   });

});