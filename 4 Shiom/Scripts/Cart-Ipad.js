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
                                    <input type="checkbox" name="checkboxSelectAll" class="customCehckBox" id="checkboxSelectAllProduct" data-mini="true" />    
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
                                                <button type="button" id="plusButton" class="btn btn-secondary">+</button>
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
                                        <p id="productPrice"> <span id="beforeDiscounted">${Products[i].beforeDiscount}</span> <span id="price_product">${'$'+Products[i].price}</span></p>
                                 </div>
                                 <div class="product_rating">
                                    <p id="procustRating"> <span>&#9733;</span> ${Products[i].rating}</p>
                                </div>
                            </div>
                        </div>
                `;
                 document.getElementsByClassName('productcardContainer')[0].innerHTML += CartHTML;
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