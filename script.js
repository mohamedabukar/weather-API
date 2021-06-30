
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
        $(".tempEl").text("Temp: " +((( data.main.temp- 273.15) * 9/5) + 32).toFixed(2) +"F");
        $(".humidityEl").text("Humiditiy: "+data.main.humidity+"%");
        $(".windEl").text("Wind speed: "+(data.wind.speed)+" mph");
        var lat = data.coord.lat    
        var lon = data.coord.lon    
        fiveDay(lat, lon, date);
        })

}

function fiveDay(lat, lon, date){
    var fiveDayUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
    fetch(fiveDayUrl)
    .then(function(response){
    return response.json()
  })
  .then( function(data){
      console.log(data);
      var dt1 = data.daily[0].dt;
      var date1 = new Date(dt1).toLocaleDateString("en-US");
      $(".date1").text(date1);
      $(".temp1").text("Temp:" +(((data.daily[0].temp.day- 273.15) * 9/5) + 32).toFixed(2)+ "F");
      $(".wind1").text("wind: "+data.daily[0].wind_speed+"MPH");
      $(".humidity1").text("Humidity: "+data.daily[0].humidity+ "%");
      var dt2 = data.daily[1].dt;
      var date2 = new Date(dt2).toLocaleDateString("en-US");
      $(".date2").text(date2);
      $(".temp2").text("Temp: " +(((data.daily[1].temp.day- 273.15) * 9/5) + 32).toFixed(2)+ "F");
      $(".wind2").text("wind: "+data.daily[1].wind_speed+"MPH");
      $(".humidity2").text("Humidity: "+data.daily[1].humidity+"%");
      var dt3 = data.daily[2].dt;
      var date3 = new Date(dt3).toLocaleDateString("en-US");
      $(".date3").text(date3);
      $(".temp3").text("Temp: " +(((data.daily[2].temp.day- 273.15) * 9/5) + 32).toFixed(2)+ "F");
      $(".wind3").text("wind: "+data.daily[2].wind_speed+"MPH");
      $(".humidity3").text("Humidity: "+data.daily[2].humidity+"%");
      var dt4 = data.daily[3].dt;
      var date4 = new Date(dt4).toLocaleDateString("en-US");
      $(".date4").text(date4);
      $(".temp4").text("Temp: " +(((data.daily[3].temp.day- 273.15) * 9/5) + 32).toFixed(2)+ "F");
      $(".wind4").text("wind: "+data.daily[3].wind_speed+"MPH");
      $(".humidity4").text("Humidity: "+data.daily[3].humidity+"%");
      var dt5 = data.daily[5].dt;
      var date5 = new Date(dt5).toLocaleDateString("en-US");
      $(".date5").text(date5);
      $(".temp5").text("Temp: " +(((data.daily[4].temp.day- 273.15) * 9/5) + 32).toFixed(2)+ "F");
      $(".wind5").text("wind: "+data.daily[4].wind_speed+"MPH");
      $(".humidity5").text("Humidity: "+data.daily[4].humidity+"%");
  })
  
}

$(".searchBtn").on("click", function(){
    var x = $("#city-name").val()
    storeInput(x);

})