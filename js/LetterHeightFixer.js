function FixHeight(){
	if(document.getElementById("WelcomeLetter").clientHeight > (document.getElementsByClassName("LetterSection")[0].clientHeight-240)){
		document.getElementsByClassName("LetterSection")[0].style.height = document.getElementById("WelcomeLetter").clientHeight;
	}
	document.getElementById("munbollImg").style.height = document.getElementById("WelcomeLetter").clientHeight;
}
window.onload=FixHeight;
window.onresize=FixHeight;
document.onresize=FixHeight;