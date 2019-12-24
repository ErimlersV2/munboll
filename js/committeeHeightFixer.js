function FixHeight(){
	document.getElementsByClassName("CommitteeSection")[0].style.height = document.getElementsByClassName("CommitteeText")[0].clientHeight;
}
window.onload=FixHeight;
window.onresize=FixHeight;