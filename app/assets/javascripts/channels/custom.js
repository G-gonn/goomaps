var map;
      
function initMap() {
        
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 48.8167, lng: 2.3833},
    zoom: 8
});
}