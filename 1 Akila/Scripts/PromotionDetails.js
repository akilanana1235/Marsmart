$(document).ready(function () {
    PopulateDetails();
   });
   
   
   function PopulateDetails(){
       
       let SelectedPromID = localStorage.getItem("selectedPromotionID");
       console.log(SelectedPromID);
       for(prom of Promotions){   
           if(prom.promotion_id===SelectedPromID){
             document.getElementById("promotion-image").src=prom.img_url;
             document.getElementsByClassName("promotion-title")[0].innerHTML=prom.title;
             document.getElementsByClassName("promotion-category")[0].innerHTML=prom.category;
             document.getElementsByClassName("promotion-terms")[0].innerHTML=prom.description;
             document.getElementsByClassName("promotion-validation")[0].innerHTML=prom.terms;
             document.getElementsByClassName("price")[0].innerHTML="Rs." +prom.price;
           }
       }
   
    }   