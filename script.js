//Search Function

$(function () {
  // values used to configure open weather api requests
  var openWeatherMapAppId = "e811c78dba75cfd7ce373e0d9345ec47"; 
  var openWeatherMapApiUrl = "http://api.openweathermap.org/data/2.5/";

  $("#search-button").on("click", function () {
    var searchValue = $("#search-value").val();

    // clear input box
    $("#search-value").val("");

    searchWeather(searchValue);
  });

  $(".history").on("click", "li", function () {
    searchWeather($(this).text());
  });


  
});

