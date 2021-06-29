
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
        $(".tempEl").text("Tempurature: " +((( data.main.temp- 273.15) * 9/5) + 32).toFixed(2) +"F");
        $(".humidityEl").text("Humiditiy: "+data.main.humidity);
        $(".windEl").text("Wind speed: "+(data.wind.speed)+" mph");
        
        
        })

}

$(".searchBtn").on("click", function(){
    var x = $("#city-name").val()
    storeInput(x);

})