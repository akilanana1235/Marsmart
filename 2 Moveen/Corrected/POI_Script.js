import {
  calculateRating,
  displayStars,
  displayBars,
  calculateProductRating,
} from "./Rating_Script.js";

const POI_PRODUCT_ID = localStorage.getItem("poi-id"); //id of currently opened POI's product
var _allProducts;

var xmlhttp = new XMLHttpRequest();
var url = "Data/products.json";
xmlhttp.open("GET", url, true);
xmlhttp.send();

//returns details of currently opened POI's product
function getCurrentPoiProduct() {
  let currentPoiProduct;

  _allProducts.forEach((product) => {
    if (product.id == POI_PRODUCT_ID) {
      currentPoiProduct = product;
    }
  });

  return currentPoiProduct;
}

function displayProductData() {
  let currentPoiProduct = getCurrentPoiProduct();
  let productInfo = `<button class="ui-btn ui-btn-inline"><i class="fa fa-heart" aria-hidden="true"></i>Add to Wishlist</button>
  <button class="ui-btn ui-btn-inline"><i class="fa fa-share-alt"></i>Share</button>

  <h1 id="product-name">${currentPoiProduct.name}</h1>
  
  <h4 class="mrgb-1">${currentPoiProduct.category}
      <!--showing the stock availability accoring to available stock quantity-->
      ${(() => {
        if (currentPoiProduct.stock_available > 0) {
          return '<span id="stock-status" style="background-color:#21EA35;">In Stock</span>';
        } else {
          return '<span id="stock-status" style="color:red;">Out of Stock</span>';
        }
      })()}
  </h4>

  <h4><b>Pack Size: ${currentPoiProduct.size}</b></h4>
  <p >
    <s class="product-price-wo-discount">${(() => {
      if (currentPoiProduct.discount != null) {
        let initialPrice = currentPoiProduct.price + currentPoiProduct.discount;
        return "$" + initialPrice;
      } else {
        return "";
      }
    })()}</s>
    <span class="product-price">$ ${currentPoiProduct.price}</span>
  <p>

  <h4 class="mrgb-1">
    ${displayStars()}
    <span class="product-rating">${calculateProductRating(POI_PRODUCT_ID)}<span>
  </h4>

  <h4>HIGHLIGHTS</h4>
  <p id="description">${currentPoiProduct.description}</p>`;

  document.getElementById("product-info").innerHTML = productInfo;
}

function loadAndDispalyProductRatings() {
  fetch("Data/ratings.json")
    .then((res) => res.json())
    .then((data) => {
      let outputRatingStars = "";
      let outputRatingBars = "";

      data.forEach((r) => {
        if (r.productId == POI_PRODUCT_ID) {
          outputRatingStars += `
          <p id="ratingOutOfFive">${calculateRating(
            r
          )}<span> out of</span> 5</p>
          <p id="starsOutOfFive">${displayStars()}<span>${
            r.total
          } Reviews</span></p>
          `;
          outputRatingBars += `
          ${displayBars(5, r.five_stars, r.total)}
          ${displayBars(4, r.four_stars, r.total)}
          ${displayBars(3, r.three_stars, r.total)}
          ${displayBars(2, r.two_stars, r.total)}
          ${displayBars(1, r.one_stars, r.total)}
          `;
        }
      });
      document.getElementById("rating-numeric").innerHTML = outputRatingStars;
      document.getElementById("rating-bars").innerHTML = outputRatingBars;
    })
    .catch((err) => console.log(err));
}

function displaySimilarProducts() {
  let currentPoiProduct = getCurrentPoiProduct();
  let outputSimilarProducts = `
            ${(() => {
              let innerOP = "";
              for (let i in currentPoiProduct.similar_products) {
                innerOP += `
                ${getProductCard(currentPoiProduct.similar_products[i])}
                `;
              }
              return innerOP;
            })()}
          `;
  document.getElementById("similar-products-container").innerHTML =
    outputSimilarProducts;
}

function getProductCard(id) {
  let outputProductCard = "";
  _allProducts.forEach((product) => {
    if (product.id == id) {
      outputProductCard += `
            <div class="card" style="flex:1">
            <img src=${product.img1} style="width:13em" alt="">
            <div>
              <h5 class="product-card-name">${product.name}</h5>
              <h6>
                <span>${product.category}</span>
                <span style="padding-left:6.5em;"><i class='fa fa-star checked' aria-hidden='true'></i>${calculateProductRating(POI_PRODUCT_ID)}</span>
              </h6>
            </div>
            <div style="text-align:center;">
              <p>${product.short_description}</p>
              <h4 style="color:red"><b>$${product.price}</b></h4>
            </div>
            <div style="font-size:small;">
              <button class="ui-btn ui-btn-a ui-btn-inline"><span><i class="fa fa-plus" aria-hidden="true"></i></span></button>
              <span>0</span>
              <button class="ui-btn ui-btn-a ui-btn-inline" style="margin: 0%;"><span><i class="fa fa-minus" aria-hidden="true"></i></span></button>
            </div>  
            <button class="ui-btn ui-btn-d ui-btn-inline">Add</button> 
          
            </div>
          `;
    }
  });
  console.log(outputProductCard);
  return outputProductCard;
}

$(document).ready(function () {
  xmlhttp.onload = function () {
    if (this.readyState ==4 && this.status == 200) {
      var allProducts = JSON.parse(this.responseText);
      _allProducts = allProducts;
      displayProductData();
      loadAndDispalyProductRatings();
      displaySimilarProducts()
    }
  };
});
