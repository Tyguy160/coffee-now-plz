import React from "react";

// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}

const Map = () => {
  const api_key = "AIzaSyBPhIO9CEkI_4eNQWHMJlFHGwE-4KKDUmo";
  return (
    <div>
      <script
        async
        defer
        src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
      />
      <div id="map">Map</div>
    </div>
  );
};

export default Map;

<script />;
