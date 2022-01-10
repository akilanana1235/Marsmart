import { calculateRating,displayStars,displayBars} from "./Rating_Script.js";

//fetching and display product data
function loadAndDisplayProductData() {
  fetch("Data/products.json")
    .then((res) => res.json())
    .then((data) => {

      let productInfo = "";
      let output2 = "";

      data.forEach((product) => {
        if (product.id == 1) {
          productInfo += 
            `<button class="ui-btn ui-btn-inline"><i class="fa fa-heart" aria-hidden="true"></i>Add to Wishlist</button>
            <button class="ui-btn ui-btn-inline"><i class="fa fa-share-alt"></i>Share</button>

            <h1 id="product-name">${product.name}</h1>
            
            <h4 class="mrgb-1">${product.category}
                <!--showing the stock availability accoring to available stock quantity-->
                <span id="stock-status">${(()=>{
                  if(product.stock_available>0){
                    return 'In Stock';
                  }else{
                    return 'Out of Stock';
                  }
                })()}</span>
            </h4>

            <h4><b>Pack Size: ${product.size}</b></h4>
            <p >
              <s class="product-price-wo-discount">${(()=>{
                if(product.discount!=null){
                  let initialPrice=product.price+product.discount;
                  return "$"+initialPrice;
                }else{
                  return null;
                }
              })()}</s>
              <span class="product-price">$ ${product.price}</span>
            <p>

            <h4 class="mrgb-1">
              ${(()=>{
                let i=0;
                let ratedStars="";
                while(i<Math.round(product.ratings)){
                  ratedStars+="<i class='fa fa-star checked' aria-hidden='true'></i>";
                  i++;
                }
                return ratedStars;
              })()}

              ${(()=>{
                let i=0;
                let unratedStars="";
                while(i<5-Math.round(product.ratings)){
                  unratedStars+="<i class='fa fa-star unchecked' aria-hidden='true'></i>";
                  i++;
                }
                return unratedStars;
              })()}
              ${product.ratings}
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
        if(r.productId==1){
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

$(document).ready(function () {
  loadAndDisplayProductData();
  loadAndDispalyProductRatings();
});
