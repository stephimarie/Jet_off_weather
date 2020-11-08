$(document).ready( function(){ 

const apiKey = '9795c05e3861e29aa3fa17430c07e4d2';
const appId = "&appid=";


$("#btnSrc").on("click", function() {
    let searchCity = $(".input").val();
    let weatherSrc = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity+ "&units=imperial" + appId + apiKey;
    console.log(searchCity)

    $.ajax({
        url: weatherSrc,
        method: "GET"
    }).then(function (res) {
        console.log(res);
        let cityName = res.name;
    
        let temp = res.main.feels_like
         console.log(temp);
        $("#cityName").text(cityName);
        $("#temp").text(temp)
    })


})})


