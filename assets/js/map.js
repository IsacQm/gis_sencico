var map = L.map('map', {
    center: [-17.988944724912212, -70.23903380205046],
    zoom: 17,
    minZoom: 10,
    maxZoom: 30,
    maxBounds: [[-17.9911145788, -70.2421670666], [-17.9870124252, -70.2369528522]]
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var POLLLL = L.tileLayer.wms("http://localhost:8080/geoserver/web_sencico/wms?", {
	   layers: "web_sencico:POLLLL", //gisweb:lotes
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
POLLLL.addTo(map);

var POLLLL_TEXTO = L.tileLayer.wms("http://localhost:8080/geoserver/web_sencico/wms?", {
	   layers: "web_sencico:POLLLL_TEXTO", //gisweb:Codigo de Lotes
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
POLLLL_TEXTO.addTo(map);

var baseMaps = {
    "OSM": basemapOSM
};

var overlayMaps = {
    "Lotes": POLLLL,
    "Codigo de lotes":POLLLL_TEXTO
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);

L.control.scale({
    imperial: false
  }).addTo(map);
  
