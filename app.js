var generatorColor = function () {
    var red = getRandomNumber();
    var green = getRandomNumber();
    var blue = getRandomNumber();
    document.body.style.background = "rgba(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("display-color").innerHTML = "rgba(" + red + ", " + green + ", " + blue + ")";
};
var getRandomNumber = function () {
    return Math.random() * 255;
};
