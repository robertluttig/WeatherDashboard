// Search Function
$$(function() {
    $("#searchBtn").click(function(){
        var search = $('#search').val();
        var key = "e811c78dba75cfd7ce373e0d9345ec47";
        var queryURL = "api.openweathermap.org/data/2.5/forecast?q=" + search + "&appid=" + key;
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (result) {
            console.log(result)
            
        });
    });
});