function openerFunction(x){
	if (document.getElementById(x).style.visibility == 'hidden')
	{
		document.getElementById(x).style.display='block';
		setTimeout(function () {document.getElementById(x).style.visibility = 'visible';
		document.getElementById(x).style.transform='scaleY(1)';
		document.getElementById(x).style.height='auto';
		document.getElementById(x).style.display='block';}, 50);
		
	} 
	else{
		document.getElementById(x).style.height='0px';
		document.getElementById(x).style.transform='scaleY(0)';
		document.getElementById(x).style.visibility = 'hidden';
		setTimeout(() => document.getElementById(x).style.display='none',50);
	}
}
function NarrowNavbarDrawerOpener()
{
	if(document.getElementById('smallMenues').style.visibility == 'hidden') {
			document.getElementById('smallMenues').style.visibility='visible';
			document.getElementById('smallMenues').style.width='40%';document.getElementById('NarrowButton').style.color='white';
			document.getElementById('DrawerFiller').style.display="block";
	}
	else{
		document.getElementById('smallMenues').style.visibility='hidden';
		document.getElementById('smallMenues').style.width='0%';document.getElementById('NarrowButton').style.color='';
		document.getElementById('DrawerFiller').style.display="none";
	}
}