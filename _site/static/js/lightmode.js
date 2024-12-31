function toggleLightMode(){
    // main body
    var element = document.body;
    element.classList.toggle("light-mode");

    localStorage.setItem("light-mode", element.classList.contains("light-mode"));
    // setiFrameLightMode(element.classList.contains("light-mode"));
}

function setiFrameLightMode(mode){
    if (mode) {
        window.CUSDIS.setTheme("light");
    } else {
        window.CUSDIS.setTheme("dark");
    }
}

function main(){

    // window.CUSDIS.setTheme("dark");

    if (localStorage.getItem("light-mode") == "true") {
        document.body.classList.add("light-mode");
        // window.CUSDIS.setTheme("light");
    }

    document.getElementById("light-mode-toggle").addEventListener("click", toggleLightMode);
}

document.addEventListener("DOMContentLoaded", main)