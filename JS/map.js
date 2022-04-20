function initMap(){
	const myLatLng= {lat:42.327498, lng:-88.171841};
	const map = new google.maps.Map(document.getElementById("map"), {
  	zoom: 20,
  	center: myLatLng,
});

    new google.maps.Marker({
    position: myLatLng,
    map,
    title: "VOLO Museum",
    animation: google.maps.Animation.DROP,
    icon: './photos/impala.png'
  });

  var infowindow = new google.maps.InfoWindow({
    content: "<h1>VOLO</h1><p>Established in 1960 by the Grams family, the Volo Auto Museum is an automobile museum and collector car dealer in the Chicago suburb of Volo, Illinois, USA<p>"
  });

  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(canvas, marker);
  });
}
window.initMap = initMap;