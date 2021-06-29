
var userSearch = localStorage.getItem("search")

var apiKey = "5d1b3f150d64e1e1cd5a4bedbf160469"

function storeInput(cityName){
    var apiUrlcitySearch = "http://api.openweathermap.org/data/2.5/weather?q="+ cityName + "&appid=" + apiKey;
    fetch(apiUrlcitySearch)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        var dt = data.dt;
        var date = new Date(dt).toLocaleDateString("en-US");
        //var date= a.getDate();
        $(".city-nme").text(data.name);
        $(".date").text(date);
        $(".tempEl").text("Tempurature: " +((( data.main.temp- 273.15) * 9/5) + 32).toFixed(2) +"F");
        $(".humidityEl").text("Humiditiy: "+data.main.humidity);
        $(".windEl").text("Wind speed: "+(data.wind.speed)+" mph");
        var lat = data.coord.lat    
        var lon = data.coord.lon    
        fiveDay(lat, lon);
        })

}

function fiveDay(lat, lon){
    var fiveDayUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey

}

$(".searchBtn").on("click", function(){
    var x = $("#city-name").val()
    storeInput(x);

})