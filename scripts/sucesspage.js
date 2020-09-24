//set interval e timeout
(function () {

    setInterval(function () {
        document.getElementById("bg").style.background = 'linear-gradient(180deg, #f83600 0%,#fe8c00 100%)'

    }, 1000);

    setInterval(function () {
        document.getElementById("bg").style.background = 'linear-gradient(180deg, #fe8c00 0%,#f83600 100%)'
    }, 2000);

    setTimeout(function () {
        this.location.href = "index.html"; 
    }, 6000); 

})();
