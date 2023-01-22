
function checkWaterQuality() {
  navigator.geolocation.getCurrentPosition(function(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    // make a request to an external API to get water quality information
    fetch(`https://water-quality-api.com/location?lat=${lat}&lng=${lng}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // do something with the water quality data, such as displaying it on the page
      })
      .catch(error => console.error(error));
  });
}
