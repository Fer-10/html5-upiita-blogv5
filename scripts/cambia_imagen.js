$(function() {
	//obtener las cajas a manipular
	var mono = $("#imagen-mono");
	mono.mouseover(function() {
		//1.-Ocultar la imagen
		//un callback se ejecuta hasta que termino
		//la animacion
		mono.fadeOut("slow", function() {
			//2.-Cambiar la imagen
			//cambiar la imagen
			mono.attr("src", "estaticos/imagenes/ceo/otro_mono.jpg");
			//3.-Muestra la imagen
			mono.fadeIn("slow");
		});
	});

	mono.mouseout(function() {
		mono.attr("src", "estaticos/imagenes/ceo/mono.jpg");
	});
});
