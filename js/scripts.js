// some more js magic will be here soon!
$(document).ready(function() {

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(function(position) {

      // customize url to call api
      var url = 'https://api.wunderground.com/api/4895338969fb790e/geolookup/conditions/q/autoip.json';

      $.getJSON(url, function(json) {

        // feed city, state and country elements with api response data
        $('#weatherCity').html(json.current_observation.display_location.city);
        $('#weatherState').html(json.current_observation.display_location.state);
        $('#weatherCountry').html(json.current_observation.display_location.country);

        // convert temperature from default json data kelvin value to be displayed as celsius
        var celsiusTemp = json.current_observation.temp_c;

        // display weather temperature
        $('#weatherTemperature').text(celsiusTemp + ' ºC');

        // display weather icon
        // var weatherIcon = json.weather[0].icon;
        // var weatherIconURL = 'http://openweathermap.org/img/w/' + weatherIcon + '.png';
        // $('#weatherTemperatureIcon').html('<img src=' + weatherIconURL + '>');

        // display weather description
        //$('#weatherDescription').html(json.weather[0].description);

        // display weather wind speed
        $('#weatherWindSpeed').html(json.wind_kph + ' m/s');

        // change to imperial unit values, currently only changes to fahrenheit temperature
        $('#convertImperial').on('click', function () {
          let fahrenTemp = ((9 * celsiusTemp) / 5) + 32;
          $('#weatherTemperature').text(fahrenTemp.toFixed(1) + ' ºF');
        });

        // change to metric unit values, currently to default celsius temperature
        $('#convertMetric').on('click', function () {
          $('#weatherTemperature').text(celsiusTemp + ' ºC');
        });

      });
    });
  }
});
