
var Products =
[
  {
    "product_id": "1",
    "title": "Nestlé Nesquik Cereals",
    "category": "Grocery",
    "description": "Neque porro quisquam est qui dolore ipsum quia dolor sit amet.",
    "price": 4.50,
    "rating": 4,
    "img_url": "Images/nesquick.png",
    "beforeDiscount": "",
    "discount_tag":"",
    "brand":"Nestle",
  },
  {
    "product_id": "2",
    "title": "Vanilla Almond Milkins",
    "category": "Grocery",
    "description": "Neque porro quisquam est qui dolore ipsum quia dolor sit amet.",
    "price": 2.40,
    "rating": 4.3,
    "img_url": "Images/armondMilk.png",
    "beforeDiscount": "",
    "discount_tag":"",
    "brand":"Amul",
  },
  {
    "product_id": "3",
    "title": "Kraft Cheddar Cheese",
    "category": "Dairy",
    "description": "Soft cheddar cheese",
    "price": 3.50,
    "rating": 4.9,
    "img_url": "Images/cheese.png",
    "beforeDiscount": 4.80,
    "discount_tag":"Images/cheese.png",
    "brand":"Chedder",
  },
  {
    "product_id": "4",
    "title": "Lurpak Unsalted Butter",
    "category": "Grocery",
    "description": "Neque porro quisquam est qui dolore ipsum quia dolor sit amet.",
    "price": 8.50,
    "rating": 4.5,
    "img_url": "Images/luprak.png",
    "beforeDiscount": "",
    "discount_tag":"",
    "brand":"Nestle",
  },
  
  ]

  $(document).ready(function () {

    let visibile = false;

    populateProductCard();

    $('#BrandFilter').on('change', function () {

        const container = document.getElementById('product_List');
        container.innerHTML='';

        var outputFilter = '';
        var $this = $(this),
        filterVal   = $this.val();
      
        for (var i = 0; i < Products.length; i++) {

            if(filterVal==Products[i].brand){

                outputFilter += `
        <div class="card">
                    <div class="cardheader">

                        <div class="cardHeart">
                            <div class="addToWishL">
                                <i id="wishIcon" class="fa fa-heart-o" aria-hidden="true"></i>
                            </div>
                            <div class="discounted">
                               <img  id="discountTag" src="" alt="">
                            </div>
                        </div>
                        <div class="cardImage">
                            <img id="product-image" class="card-img-top" src="${Products[i].img_url}" alt="Card image cap">
                        </div>

                    </div>
                   
                    <div class="card-body">

                        <div class="product_title">
                            <h5 id="productTitle" class="card-title">${Products[i].title}</h5>
                        </div>

                        <div class="product_sub_info">

                            <div class="product_type">
                             <p id="product_cat">${Products[i].category}</p>
                            </div>

                            <div class="product_rating">
                              <p id="procustRating">${Products[i].rating}</p>
                            </div>

                        </div>

                        <div class="product_description">
                            <p id="productDescription" class="card-text">${Products[i].description}</p>
                        </div>

                        <div class="product_price">
                               
                               <p id="productPrice"> <span id="beforeDiscounted">${Products[i].beforeDiscount}</span> <span id="price_product"> ${'$'+Products[i].price}</span></p>
                        </div>

                        <div class="product_footer">

                            <div class="QuanitityContainer">

                                <button type="button" id="plusButton" class="btn btn-secondary">+</button>
                                <span id="quantity">1</span>
                               <button type="button" id="minusButton" class="btn btn-secondary">-</button>
                            </div>

                            <div class="addToCartContainer">
                                <div class="continue">
                                    <p>Add to cart</p>
                                   </div>
                            </div>  
                        </div>                    

                    </div>
                </div>
      `;
            }


          if(filterVal=="All"){
              
            outputFilter += `
            <div class="card">
                        <div class="cardheader">
    
                            <div class="cardHeart">
                                <div class="addToWishL">
                                    <i id="wishIcon" class="fa fa-heart-o" aria-hidden="true"></i>
                                </div>
                                <div class="discounted">
                                   <img  id="discountTag" src="" alt="">
                                </div>
                            </div>
                            <div class="cardImage">
                                <img id="product-image" class="card-img-top" src="${Products[i].img_url}" alt="Card image cap">
                            </div>
    
                        </div>
                       
                        <div class="card-body">
    
                            <div class="product_title">
                                <h5 id="productTitle" class="card-title">${Products[i].title}</h5>
                            </div>
    
                            <div class="product_sub_info">
    
                                <div class="product_type">
                                 <p id="product_cat">${Products[i].category}</p>
                                </div>
    
                                <div class="product_rating">
                                  <p id="procustRating">${Products[i].rating}</p>
                                </div>
    
                            </div>
    
                            <div class="product_description">
                                <p id="productDescription" class="card-text">${Products[i].description}</p>
                            </div>
    
                            <div class="product_price">
                                   
                                   <p id="productPrice"> <span id="beforeDiscounted">${Products[i].beforeDiscount}</span> <span id="price_product"> ${'$'+Products[i].price}</span></p>
                            </div>
    
                            <div class="product_footer">
    
                                <div class="QuanitityContainer">
    
                                    <button type="button" id="plusButton" class="btn btn-secondary">+</button>
                                    <span id="quantity">1</span>
                                   <button type="button" id="minusButton" class="btn btn-secondary">-</button>
                                </div>
    
                                <div class="addToCartContainer">
                                    <div class="continue">
                                        <p>Add to cart</p>
                                       </div>
                                </div>  
                            </div>                    
    
                        </div>
                    </div>
          `;


          }  

        }

        container.innerHTML=outputFilter;  

    }); //End of Filter by Brand

    $("#addFilter").on('click',function(){



        if(!visibile){
            document.getElementById("priceFilter").style.visibility="visible";
            document.getElementById("FilterContainer").style.height="140px";
            visibile=true;
        }else{
            document.getElementById("priceFilter").style.visibility="hidden";
            document.getElementById("FilterContainer").style.height="90px";
            visibile=false;
        }
        

    });


  });

  function populateProductCard() {

    const container = document.getElementById('product_List');

    var output = '';

    //var images = document.querySelectorAll("[id='product-image']");

    for (var i = 0; i < Products.length; i++) {

        output += `
        <div class="card">
                    <div class="cardheader">

                        <div class="cardHeart">
                            <div class="addToWishL">
                                <i id="wishIcon" class="fa fa-heart-o" aria-hidden="true"></i>
                            </div>
                            <div class="discounted">
                               <img  id="discountTag" src="" alt="">
                            </div>
                        </div>
                        <div class="cardImage">
                            <img id="product-image" class="card-img-top" src="${Products[i].img_url}" alt="Card image cap">
                        </div>

                    </div>
                   
                    <div class="card-body">

                        <div class="product_title">
                            <h5 id="productTitle" class="card-title">${Products[i].title}</h5>
                        </div>

                        <div class="product_sub_info">

                            <div class="product_type">
                             <p id="product_cat">${Products[i].category}</p>
                            </div>

                            <div class="product_rating">
                              <p id="procustRating">${Products[i].rating}</p>
                            </div>

                        </div>

                        <div class="product_description">
                            <p id="productDescription" class="card-text">${Products[i].description}</p>
                        </div>

                        <div class="product_price">
                               
                               <p id="productPrice"> <span id="beforeDiscounted">${Products[i].beforeDiscount}</span> <span id="price_product"> ${'$'+Products[i].price}</span></p>
                        </div>

                        <div class="product_footer">

                            <div class="QuanitityContainer">

                                <button type="button" id="plusButton" class="btn btn-secondary">+</button>
                                <span id="quantity">1</span>
                               <button type="button" id="minusButton" class="btn btn-secondary">-</button>
                            </div>

                            <div class="addToCartContainer">
                                <div class="continue">
                                    <p>Add to cart</p>
                                   </div>
                            </div>  
                        </div>                    

                    </div>
                </div>
      `;

    }
    container.innerHTML=output;  
  }//Populate Method end


  