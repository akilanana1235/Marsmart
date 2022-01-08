$(document).ready(function () {

    let priceList = localStorage.getItem("PriceList");
    let namelist = localStorage.getItem("NameList");
    let netTotal = localStorage.getItem("NetTotal");

    const priceListArray = priceList.split(",");
    const namelistArray = namelist.split(",");

    var path = window.location.pathname;
    var page = path.split("/").pop();

    document.getElementById('net-total').innerHTML = 'Rs. ' + netTotal;
    document.getElementById('sub-total').innerHTML = 'Rs. ' + netTotal;

    for (var i = 0; i < priceListArray.length; i++) {

        const priceblock = '<div class="ui-grid-b summary-content">' +
            '<div class="ui-block-a">' +
            '<div class="col-content">' + namelistArray[i] + '</div>' +
            '</div>' +
            '<div class="ui-block-b">' +
            '<div class="col-content">1</div>' +
            '</div>' +
            '<div class="ui-block-b">' +
            '<div class="col-content">Rs.' + priceListArray[i] + '</div>' +
            '</div>' +
            '</div>'

        document.getElementsByClassName('product-price')[0].innerHTML += priceblock;
    }

    jQuery(function ($) {

        // var $form = $('#frmBooking');

        var handler = StripeCheckout.configure({
            key: 'pk_test_cp21BcECf4kMMUbSlRlZlsMo',
            token: function (token) {
                if (token.id) {

                    if (page === "Checkout-iPad.html" ) {
            
                        window.location.href = 'Payment-successful-iPad.html';    
                    }
                    if (page === "Checkout-iPhone.html") {
                       
                        window.location.href = 'Payment-successful-iPhone.html';
                    }
                }
                // $(document).on("pagecreate", "#Checkout-page", function () {
                //     //setTimeout(function () { $("#p").popup("close"); }, 5000);
                //     $("#successpop").popup("open");
                // });
            }
        });

        $('#place-order').on('click', function (e) {
            handler.open({
                name: 'SpreeMart',
                currency: 'LKR',
                amount: netTotal * 100
                // closed: () => { console.log("Hello") }
            });
            $(window).on('popstate', function () {
                handler.close();

            });
        });
    });

});