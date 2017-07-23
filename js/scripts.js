$(document).ready(function() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {

      var url = 'https://api.wunderground.com/api/4895338969fb790e/geolookup/conditions/q/autoip.json';
      $.getJSON(url, function(json) {

        console.log('json.current_observation', json.current_observation);

        // feed page elements with the returned json data
        $('#city').html(`${json.current_observation.display_location.city}`);
        $('#state').html(`${json.current_observation.display_location.state},`);
        $('#country').html(`${json.current_observation.display_location.state_name}`);

        $('#temperature').text(`${json.current_observation.temp_c} ºC`);
        $('#windSpeed').html(`${json.current_observation.wind_kph} k/h`);
        $('#description').html(`${json.current_observation.weather}`);
        $('#observationTime').html(`${json.current_observation.observation_time}`);

        // change to imperial unit values (fahrenheit / mph)
        $('#convertImperial').on('click', function () {
          $('#temperature').text(`${json.current_observation.temp_f} ºF`);
          $('#windSpeed').html(`${json.current_observation.wind_mph} m/h`);
        });

        // change to metric unit values (celsius / kph)
        $('#convertMetric').on('click', function () {
          $('#temperature').text(`${json.current_observation.temp_c} ºC`);
          $('#windSpeed').html(`${json.current_observation.wind_kph} k/h`);
        });

      });
    });
  }
});
