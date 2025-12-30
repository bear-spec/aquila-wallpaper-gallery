function menushow() {
    document.querySelector(".side-nav").style.left = "0"
}

function menuhide() {
    document.querySelector(".side-nav").style.left = "-70%"
}

function searchelmt(event) {
    var prodcont = document.getElementById("product")
    var enteredval = event.target.value.toUpperCase()
    var prodlist = prodcont.querySelectorAll(".product-box")

    prodlist.forEach(function (item) {
        var prodname = item.querySelector("p").textContent.toUpperCase()
        item.style.display = prodname.includes(enteredval) ? "block" : "none"
    })
}
