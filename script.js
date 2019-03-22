var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button=document.getElementById("random");




setGradient();

function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}



color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


function randomColor(){
var randomNumber1 = Math.random();
var randomNumberArray1 = randomNumber1 * 255;
var randomIndex1 = Math.round(randomNumberArray1);
return randomIndex1;
}

function newCss(){
var1=randomColor();
var2=randomColor();
var3=randomColor();
var4=randomColor();
var5=randomColor();
var6=randomColor();


var rgb1="rgb("+var1+", " +var2+ ", "+var3+")";
var rgb2="rgb("+var4+", " +var5+ ", "+var6+")";


var rgbToHex = function (rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;

};
var fullColorHex = function(r,g,b) {
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return "#" + red+green+blue;
};

color1.value=fullColorHex(var1,var2,var3);
color2.value=fullColorHex(var4,var5,var6);

setGradient();

};



button.addEventListener("click", newCss);


// when the page loads identify the color in the inputs color1 and color 2
