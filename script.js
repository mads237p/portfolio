window.addEventListener("load", sidenVises);



var elmnt1 = document.getElementById("slide-1");
var elmnt2 = document.getElementById("slide-2");
var elmnt3 = document.getElementById("slide-3");
var elmnt4 = document.getElementById("slide-4");
var page;

document.querySelector("#start").classList.add("startAni");
document.querySelector("#forside").classList.add("fadeIn");

function sidenVises() {
    console.log("sidenVises");

    let frontPage = document.getElementById("start");

    if (frontPage == true) {

        document.querySelector("#start").classList.add("startAni");

    } else {
        startSide();
    }



}


function startSide() {
    console.log("startSide");


    document.querySelector("#menuknap").addEventListener("click", toggleMenu);

    document.querySelector(".logo1").addEventListener("click", fadeOut);

}


function scrollTo() {
    console.log("scroll");

    document.querySelector(".pil_right").removeEventListener("click", scrollTo);
    document.querySelector(".pil_left").removeEventListener("click", scrollTo);

    document.getElementsById("front").classList.add("page_slide_right");

}

function toggleMenu() {
    console.log("toggleMenu");

    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.getElementById("menuknap").src = "assets/LOGOS/menu_dots.png";
    } else {
        document.getElementById("menuknap").src = "assets/No.svg";

    }
}

function fadeOut() {
    console.log("fadeOut");

    document.querySelector("#slide-3").classList.add("fadeOut");

    document.querySelector("#slide-3").addEventListener("animationend", openSite);

}

function openSite() {
    console.log("openSite");

    location.href = "#slide-5";
}
