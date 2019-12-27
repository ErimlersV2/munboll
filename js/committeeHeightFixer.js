function FixHeight(){
	document.getElementsByClassName("CommitteeSection")[0].style.height = document.getElementsByClassName("CommitteeText")[0].clientHeight+300;
	if(document.getElementsByClassName("CommitteeText")[0].clientHeight < window.innerHeight-434){
		document.getElementsByClassName("CommitteeSection") = window.innerHeight-434
	}
}
window.onload=FixHeight;
window.onresize=FixHeight;