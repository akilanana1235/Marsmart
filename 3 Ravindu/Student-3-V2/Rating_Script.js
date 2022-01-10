var xmlhttp = new XMLHttpRequest();
var url = "Data/ratings.json";
var currentPoiRatings; //contains currently open POI product's rating data

xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var allProductsRatings = JSON.parse(this.responseText);//rating data of each product
    setCurrentPoiRatings(allProductsRatings);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function setCurrentPoiRatings(data) {
  let productRating;
  const POI_PRODUCT_ID = localStorage.getItem("poi-id"); //currently open POI's product-Id

  data.forEach((r) => {
    if (r.productId == POI_PRODUCT_ID) {
      productRating = r;
    }
  });

  currentPoiRatings = productRating;
}

//REMEMBER:should add similar products products.json
export function calculateRating(obj) {
  let totalStarsValue =
    obj.five_stars * 5 +
    obj.four_stars * 4 +
    obj.three_stars * 3 +
    obj.two_stars * 2 +
    obj.one_stars * 5;
  let avgRating = obj.total == 0 ? 0 : totalStarsValue / obj.total;
  return avgRating.toFixed(1);
}

export function displayStars() {
  let i = 0;
  let j = 0;
  const rating = Math.round(calculateRating(currentPoiRatings));
  let ratedStars = "";
  while (i < rating) {
    ratedStars += "<i class='fa fa-star checked' aria-hidden='true'></i>";
    i++;
  }
  while (j < 5 - rating) {
    ratedStars += "<i class='fa fa-star unchecked' aria-hidden='true'></i>";
    j++;
  }
  return ratedStars;
}

export function displayBars(row, barStars, totalStars) {
  const barPercentage = Math.round((barStars / totalStars) * 100);
  let output = `
  <div class="rating-bar">
    <div>${row} stars</div>
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: ${barPercentage}%" aria-valuenow="${barPercentage}" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div>${barStars}</div>
  </div>
  `;
  return output;
}

export function getEachProductRating(){
  var product 
}
