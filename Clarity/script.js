function f(){
}

//For the breaking of lines, so that they can repeat
var breakItem = document.getElementById("break");
breakItem.innerHTML = "<br>".repeat(10);

//to help get input form contact
function getTextboxInput(idOfTextbox) {
	return document.getElementById(idOfTextbox).value;
}

//function isItFilled(idOfRadioButton) {
//	return document.getElementById(idOfRadioButton).checked;
//}
