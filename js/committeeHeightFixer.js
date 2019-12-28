function FixHeight(){
	document.getElementsByClassName("CommitteeSection")[0].style.height = document.getElementsByClassName("CommitteeText")[0].clientHeight+300;
	if(document.getElementsByClassName("CommitteeText")[0].clientHeight < window.innerHeight-500){
		document.getElementsByClassName("CommitteeSection").style.height = window.innerHeight;
		document.getElementsByClassName("CommitteeText")[0].style.height = window.innerHeight;
		document.getElementsByClassName("CommitteeImage")[0].style.height = window.innerHeight;
	}
}
window.onload=FixHeight;
window.onresize=FixHeight;