function process(){
    var body = document.getElementById("body");
    var form = document.getElementById("form");

   HTMLFormElement.prototype.submit.call(form); //  need to submit form 

    body.innerHTML = "<h1>Loading.....</h1>"

}

