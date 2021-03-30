var generatorColor = function () {
    var red = Math.random() * 255;
    var green = Math.random() * 255;
    var blue = Math.random() * 255;
    displayOutputHTML(red, green, blue);
};
var displayOutputHTML = function (red, green, blue) {
    document.body.style.background = "rgba(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("display-color").innerHTML = "rgba(" + red + ", " + green + ", " + blue + ")";
};
