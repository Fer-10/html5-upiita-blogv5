$(function() {
	//1.-obtener el enlace
	var enlace = $("#flota a");
	//2.- escuchar el click sobre el enlace
	var imagenes_sociales = $("#imagenes-sociales");
	enlace.click(function() {
		//3.- ocultar el contenedor de imagenes (display: none)
		if( imagenes_sociales.css("display") === "block" ) {			
			imagenes_sociales.css("display", "none");
			enlace.html("abrir");
			
		} else {
			imagenes_sociales.css("display", "block");
			enlace.html("cerrar");
		}

		return false;
	});

	//hacer que al dar click si esta oculto se muestre y
	//el enlace diga cerrar
	//hacer que al dar click si esta mostrado se oculte y
	//el enlace diga abrir (display: block)
});
