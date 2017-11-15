var submenu= document.getElementsByClassName('subMenu');
//llamamos las clases de los items

//iteramos por los elementos
for (var i = 0; i < submenu.length; i++) {
	submenu[i].addEventListener('click',showMenu)
}

function showMenu(){
	var listmenu=this.getElementsByClassName('itemList')[0];
	console.log(listmenu);
	if(listmenu.classList.contains('hide')){
			listmenu.classList.remove('hide');
			listmenu.classList.add('show');
	} else {
		listmenu.classList.remove('show');
		listmenu.classList.add('hide');
	}

	//this es el elemento al que le estoy haciendo click


}