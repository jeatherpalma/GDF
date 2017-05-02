var map;
var marker;
function initMap(){
	var location = {lat:24.0303828, lng: -104.6813051};

	map = new google.maps.Map(document.getElementById('mapa'),{
		center: location,
		zoom: 19
	});
	marker = new google.maps.Marker({
		position: location,
		map: map,
		title:'Localizacion'
	});
	}
