$(document).ready(function () {
 PopulateDetails();
});


function PopulateDetails(){
    
    let SelectedProdID = localStorage.getItem("selectedProductID");
    console.log(SelectedProdID);
    for(product of Products){   
        if(product.product_id===SelectedProdID){
          document.getElementById("product-image-1").src=product.img_url;
          document.getElementsByClassName("product-id")[0].src=product.product_id;
          document.getElementsByClassName("product-title-1")[0].innerHTML=product.title;
          document.getElementsByClassName("product-category-1")[0].innerHTML=product.category;
          console.log("hello")
        }
    }



}