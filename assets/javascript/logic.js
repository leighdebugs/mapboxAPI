// var mapboxgl = require('https://api.tiles.mapbox.com/mapbox-gl-js/v1.7.0/mapbox-gl.js'); 

mapboxgl.accessToken = 'pk.eyJ1IjoibGVpZ2hkZWJ1Z3MiLCJhIjoiY2s2dWVsbnk2MDk0cDNlbHQ3b2Fmcmo1MCJ9.JH5D-pMYDuUZ6ebmHVpF8A'


var map = new mapboxgl.Map({
  container: "map", // HTML container id
  style: 'mapbox://styles/leighdebugs/ck6ufl1dr0ugn1io0rbd1es8c', // style URL
  center: [-21.9270884, 64.1436456], // starting position as [lng, lat]
  zoom: 13
});

var marker = new mapboxgl.Marker()
.setLngLat([-21.9270884, 64.1436456])
.addTo(map);