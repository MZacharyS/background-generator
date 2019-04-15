var css = document.querySelector("h3");
var color1 = document.querySelector(".color1"); /*we select for class the same way we do in css*/
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient"); /*selects body tag to change background*/


/*input is an event that you can listen for and will change things based on input*/


function setGradient() {
	body.style.background = "linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";"; /*This adds the CSS gradient to the webpage*/
}


color1.addEventListener("input", setGradient); /*sets color gradient from color 1 input */

color2.addEventListener("input", setGradient); /*remember do not call function (add the ()).
 Functiongets called by the input. */