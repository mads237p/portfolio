window.addEventListener("load", sidenVises);


var elmnt1 = document.getElementById("slide-1");
var elmnt2 = document.getElementById("res");
var elmnt3 = document.getElementById("animation");
var elmnt4 = document.getElementById("redesign");
var elmnt5 = document.getElementById("experience");
var rightPil = document.querySelector("#pil1");
var leftPil = document.querySelector(".pil_left");

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

    rightPil.addEventListener("click", scrollTo);

    elmnt2.addEventListener("click", resFadeOut);

    elmnt3.addEventListener("click", aniFadeOut);

    elmnt4.addEventListener("click", reDesignFadeOut);

    elmnt5.addEventListener("click", uxFadeOut);


}


function scrollTo() {
    console.log("scroll");

    location.href = "#slide-2";
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

function resFadeOut() {
    console.log("fadeOut");

    document.querySelector("#slide-2").classList.add("fadeOut");

    document.querySelector("#slide-2").addEventListener("animationend", responsiveSite);


}

function aniFadeOut() {
    console.log("aniFadeOut");

    document.querySelector("#slide-3").classList.add("fadeOut");

    document.querySelector("#slide-3").addEventListener("animationend", animationsSite);

}

function reDesignFadeOut() {
    console.log("fadeOut");

    document.querySelector("#slide-4").classList.add("fadeOut");

    document.querySelector("#slide-4").addEventListener("animationend", reDesignSite);


}

function uxFadeOut() {
    console.log("fadeOut");

    document.querySelector("#slide-5").classList.add("fadeOut");

    document.querySelector("#slide-5").addEventListener("animationend", uxSite);

}

function animationsSite() {
    console.log("animationsSite");

    location.href = "animation.html";

}

function responsiveSite() {
    console.log("responsiveSite");

    location.href = "responsive.html";

}

function reDesignSite() {
    console.log("reDesignSite");

    location.href = "redesign.html";

}

function uxSite() {
    console.log("ux");

    location.href = "ux.html";

}


