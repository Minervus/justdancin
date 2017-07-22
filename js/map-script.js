'use strict';

// CHECK WINDOW RESIZE
var is_windowresize = false;
$(window).resize(function() {
  is_windowresize = true;
});

// INITIALIZE MAP
function initialize() {

  var coordCenter = new google.maps.LatLng(49.271827, -123.190424);
  var coordWedding = new google.maps.LatLng(49.271827, -123.190424);
  // var coordTea = new google.maps.LatLng(49.219996, -123.046207);

  // DEFINE MAP OPTIONS
  //=======================================================================================
  var mapOptions = {
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: coordCenter,
    panControl: true,
    zoomControl: true,
    mapTypeControl: true,
    streetViewControl: true,
    overviewMapControl: true,
  };

  // CREATE NEW MAP
  //=======================================================================================
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  // ADD NEW MARKER WITH LABEL
  //=======================================================================================
  var markerWedding = new MarkerWithLabel({
    position: coordWedding,
    draggable: false,
    raiseOnDrag: false,
    icon: ' ',
    map: map,
    labelContent: '<div class="de-icon circle medium-size" style="background-color:#fff; border:1px solid #f0394d"><i class="de-icon-heart" style="color:#f0394d"></i></div>',
    labelAnchor: new google.maps.Point(26, 26),
    labelClass: "labels" // the CSS class for the label
  });

  // var markerTea = new MarkerWithLabel({
  //   position: coordTea,
  //   draggable: false,
  //   raiseOnDrag: false,
  //   icon: ' ',
  //   map: map,
  //   labelContent: '<div class="de-icon circle small-size" style="background-color:#fff; border:1px solid #119E8A"><i class="de-icon-leaf" style="color:#119E8A"></i></div>',
  //   labelAnchor: new google.maps.Point(20, 26),
  //   labelClass: "labels" // the CSS class for the label
  // });

  // INFO WINDOWS
  //=======================================================================================
  var infoWedding = '<h4>Wedding Ceremony</h4><div>3875 Point Grey Road, Vancouver, BC V6R 1B3</div>';
  // var infoTea = '<div>TEA CEREMONY</div>';

  var infoWindowWedding = new google.maps.InfoWindow({
    content: infoWedding
  });

  // var infoWindowTea = new google.maps.InfoWindow({
  //   content: infoTea
  // });


  // OPEN INFO WINDOWS ON LOAD
  //=======================================================================================
  infoWindowWedding.open(map, markerWedding);
  // infoWindowTea.open(map, markerTea);

  // ON CLICK MARKER, OPEN INFO WINDOWS
  //=======================================================================================
  google.maps.event.addListener(markerWedding, 'click', function() {
    infoWindowWedding.open(map, infoWedding);
  });

  // google.maps.event.addListener(markerTea, 'click', function() {
  //   infoWindowTea.open(map, infoTea);
  // });

  //ON MARKER CLICK EVENTS
  //=======================================================================================
  // google.maps.event.addListener(markerWedding, 'click', function() {
  //   map.setZoom(11);
  //   map.setCenter(markerWedding.getPosition());
  //   infoWindowWedding.open(map, markerWedding);
  // });

  // google.maps.event.addListener(markerTea, 'click', function() {
  //   map.setZoom(11);
  //   map.setCenter(markerTea.getPosition());
  //   infoWindowTea.open(map, markerTea);
  // });

  // ON BOUND EVENTS AND WINDOW RESIZE
  //=======================================================================================
  google.maps.event.addListener(map, 'bounds_changed', function() {
    if (is_windowresize) {
      window.setTimeout(function() {
        map.panTo(coordWedding);
      }, 500);
    }
    is_windowresize = false;
  });

}

// LOAD GMAP
google.maps.event.addDomListener(window, 'load', initialize);
