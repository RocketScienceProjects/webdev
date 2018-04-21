

var button = document.querySelector("button");
var bg = document.querySelector("body");

var changeColor = function () {
    bg.classList.toggle("colors")
}


button.addEventListener("click", changeColor)



