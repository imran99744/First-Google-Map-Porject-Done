function initMap() {
    var Dhaka = {
        lat: 23.7937, 
        lng: 90.4066
  };
    map = new google.maps.Map(document.getElementById('map'), {
      center: Dhaka,
      zoom: 11,
      mapTypeId: 'roadmap',
     
    });
  }

 