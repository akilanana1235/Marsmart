
var Products =
[
  {
    "product_id": "1",
    "title": "Nestlé Nesquik Cereals",
    "category": "Grocery",
    "description": "Neque porro quisquam est qui dolore ipsum quia dolor sit amet.",
    "price": 4.50,
    "rating": 4.10,
    "img_url": "Images/nesquick.png",
    "beforeDiscount": "",
    "discount_tag":"",
    "brand":"Nestle",
  },
  {
    "product_id": "2",
    "title": "Vanilla Almond Milkins",
    "category": "Dairy",
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
    "description": "Neque porro quisquam est qui dolore ipsum quia dolor sit amet.",
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
    "price": 58.50,
    "rating": 4.5,
    "img_url": "Images/luprak.png",
    "beforeDiscount": "",
    "discount_tag":"",
    "brand":"Nestle",
  },
  
  ];

  var tempProductHolder = [];

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
                            <p id="procustRating"> <span>&#9733;</span> ${Products[i].rating}</p>
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
                                <span id="wishIcon">&#9825;</i>
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
                                <p id="procustRating"> <span>&#9733;</span> ${Products[i].rating}</p>
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


    $('#SortBy').on('change', function () {

        const container = document.getElementById('product_List');
        container.innerHTML='';

        var outputFilter = '';
        var $this = $(this),
        filterVal   = $this.val();
      
        for (i = 0; i < Products.length; i++) {
            tempProductHolder[i] = Products[i];
          }

            if(filterVal=='Best'){

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
            
            else if(filterVal=='popularity'){

                for(var x=0; x<tempProductHolder.length; x++){

                    for(var j=x+1; j<tempProductHolder.length; j++){

                        if(tempProductHolder[x].rating<tempProductHolder[j].rating){
                            var tempObj = tempProductHolder[j];
                            tempProductHolder[j]=tempProductHolder[x];
                            tempProductHolder[x]=tempObj;  
                        }
                    }
                }

                for (var i = 0; i < tempProductHolder.length; i++) {
                    outputFilter += `
                    <div class="card">
                                <div class="cardheader">
            
                                    <div class="cardHeart">
                                        <div class="addToWishL">
                                        <span id="wishIcon">&#9825;</i>
                                        </div>
                                        <div class="discounted">
                                           <img  id="discountTag" src="" alt="">
                                        </div>
                                    </div>
                                    <div class="cardImage">
                                        <img id="product-image" class="card-img-top" src="${tempProductHolder[i].img_url}" alt="Card image cap">
                                    </div>
            
                                </div>
                               
                                <div class="card-body">
            
                                    <div class="product_title">
                                        <h5 id="productTitle" class="card-title">${tempProductHolder[i].title}</h5>
                                    </div>
            
                                    <div class="product_sub_info">
            
                                        <div class="product_type">
                                         <p id="product_cat">${tempProductHolder[i].category}</p>
                                        </div>
            
                                        <div class="product_rating">
                                        <p id="procustRating"> <span>&#9733;</span> ${tempProductHolder[i].rating}</p>
                                        </div>
            
                                    </div>
            
                                    <div class="product_description">
                                        <p id="productDescription" class="card-text">${tempProductHolder[i].description}</p>
                                    </div>
            
                                    <div class="product_price">
                                           
                                           <p id="productPrice"> <span id="beforeDiscounted">${tempProductHolder[i].beforeDiscount}</span> <span id="price_product"> ${'$'+tempProductHolder[i].price}</span></p>
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
            
            else if(filterVal == 'alphabetical'){

                for(var x=0; x<tempProductHolder.length; x++){

                    for(var j=x+1; j<tempProductHolder.length; j++){

                        if(tempProductHolder[x].title>tempProductHolder[j].title){
                            var tempObj = tempProductHolder[j];
                            tempProductHolder[j]=tempProductHolder[x];
                            tempProductHolder[x]=tempObj;  
                        }
                    }
                } 
             
                for (var i = 0; i < tempProductHolder.length; i++) {
                    outputFilter += `
                    <div class="card">
                                <div class="cardheader">
            
                                    <div class="cardHeart">
                                        <div class="addToWishL">
                                        <span id="wishIcon">&#9825;</i>
                                        </div>
                                        <div class="discounted">
                                           <img  id="discountTag" src="" alt="">
                                        </div>
                                    </div>
                                    <div class="cardImage">
                                        <img id="product-image" class="card-img-top" src="${tempProductHolder[i].img_url}" alt="Card image cap">
                                    </div>
            
                                </div>
                               
                                <div class="card-body">
            
                                    <div class="product_title">
                                        <h5 id="productTitle" class="card-title">${tempProductHolder[i].title}</h5>
                                    </div>
            
                                    <div class="product_sub_info">
            
                                        <div class="product_type">
                                         <p id="product_cat">${tempProductHolder[i].category}</p>
                                        </div>
            
                                        <div class="product_rating">
                                        <p id="procustRating"> <span>&#9733;</span> ${tempProductHolder[i].rating}</p>
                                        </div>
            
                                    </div>
            
                                    <div class="product_description">
                                        <p id="productDescription" class="card-text">${tempProductHolder[i].description}</p>
                                    </div>
            
                                    <div class="product_price">
                                           
                                           <p id="productPrice"> <span id="beforeDiscounted">${tempProductHolder[i].beforeDiscount}</span> <span id="price_product"> ${'$'+tempProductHolder[i].price}</span></p>
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
            
            else if(filterVal == 'discount'){

            }


          if(filterVal=="All"){
              
            for (var i = 0; i < Products.length; i++) {

            outputFilter += `
            <div class="card">
                        <div class="cardheader">
    
                            <div class="cardHeart">
                                <div class="addToWishL">
                                <span id="wishIcon">&#9825;</i>
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
                                <p id="procustRating"> <span>&#9733;</span> ${Products[i].rating}</p>
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

    });

    $('#typeFilter').on('change', function () {

        const container = document.getElementById('product_List');
        container.innerHTML='';

        var outputFilter = '';
        var $this = $(this),
        filterVal   = $this.val();
      
        for (var i = 0; i < Products.length; i++) {

            if(filterVal==Products[i].category){

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
                            <p id="procustRating"> <span>&#9733;</span> ${Products[i].rating}</p>
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
                                <span id="wishIcon">&#9825;</i>
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
                                <p id="procustRating"> <span>&#9733;</span> ${Products[i].rating}</p>
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

    });


    
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


    $('#PriceRange').on('change', function () {

        const container = document.getElementById('product_List');
        container.innerHTML='';

        var outputFilter = '';
        var $this = $(this),
        filterVal   = $this.val();
      
        for (var i = 0; i < Products.length; i++) {

            if(filterVal=="45"){

                if(Products[i].price<=45){
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
                            <p id="procustRating"> <span>&#9733;</span> ${Products[i].rating}</p>
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
        }else if(filterVal=="100"){
            if(Products[i].price>45 && Products[i].price<=100){
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
                            <p id="procustRating"> <span>&#9733;</span> ${Products[i].rating}</p>
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


          if(filterVal=="All"){
              
            outputFilter += `
            <div class="card">
                        <div class="cardheader">
    
                            <div class="cardHeart">
                                <div class="addToWishL">
                                <span id="wishIcon">&#9825;</i>
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
                                <p id="procustRating"> <span>&#9733;</span> ${Products[i].rating}</p>
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

    });



    $(".addToWishL").children().on('click',function(){
        
        console.log($(this).attr('class'));
        console.log($(this).attr('id'));


        if($(this).attr('class')=='fa fa-heart-o'){
            $(this).removeClass('fa fa-heart-o');
            $(this).addClass('fa fa-heart');
            $(this).css("color",'red');
        }else{
            $(this).removeClass('fa fa-heart');
            $(this).addClass('fa fa-heart-o');
            $(this).css("color",'black');
        }

        
    });

    $('.earnLoyalty').click(() => {

          window.location.href = 'GameLanding-Ipad.html';
        
      });

  }); //End of Document ready func



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
                              <i id="${Products[i].product_id}" class="fa fa-heart-o"></i>
                          
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
                            <p id="procustRating"> <span>&#9733;</span> ${Products[i].rating}</p>
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
                            <a style="text-decoration: none;" href="#addToBasketPopUp"  data-rel="popup" >
                                <div class="continue">
                                   <p>Add to cart</p>
                                   </div></a>
                            </div>  
                        </div>                    

                    </div>
                </div>
      `;

    }
    container.innerHTML=output;  
  }//Populate Method end


 

  