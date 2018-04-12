var button = document.querySelector("button");
var para = document.querySelector("p");

button.addEventListener("click", function(){
    para.textContent = "Someone clicked the button";
});

button.addEventListener("click", function () {
    button.style.backgroundColor = "red"
});
