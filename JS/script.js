
 function initMap() {
 	const myLatlng= {lat:42.327498, lng: -88.171841};
	const map = new google.maps.Map(document.getElementById("map"), {
  	zoom: 20,
  	center: myLatlng,
});

    const carMarker = new google.maps.Marker({
    position: myLatlng,
    map,
    title: "Volo Museum",
    icon: "photos/impala.png"
  });

const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Volo</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Volo</b>Established in 1960 by the Grams family, the Volo Auto Museum is an automobile museum and collector car dealer in the Chicago suburb of Volo, Illinois, USA. " + +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  const marker = new google.maps.Marker({
    position: myLatlng,
    map,
    title: "Volo Museum",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
}
window.initMap = initMap;