window.addEventListener("load", carregou);

function carregou(){
	document.querySelector("#carregando").style.display = "none";
	var botaoMenu = document.querySelector("#btn-menu");

	function menuMobile(){
		
		$(botaoMenu).find('span').classList.toggle("glyphicon-remove");
	}

	botaoMenu.addEventListener("click", menuMobile);

	if(window.innerWidth > 800){
		new WOW().init();
	}
}