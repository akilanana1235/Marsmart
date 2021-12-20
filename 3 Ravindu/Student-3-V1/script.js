function loadData() {
  fetch("Data/products.json")
    .then((res) => res.json())
    .then((data) => {
      let output1 = "";
      data.forEach((product) => {
        if (product.name == "Nestlé Nesquik Cereal Breakfast") {
          output1 += `<button class="ui-btn ui-btn-inline"><i class="fa fa-heart" aria-hidden="true"></i>Add to Wishlist</button>
          <button class="ui-btn ui-btn-inline"><i class="fa fa-share-alt"></i>Share</button>
          <h1 id="product-name">${product.name}</h1>
          <h4>${product.category}<span class="badge rounded-pill bg-success">In Stock</span></h4>
          <h4>Pack Size: ${product.size}</h4>
          <h2 id="product-price">$ ${product.price}</h2>
          <h4>${product.ratings}</h4>
          <h4>HIGHLIGHTS</h4>
          <p>Give a healthy start to kid's day with Nestlé' Nesquik Duo Breakfast Cereal. With the nutrition of wheat,
           the cereal gives them a boost to start their day. It combines the great taste of cocoa cereal balls and 
           flavored white chocolate</p>`;
        }
      });
      document.getElementById("product-info").innerHTML = output1;
    })
    .catch((err) => console.log(err));
}

$(document).ready(function () {
  loadData();
});
