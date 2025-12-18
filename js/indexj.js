    function menushow() {
        var sidenav = document.querySelector(".side-nav")
        sidenav.style.left = "0"

    }

    function menuhide() {
        var sidenav = document.querySelector(".side-nav")
        sidenav.style.left = "-50%"
    }

    function tryclick() {
        var trynow = document.getElementsByClassName("navbutt")
        window.location.href = "collections.html";
    }

    function joined() {

        event.stopPropagation();

        var popover = document.querySelector(".popover");
        var poptext = document.querySelector(".poptext");
        var joinbutt = document.getElementsByClassName(".joinbutt")
        event.preventDefault()
        popover.style.display = "block";
        poptext.style.display = "block";

        document.onkeydown = closePopup;
        document.onclick = closePopup;

    }

    function closePopup() {
        var popover = document.querySelector(".popover");
        var poptext = document.querySelector(".poptext");

        popover.style.display = "none";
        poptext.style.display = "none";
        document.onkeydown = null;
        document.onclick = null;
    }

    function copy(event) {
        event.preventDefault()
        var popover = document.querySelector(".popover");
        var poptext = document.querySelector(".poptext");
        var searchcop = document.getElementById("searchid");

        var div = document.createElement("div");


        div.innerHTML = `<h3>${searchcop.value}</h3>`
        poptext.append(div)
    }
