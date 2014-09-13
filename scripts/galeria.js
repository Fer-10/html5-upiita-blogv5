$( function(){
	/*** Obtener con jQuery las cajas a manipular ***/
	var previews = $( "#contenedor-preview img" );
	var principal = $( "#contenedor-imagen img" );
	var descripcion = $( "#descripcion-imagen" );
	
	/** Escucho el evento click sobre las imagenes de 
	 *preview  **/
	previews.click( function( evento ){
		var imagen_clikeada = $( evento.target );
		var ruta = imagen_clikeada.attr("src");		
		alert( ruta );
	} );
	
} );
