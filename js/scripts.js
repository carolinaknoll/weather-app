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

        // convert temperature from default json data kelvin value to be displayed as celsius
        var celsiusTemp = (json.main.temp - 273.15).toFixed(1);

        // display weather temperature
        $("#weatherTemperature").text(celsiusTemp + ' ºC');

        // display weather icon
        var weatherIcon = json.weather[0].icon;
        var weatherIconURL = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
        $("#weatherTemperatureIcon").html("<img src=" + weatherIconURL + ">");

        // display weather description
        $("#weatherDescription").html(json.weather[0].description);

        // display weather wind speed
        $("#weatherWindSpeed").html(json.wind.speed + " m/s");

        // change to imperial unit values, currently only to fahrenheit temperature
        $('#convertImperial').on('click', function () {
          let fahrenTemp = ((9 * celsiusTemp) / 5) + 32;
          $("#weatherTemperature").text(fahrenTemp.toFixed(1) + ' ºF');
        });

        // change to metric unit values, currently to default celsius temperature
        $('#convertMetric').on('click', function () {
          $("#weatherTemperature").text(celsiusTemp + ' ºC');
        });

      });
    });
  }
});
