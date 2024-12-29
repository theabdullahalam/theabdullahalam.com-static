function toggleLightMode(){
    var element = document.body;
    element.classList.toggle("light-mode");

    localStorage.setItem("light-mode", element.classList.contains("light-mode"));
}

function main(){

    if (localStorage.getItem("light-mode") == "true") {
        var element = document.body;
        element.classList.add("light-mode");
    }

    var element = document.getElementById("light-mode-toggle");
    element.addEventListener("click", toggleLightMode);
}

document.addEventListener("DOMContentLoaded", main)