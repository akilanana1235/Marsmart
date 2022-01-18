import {
  calculateRating,
  displayStars,
  displayBars,
  calculateProductRating,
  getCurrentPoiRatings,
} from "./Rating_Script.js";

function loadAndDisplayPurcasedProducts() {
  console.log("in-pur");
  fetch("Data/purchases.json")
    .then((res) => res.json())
    .then((data) => {
      let outputPurchasedProducts = "";
      let outputReviewScreen = "";
      data.forEach((p) => {
        outputPurchasedProducts += `
            <div class="card purchase-item">
                <img src=${p.img} style="width:7em" alt="">
                <div>
                    <p style="font-weight:bold;">${p.name}<p>
                    <p>Purchased on:<b>${p.purchased_date}</b></p>
                </div>
                <h5>qty:${p.qty}</h5>
                <h5 style="color:red"><b>$${p.price}</b></h5>
                <button class="ui-btn ui-btn-inline"><i class="fa fa-comments" aria-hidden="true"></i>Comment</button>
                <button class="ui-btn ui-btn-inline" onclick="showRatingScreen(${p.productId})"><i class="fa fa-star"></i>Rate</button>
            </div>
          `;
        outputReviewScreen += `
          <div class="card purchase-rating-box" id="rate-product-${
            p.productId
          }">
            <div id="purchase-rating-item">
              <img src=${p.img} style="width:7em" alt="">
              <p><b>${p.name}</b><p>
              <p>Purchased on:<b>${p.purchased_date}</b></p>
              <p>qty:${p.qty}</p>
              <h5 style="color:red"><b>$${p.price}</b></h5>
            </div>
            <article id="ratings-container">
              <div id="rating-numeric">
                <p id="ratingOutOfFive"><b id="initial-rate">${calculateProductRating(p.productId)}</b><span> out of</span> 5</p>
                <p id="starsOutOfFive">${displayStars(p.productId)}
                  <span id="total-reviews">${(() => {
                    let rating = getCurrentPoiRatings(p.productId);
                    return rating.total;
                  })()} </span> Reviews
                </p>
              </div>
              <div id="rating-bars">
              ${(() => {
                let rating = getCurrentPoiRatings(p.productId);
                let outputRatingBars="";
                outputRatingBars += `
                  ${displayBars(5, rating.five_stars, rating.total)}
                  ${displayBars(4, rating.four_stars, rating.total)}
                  ${displayBars(3, rating.three_stars, rating.total)}
                  ${displayBars(2, rating.two_stars, rating.total)}
                  ${displayBars(1, rating.one_stars, rating.total)}
                  `;
                return outputRatingBars;
              })()}
              </div>
            </article>
            <div id="rating-area">
              <img src="assets/images/star-vector.png" style="width:7em" alt="">
              <h3 id="rating-area-h"><b>How do you like to rate this product?</b></h3>
              <p>
                <span class="rating-stars"><i class='fa fa-star unrated' aria-hidden='true' onclick="handleStarRating(1)"></i></span>
                <span class="rating-stars"><i class='fa fa-star unrated' aria-hidden='true' onclick="handleStarRating(2)"></i></span>
                <span class="rating-stars"><i class='fa fa-star unrated' aria-hidden='true' onclick="handleStarRating(3)"></i></span>
                <span class="rating-stars"><i class='fa fa-star unrated' aria-hidden='true' onclick="handleStarRating(4)"></i></span>
                <span class="rating-stars"><i class='fa fa-star unrated' aria-hidden='true' onclick="handleStarRating(5)"></i></span>
              </p>
              <p id="rating-area-p">Please click a star according to your rating</p>
            </div>
          </div>
          `;
      });
      document.getElementById("purchase-container").innerHTML =
        outputPurchasedProducts;
      document.getElementById("review-area").innerHTML = outputReviewScreen;
    })
    .catch((err) => console.log(err));
}

$(document).ready(function () {
  loadAndDisplayPurcasedProducts();
});
