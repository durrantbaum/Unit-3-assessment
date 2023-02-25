console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted successfully!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


const catImage = document.getElementById('cat-image');
catImage.addEventListener('mouseover', giveCompliment);

function giveCompliment() {
	alert("You are looking purrfect today!");
}
