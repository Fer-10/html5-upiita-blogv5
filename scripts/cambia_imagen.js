$( function(){
	//obtener las cajas a manipular
	var mono = $("#imagen-mono");
	mono.mouseover( function(){
		//cambiar la imagen
		mono.attr("src", "estaticos/imagenes/ceo/otro_mono.jpg");
	} );
	
	mono.mouseout( function(){
		mono.attr("src", "estaticos/imagenes/ceo/mono.jpg");
	} );
} );
