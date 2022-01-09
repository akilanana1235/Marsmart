$(document).ready(function () {

    console.log("Hwllox");

    $("#camera-icon").click(function () {
        window.location.href = 'AR-Camera.html';
    });


    $("#camera-click").click(function () {
        console.log("hello");
        
        html2canvas(document.getElementById('container')).then(function (canvas) {
            console.log(canvas);
            saveAs(canvas.toDataURL(), 'file-name.png');
            // this.href = canvas.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream');
            // this.download = "canvas-image.png";
        });


    });


});

function saveAs(uri, filename) {

    var link = document.createElement('a');

    if (typeof link.download === 'string') {

        link.href = uri;
        link.download = filename;

        //Firefox requires the link to be in the body
        document.body.appendChild(link);

        //simulate click
        link.click();

        //remove the link when done
        document.body.removeChild(link);

    } else {

        window.open(uri);

    }
}


