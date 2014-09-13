$(function() {
	/*** Obtener con jQuery las cajas a manipular ***/
	var previews = $("#contenedor-preview img");
	var principal = $("#contenedor-imagen img");
	var descripcion_imagen = $("#descripcion-imagen");
	var contenedor = $("#contenedor-imagen");
	/** Escucho el evento click sobre las imagenes de
	 *preview  **/
	previews.click(function(evento) {

		var imagen_clikeada = $(evento.target);
		var ruta = imagen_clikeada.data("src-principal");
		var descripcion = imagen_clikeada.data("descripcion");

		//1.-oculta el contendor
		//2.-cambia la imagen y la descripcion
		//3.-muestra el contenedor
		contenedor.fadeToggle("slow", function() {
			//cambiar el src de principal
			principal.attr("src", ruta);
			//cambiar el html de descripcion
			descripcion_imagen.html(descripcion);
			//muestra de nuevo el contenedor
			contenedor.fadeToggle("slow");
		});
	});
});
