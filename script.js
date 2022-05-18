const open_close = document.getElementById("open_close")
const menu = document.querySelector(".links")

open_close.addEventListener("click", function() {
    if(open_close.classList.contains("open")){
        open_close.src = "images/icon-close.svg"
        open_close.classList.remove("open")
        open_close.classList.add("close")
     } else if(open_close.classList.contains("close")){
        open_close.src = "images/icon-hamburger.svg"
        open_close.classList.remove("close")
        open_close.classList.add("open")
     }

     if(menu.classList.contains("hide")) {
        menu.classList.remove("hide")
     } else{
        menu.classList.add("hide")
     }
})