let request = new XMLHttpRequest();
const currentDate = new Date().toDateString();
const x = document.getElementById("demo");
function getLocation() {
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
  console.log(position);
  request.open("Get", "https://api.openweathermap.org/data/2.5/weather?lat=7&lon=7&appid=8ff0c232129b8022b6c24f3aee2102b5");
  console.log(request);
  console.log(request.status);
  request.open("Get", "https://api.openweathermap.org/data/2.5/weather?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&appid=8ff0c232129b8022b6c24f3aee2102b5");
  console.log(request);
  request.open("Get", "https://api.goperigon.com/v1/all?apiKey=API_KEY&maxDistance=10&lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&sortBy=date&from=2023-03-01");
  console.log(request.status);
}
  var map = L.map('map').setView([0, 0], 13);

  // Add a tile layer to the map
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Add a marker for the user's location
  var marker;

  // Get the user's location using the Geolocation API
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;

      // Update the map view and add a marker
      map.setView([lat, lon], 13);
      if (marker) {
        marker.setLatLng([lat, lon]);
      } else {
        marker = L.marker([lat, lon]).addTo(map);
      }
    }, function (error) {
      console.error('Error getting user location:', error.message);
    });
  } else {
    console.error('Geolocation is not supported by your browser');
  }
  const apiKey = 'AKIAIPNSD2N5FJC5CMSQ';
  
  // Example request to get train information
  const requestUrl = `https://api.rtt.io/api/v1/json/search/${encodeURIComponent('BTN')}`;

  fetch(requestUrl, {
    headers: {
      'Authorization': `Bearer ${apiKey}`
    }
  })
  .then(response => response.json())
  .then(data => {
    // Process the data here
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching train information:', error);
  });
