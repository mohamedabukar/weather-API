
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
        $(".tempEl").text(data.main.temp);
        $(".humidityEL").text(data.main.humidity);
        $(".windEl").text(data.wind);
        $(".list-group").append(tempEl, humidityEL, windEl)
        })

}

$(".searchBtn").on("click", function(){
    var x = $("#city-name").val()
    storeInput(x);

})