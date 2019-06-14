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

    if(frontPage == true) {

        document.querySelector("#start").classList.add("startAni");

        } else {
            startSide();
        }


//document.querySelector("#start").classList.add("startAni");
//
//
//  document.querySelector("#start").addEventListener("animationend", startSide);


}


function startSide() {
    console.log("startSide");


       document.querySelector("#menuknap").addEventListener("click", toggleMenu);

//      document.querySelector(".pil_right").addEventListener("click", scrollTo);
//    document.querySelector(".pil_left").addEventListener("click", scrollTo);

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

}
