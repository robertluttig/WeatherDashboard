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
            $(".city").html(response.name);
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


// dump Json for current weather for San Diego


