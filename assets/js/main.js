function mostrarPestana(n){
		var pestanas = document.getElementsByClassName("pestana");
		var cabecera = document.getElementsByClassName("cabecera");
		for(i = 0; i<pestanas.length; i++){
			if(pestanas[i].className.includes("p-activa")){
				pestanas[i].className = pestanas[i].className.replace("p-activa", "");
				cabecera[i].className = cabecera[i].className.replace("c-activa", "");
				break;
			}
		}
		pestanas[n].className += " p-activa";
		cabecera[n].className += " c-activa";
	}
function mostrarVentana(){
			var ventana = document.getElementsByClassName("cssToolTip");
			ventana[0].style.display = "block";
}
function cerrar(){
			var ventana = document.getElementsByClassName("cssToolTip");
			ventana[0].style.display = "none";
}
