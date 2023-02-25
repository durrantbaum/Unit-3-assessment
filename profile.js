function getColor(evt) {
	evt.preventDefault();
	
	alert('My favorite color is Purple!')
}

function getPlace(evt) {
	evt.preventDefault();
	
	alert('My favorite place is home!')
}
function getRitual(evt) {
	evt.preventDefault();
	
	alert('My favorite ritual is doing my skin care!')
}


let button = document.getElementById("color")

button.addEventListener("click", getColor);

let button2 = document.getElementById("place")

button2.addEventListener("click", getPlace);

let button3 = document.getElementById("ritual")

button3.addEventListener("click", getRitual);
