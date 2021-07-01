
var userSearch = localStorage.getItem("search")

var apiKey = "5d1b3f150d64e1e1cd5a4bedbf160469"

function storeInput(cityName) {
    var apiUrlcitySearch = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
    fetch(apiUrlcitySearch)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            var dt = data.dt;
            var date = new Date(dt * 1000).toLocaleDateString();
            //var date= a.getDate();
            $(".city-nme").text(data.name);
            $(".date").text(date);
            $(".tempEl").text("Temp: " + (((data.main.temp - 273.15) * 9 / 5) + 32).toFixed(2) + "F");
            $(".humidityEl").text("Humiditiy: " + data.main.humidity + "%");
            $(".windEl").text("Wind speed: " + (data.wind.speed) + " mph");
            var lat = data.coord.lat
            var lon = data.coord.lon
            fiveDay(lat, lon);
        })

}
$(".btn").on("click", function (event) {
    var cityName = event.target.value;
    storeInput(cityName);
})

function fiveDay(lat, lon) {
    var fiveDayUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
    fetch(fiveDayUrl)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            for (var i = 1; i < 6; i++) {
                var dt = data.daily[i].dt;
                var date = new Date(dt * 1000).toLocaleDateString("en-US");
                var weatherForecastHtml = `
                    <div class="col-2 day">
                    <h2 class="date">${date}</h2>
                    <p class="temp">Temp: ${(((data.daily[i].temp.day - 273.15) * 9 / 5) + 32).toFixed(2)}F</p>
                    <p class="humidity">Humidity: ${data.daily[i].humidity}%</p>
                    <p class="wind">Wind: ${data.daily[i].wind_speed} MPH</p>
                </div>
                `
                $(".5Days").append(weatherForecastHtml);

            }

            //   var dt3 = data.daily[2].dt;
            //   var date3 = new Date(dt3*1000).toLocaleDateString("en-US");
            //   $(".date3").text(date3);
            //   $(".temp3").text("Temp: " +(((data.daily[2].temp.day- 273.15) * 9/5) + 32).toFixed(2)+ "F");
            //   $(".wind3").text("wind: "+data.daily[2].wind_speed+"MPH");
            //   $(".humidity3").text("Humidity: "+data.daily[2].humidity+"%");
            //   var dt4 = data.daily[3].dt;
            //   var date4 = new Date(dt4).toLocaleDateString("en-US");
            //   $(".date4").text(date4);
            //   $(".temp4").text("Temp: " +(((data.daily[3].temp.day- 273.15) * 9/5) + 32).toFixed(2)+ "F");
            //   $(".wind4").text("wind: "+data.daily[3].wind_speed+"MPH");
            //   $(".humidity4").text("Humidity: "+data.daily[3].humidity+"%");
            //   var dt5 = data.daily[5].dt;
            //   var date5 = new Date(dt5).toLocaleDateString("en-US");
            //   $(".date5").text(date5);
            //   $(".temp5").text("Temp: " +(((data.daily[4].temp.day- 273.15) * 9/5) + 32).toFixed(2)+ "F");
            //   $(".wind5").text("wind: "+data.daily[4].wind_speed+"MPH");
            //   $(".humidity5").text("Humidity: "+data.daily[4].humidity+"%");
            //   var dt1 = data.daily[6].dt;
            //   var date1 = new Date(dt1*1000).toLocaleDateString();
            //   $(".date1").text(date1);
            //   $(".temp1").text("Temp:" +(((data.daily[0].temp.day- 273.15) * 9/5) + 32).toFixed(2)+ "F");
            //   $(".wind1").text("wind: "+data.daily[0].wind_speed+"MPH");
            //   $(".humidity1").text("Humidity: "+data.daily[0].humidity+ "%");
        })

}

$(".searchBtn").on("click", function () {
    var x = $("#city-name").val()
    storeInput(x);

})