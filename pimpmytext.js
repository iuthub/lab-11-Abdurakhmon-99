window.onload = function() {
	document.getElementById("pimp").onclick = pimping;
	document.getElementById("bling").onchange = blinging;
	document.getElementById("snoop").onclick = snooping;
};
function pimping() {
	var text = document.getElementById("text");
	text.style.fontSize = "24pt"; 
}
function blinging() {
	var text = document.getElementById("text");
	text.style.fontWeight = "bold";
	text.style.textDecoration = "underline blink";
	text.style.color = "green"; 
	text.style.fontFamily = "Calibri";
	text.style.textAlign = "center";
}
function snooping() {
	var text = document.getElementById("text");
	var array = text.value.split(".");
	for (var i = 0; i < array.length; i++) {
		array[i] = array[i].toUpperCase();
	}
	text.value = array.join("-izzle.");
}
