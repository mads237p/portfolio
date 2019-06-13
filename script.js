window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("sidenVises");

document.querySelector("#start").classList.add("start_ani");

document.querySelector("#pil_right").addEventListener("click", slide);

document.querySelector("#menu_knap").addEventListener("click", menu);

}

function slide () {
    console.log("slide");

//    document.querySelector("#forside").classList.add("slide");

}

function menu() {
    console.log("menu");

  document.querySelector("#menu").classList.remove("hidden");

}




