import { calculateRating,displayStars,displayBars,calculateProductRating} from "./Rating_Script.js";
const POI_PRODUCT_ID = localStorage.getItem("poi-id");

//fetching and display product data
function loadAndDisplayProductData() {
  fetch("Data/products.json")
    .then((res) => res.json())
    .then((data) => {

      let productInfo = "";
      let output2 = "";

      data.forEach((product) => {
        if (product.id == POI_PRODUCT_ID) {
          productInfo += 
            `<button class="ui-btn ui-btn-inline"><i class="fa fa-heart" aria-hidden="true"></i>Add to Wishlist</button>
            <button class="ui-btn ui-btn-inline"><i class="fa fa-share-alt"></i>Share</button>

            <h1 id="product-name">${product.name}</h1>
            
            <h4 class="mrgb-1">${product.category}
                <!--showing the stock availability accoring to available stock quantity-->
                ${(()=>{
                  if(product.stock_available>0){
                    return '<span id="stock-status" style="background-color:green;">In Stock</span>';
                  }else{
                    return '<span id="stock-status" style="color:red;">Out of Stock</span>';
                  }
                })()}
            </h4>

            <h4><b>Pack Size: ${product.size}</b></h4>
            <p >
              <s class="product-price-wo-discount">${(()=>{
                if(product.discount!=null){
                  let initialPrice=product.price+product.discount;
                  return "$"+initialPrice;
                }else{
                  return "";
                }
              })()}</s>
              <span class="product-price">$ ${product.price}</span>
            <p>

            <h4 class="mrgb-1">
              ${displayStars()}
              <span class="product-rating">${calculateProductRating(POI_PRODUCT_ID)}<span>
            </h4>

            <h4>HIGHLIGHTS</h4>
            <p id="description">${product.description}</p>`;
          
          output2+=`<img src=${product.img1} style="width:22em" alt="">`
        }
      });
      document.getElementById("product-info").innerHTML = productInfo;
      //document.getElementById("product-img-gallery").innerHTML = output2;
      //class="badge rounded-pill bg-success"
      document.getElementById("stock-status").classList.add("badge rounded-pill bg-success");
    })
    .catch((err) => console.log(err));
}

function loadAndDispalyProductRatings(){
  fetch("Data/ratings.json")
    .then((res) => res.json())
    .then((data) => {
      let outputRatingStars="";
      let outputRatingBars="";

      data.forEach((r)=>{
        if(r.productId==POI_PRODUCT_ID){
          outputRatingStars+=`
          <p id="ratingOutOfFive">${calculateRating(r)}<span> out of</span> 5</p>
          <p id="starsOutOfFive">${displayStars()}<span>${r.total} Reviews</span></p>
          `
          outputRatingBars+=`
          ${displayBars(5,r.five_stars,r.total)}
          ${displayBars(4,r.four_stars,r.total)}
          ${displayBars(3,r.three_stars,r.total)}
          ${displayBars(2,r.two_stars,r.total)}
          ${displayBars(1,r.one_stars,r.total)}
          `
        }
      })
      document.getElementById("rating-numeric").innerHTML=outputRatingStars;
      document.getElementById("rating-bars").innerHTML=outputRatingBars;
    })
    .catch((err) => console.log(err));
}

function loadAndDisplaySimilarProducts(){
  fetch("Data/products.json")
    .then((res) => res.json())
    .then((data) => {
      let outputSimilarProducts="";
      data.forEach((product)=>{
        if(product.id==POI_PRODUCT_ID){
          outputSimilarProducts+=`
            ${(()=>{
              let innerOP="";
              for(let i in product.similar_products ){
                innerOP+=`
                ${displayProductCard(product.similar_products[i])}
                `
              }
              return innerOP;
            })()}
          `
        }
      })
      document.getElementById("similar-products-container").innerHTML=outputSimilarProducts;
    })
    .catch((err) => console.log(err));
}

function displayProductCard(id){
  console.log(id);
  fetch("Data/products.json")
    .then((res) => res.json())
    .then((data) => {
      let outputProductCard="";
      data.forEach((product)=>{
        if(product.id==id){
          outputProductCard+=`
            <div class="card">
            <img src=${product.img1} style="width:12em" alt="">
            <div>
              <h5>${[product.name]}</h5>
            </div>
            </div>
          `
        }
      })
      //return outputProductCard;
      return "hello"
    })
    .catch((err) => console.log(err));
}

$(document).ready(function () {
  loadAndDisplayProductData();
  loadAndDispalyProductRatings();
  loadAndDisplaySimilarProducts();
});
