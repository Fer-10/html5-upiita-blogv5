$( function(){
	/*** Obtener con jQuery las cajas a manipular ***/
	var previews = $( "#contenedor-preview img" );
	var principal = $( "#contenedor-imagen img" );
	var descripcion_imagen = $( "#descripcion-imagen" );
	
	/** Escucho el evento click sobre las imagenes de 
	 *preview  **/
	previews.click( function( evento ){
		var imagen_clikeada = $( evento.target );
		var ruta = imagen_clikeada.data("src-principal");
		var descripcion = imagen_clikeada.data("descripcion");		
		//cambiar el src de principal
		
		//cambiar el html de descripcion
		
	} );
	
} );
