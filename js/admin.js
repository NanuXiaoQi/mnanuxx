function displaySubMenu(li) {   //鼠标移入显示某div
	var subMenu = li.getElementsByTagName("ul")[0];
	subMenu.style.display = "block";
}

function hideSubMenu(li) {    //鼠标移出显示某div
	var subMenu = li.getElementsByTagName("ul")[0];
	subMenu.style.display = "none";
}

function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("ccover").style.display = "block";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("ccover").style.display = "none";
}
