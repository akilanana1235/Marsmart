function loadAndDisplayPurcasedProducts(){
    console.log("in-pur");
    fetch("Data/purchases.json")
    .then((res) => res.json())
    .then((data) => {
      let outputPurchasedProducts = "";

      data.forEach((p) => {
          console.log(p);
          outputPurchasedProducts += `
            <div class="card">
                <img src=${p.img} style="width:7em" alt="">
                <div>
                    <p style="font-weight:bold;">${p.name}<p>
                    <p>Purchased on:<b>${p.purchased_date}</b></p>
                </div>
                <h5>qty:${p.qty}</h5>
                <h5 style="color:red"><b>$${p.price}</b></h5>
                <button class="ui-btn ui-btn-inline"><i class="fa fa-comments" aria-hidden="true"></i>Comment</button>
                <button class="ui-btn ui-btn-inline"><i class="fa fa-star"></i>Rate</button>
            </div>
          `;
      });
      document.getElementById("purchase-container").innerHTML = outputPurchasedProducts;
    })
    .catch((err) => console.log(err));
}

$(document).ready(function () {
    loadAndDisplayPurcasedProducts();
  });