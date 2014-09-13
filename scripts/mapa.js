$( function(){
	//obtener la caj para pintar el mapa
	var mapa = $("#mapa");
	//obtiene la posicion
	navigator.geolocation.getCurrentPosition( function( posicion ){
		var longitud = posicion.coords.longitude;
		var latitud = posicion.coords.latitude;
		//alert("latitud es " + latitud +" longitud es "+longitud);
		mapa.goMap( {
			markers: [ {
				latitude: latitud,
				longitude: longitud
			} ],
			zoom: 17
		} );
	} );
	
} );
