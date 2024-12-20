function toggleLightMode(){
    var element = document.body;
    element.classList.toggle("light-mode");
}

function main(){
    var element = document.getElementById("light-mode-toggle");
    element.addEventListener("click", toggleLightMode);
}

document.addEventListener("DOMContentLoaded", main)