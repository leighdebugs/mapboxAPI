// Set up access token
mapboxgl.accessToken = 'pk.eyJ1IjoibGVpZ2hkZWJ1Z3MiLCJhIjoiY2s2dWVsbnk2MDk0cDNlbHQ3b2Fmcmo1MCJ9.JH5D-pMYDuUZ6ebmHVpF8A'

// Initialize map
var map = new mapboxgl.Map({
	container: 'map', 
	style: 'mapbox://styles/mapbox/streets-v11', 
	center: [-122.396, 37.789], 
	zoom: 12,
});

// Create and add marker for inital search point
var marker = new mapboxgl.Marker() 
  	.setLngLat([-122.396, 37.789])
  	.addTo(map); 

// Initialize geocoder and access token
 var geocoder = new MapboxGeocoder({ 
	accessToken: mapboxgl.accessToken, 
	placeholder: 'Search San Francisco',
	mapboxgl: mapboxgl, 
	marker: false, 
	bbox: [-122.52840510440305,37.71576711980967,-122.35038150489999,37.80763219973382], 
	proximity: {
	longitude: -122.25948,
	latitude: 37.87221
	}
});

map.addControl(geocoder);

// Load map and create array for search result
map.on('load', function() {
	map.addSource('single-point', {
    	type: 'geojson',
    	data: {
      		type: 'FeatureCollection',
      		features: []
    	}
});

// Create layer for search result marker
map.addLayer({
	id: 'point',
  	source: 'single-point',
  	type: 'circle',
  	paint: {
    	'circle-radius': 10,
    	'circle-color': '#448ee4'
  	}
});


// Get result from geocoder and add marker to selected point
geocoder.on('result', function(e) {
    map.getSource('single-point').setData(e.result.geometry);
    console.log(e);
  });
});





