    function menushow() {
        var sidenav = document.querySelector(".side-nav")
        sidenav.style.left = "0"

    }

    function menuhide() {
        var sidenav = document.querySelector(".side-nav")
        sidenav.style.left = "-50%"
    }
    function searchelmt(event){
    var prodcont=document.getElementById("product")
    var search=document.getElementById("search")
    var prodlist=prodcont.querySelectorAll("div")

    var enteredval=event.target.value.toUpperCase()

    for(var count=0;count<prodlist.length;count=count+1)
    {
        var prodname=prodlist[count].querySelector("p").textContent

        if(prodname.toUpperCase().indexOf(enteredval)<0)
    {
        prodlist[count].style.display="none"
    }
    else{
        prodlist[count].style.display="block"
    }
    }
    }