 //Search Function

$(function() {
    $("#searchBtn").click(function(){
        var search = $("#search").val();
        var key = "e811c78dba75cfd7ce373e0d9345ec47";
        var queryURL ="https://api.openweathermap.org/data/2.5/weather?q="+ search +"&appid=" + key;

        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            console.log(response);
            
            //Transfer to HTML
            $(".city").text(response.name + response.dt);
            $(".wind").text("Wind Speed: " + response.wind.speed);
            $(".humidity").text("Humidity: " + response.main.humidity);
            
            // Convert the temp to fahrenheit
            var tempF = (response.main.temp - 273.15) * 1.8 + 32;

            // add temp content to html
            $(".tempk").text("Temperature (K) " + response.main.temp);
            $(".temp").text("Temperature (F) " + tempF.toFixed(2));
            
            
        });
    });
});

$(function () {
    // listen for clicks on search button
    $("#searchBtn").on("click", handleSearch);
  
    function handleSearch(event) {
      event.preventDefault();
      var search = $("#search").val();
  
      var APIKey = "e811c78dba75cfd7ce373e0d9345ec47";
  
      // Here we are building the URL we need to query the database
      var queryURL =
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        search +
        "&appid=" +
        APIKey +
        "&units=imperial";
  
      $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
        console.log(response);
        var forecastDays = [];
        forecastDays.push(response.list[0]);
        forecastDays.push(response.list[8]);
        forecastDays.push(response.list[16]);
        forecastDays.push(response.list[24]);
        forecastDays.push(response.list[32]);
  
  
        for (var i = 0; i < forecastDays.length; i += 1) {
          var forecastContainer = $("<div>").addClass("forecast-day");
          var dateEl = $("<div>").text(forecastDays[i].dt);
          var iconEl = $("<div>").text("icon id: " + forecastDays[i].weather[0].icon);
          var tempEl = $("<div>").text("Temp: " + forecastDays[i].main.temp + " °F");
          var humidityEl = $("<div>").text("Humidity: " + forecastDays[i].main.humidity + "%");
          
          
          $("#dateEl").append(dateEl);
          $("#iconEl").append(iconEl);
          $("#tempEl").append(tempEl);
          $("#humidityEl").append(humidityEl);
        }
      });
    }
  });



