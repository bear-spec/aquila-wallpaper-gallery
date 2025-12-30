function menushow() {
    document.querySelector(".side-nav").style.left = "0";
}

function menuhide() {
    document.querySelector(".side-nav").style.left = "-70%";
}

function searchelmt(event) {
    var prodcont = document.getElementById("product");
    var enteredval = event.target.value.toUpperCase();
    var prodlist = prodcont.querySelectorAll(".product-box");

    for (var i = 0; i < prodlist.length; i++) {
        var prodname = prodlist[i].querySelector("p").textContent.toUpperCase();
        prodlist[i].style.display = prodname.includes(enteredval) ? "block" : "none";
    }
}

document.addEventListener("click", function (e) {
    var sidenav = document.querySelector(".side-nav");
    var toggle = document.querySelector(".nav-toggle");

    if (
        sidenav.style.left === "0px" &&
        !sidenav.contains(e.target) &&
        !toggle.contains(e.target)
    ) {
        sidenav.style.left = "-70%";
    }
});
