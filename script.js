window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("sidenVises");

    //document.querySelector("#start").classList.add("start_ani");

    //    document.querySelector("#pil_right").addEventListener("click", slide);

    document.querySelector(".menuknap").addEventListener("click", toggleMenu);

}

//function slide() {
//    console.log("slide");
//
//    //    document.querySelector("#forside").classList.add("slide");
//
//}

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.getElementsByClassName("menuknap").src = "assets/menu_dots";
    } else {
        document.getElementsByClassName("menuknap").src = "assets/No.svg";
        document.getElementsByClassName("cv").classlist = "hidden";
        document.getElementsByClassName("forside").classlist = "hidden";
    }
}
