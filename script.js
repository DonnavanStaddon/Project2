function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 53.31964760729454, lng: -3.8168972809495534 },
        zoom: 18,
        mapId: 'ID9b4bf00fc4791563'
    });

    new google.maps.Marker({
        position: { lat: 53.31964760729454, lng: -3.8168972809495534 },
        map,
        title: "VADCode Website Development",
        icon: {
            url: "googlemapsmarker.svg",
            scaledSize: new google.maps.Size(38, 31)
        },
        animation: google.maps.Animation.DROP
      });
}