alert("Hello from Retrium fun!");

var elements = document.getElementsByClassName("noselect");

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    element.style.color = "rgb(255,255,255)";
    element.style.textShadow = "";
}