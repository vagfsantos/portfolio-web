window.addEventListener("load", carregou);

function carregou(){
	document.querySelector("#carregando").style.display = "none";
	new WOW().init();
}