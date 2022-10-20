const button = document.querySelector('.generator-button');
const passwords = document.getElementsByClassName('password-field');
const numCharacters = 15;
const copyIconEl =document.querySelector(".fa-copy");

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

copyIconEl.addEventListener("click",()=>{
	copypassword();
})
function generate() {
	for (let i = 0; i < passwords.length; i++) {
	let pass = '';
		for (let j = 0; j < numCharacters; j++) {
			pass += characters[Math.floor(Math.random() * characters.length)];
		}
		passwords[i].textContent = pass;
	}
}


function copypassword() {
	inputEl.select();
	inputEl.setSelectionRange(0, 9999);
	navigator.clipboard.writeText(inputEl.value);
}



