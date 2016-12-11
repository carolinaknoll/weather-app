// some more js magic will be here soon!
$(document).ready(function() {

  var latitude;
  var longitude;

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(function(position) {

      latitude = position.coords.latitude;
      longitude = position.coords.longitude;

      // customize url to call api
      var url = "http://api.openweathermap.org/data/2.5/weather?" + "lat=" + latitude + "&lon=" + longitude + "&APPID=17e6474fa83a50953e9a59e8a68611bd";

      $.getJSON(url, function(json) {

        // display city and country
        $("#weatherCity").html(json.name);
        $("#weatherCountry").html(json.sys.country);

        // convert temperature from kelvin to celsius
        var temp = (json.main.temp - 273.15).toFixed(1) + " &deg;C";

        // weather temperature
        $("#weatherTemperature").html(temp);

        // weather icon
        var weatherIcon = json.weather[0].icon;
        var weatherIconURL = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
        $("#weatherTemperatureIcon").html("<img src=" + weatherIconURL + ">");

        // weather description
        $("#weatherDescription").html(json.weather[0].description);

        // weather wind speed
        $("#weatherWindSpeed").html(json.wind.speed + " m/s");

      });
    });
  }
});
