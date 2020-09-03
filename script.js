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

  function makeRow(text) {
    var li = $("<li>")
      .addClass("list-group-item list-group-item-action")
      .text(text);
    $(".history").append(li);
  }

  function searchWeather(searchValue) {
    // build a url for the request
    var url =
      openWeatherMapApiUrl +
      "weather?q=" +
      searchValue +
      "&appid=" +
      openWeatherMapAppId +
      "&units=imperial";

    $.ajax({
      type: "GET",
      url: url,
      dataType: "json",
      success: function (data) {
        // history link for this search
        if (history.indexOf(searchValue) === -1) {
          history.push(searchValue);
          window.localStorage.setItem("history", JSON.stringify(history));

          makeRow(searchValue);
        }

        // clear any old content
        $("#today").empty();

        // create html content for current weather
        var title = $("<h3>")
          .addClass("card-title")
          .text(data.name + " (" + new Date().toLocaleDateString() + ")");
        var card = $("<div>").addClass("card");
        var wind = $("<p>")
          .addClass("card-text")
          .text("Wind Speed: " + data.wind.speed + " MPH");
        var humid = $("<p>")
          .addClass("card-text")
          .text("Humidity: " + data.main.humidity + "%");
        var temp = $("<p>")
          .addClass("card-text")
          .text("Temperature: " + data.main.temp + " °F");
        var cardBody = $("<div>").addClass("card-body");
        var img = $("<img>").attr(
          "src",
          "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
        );

        // merge and add to page
        title.append(img);
        cardBody.append(title, temp, humid, wind);
        card.append(cardBody);
        $("#today").append(card);

        // call follow-up api endpoints
        // getForecast(searchValue);
        // getUVIndex(data.coord.lat, data.coord.lon);
      },
    });
  }

});

