function FixHeight(){
	document.getElementsByClassName("CommitteeSection")[0].height = document.getElementsByClassName("CommitteeText")[0].height
}
window.onload=FixHeight;
window.onresize=FixHeight;