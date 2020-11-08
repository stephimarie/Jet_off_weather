$(document).ready(function () {

    const apiKey = '9795c05e3861e29aa3fa17430c07e4d2';
    const appId = "&appid=";

    $("#btnSrc").on("click", function () {
        let searchCity = $(".input").val();
        let weatherFore = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + appId + apiKey;

        $.ajax({url: weatherFore, method: "GET"}).then(function (res) {
            console.log(res);
            let fiveDay = res.name;

        console.log(searchCity)$("#btnSrc").on("click", function () {
            let searchCity = $(".input").val();
            let weatherSrc = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&units=imperial" + appId + apiKey;

            $.ajax({url: weatherSrc, method: "GET"}).then(function (res) {
                console.log(res);
                let cityName = res.name;
                let condition = res.main.feels_like;
                let temp = res.main.temp;
                let humidity = res.main.humidity;
                let wind = res.wind.speed;
                // let uv =

                $("#cityName").text(cityName);
                $("#condition").text(condition);
                $("#temp").text(temp);
                $("#humidity").text(humidity);
                $("#wind").text(wind);
            })


        })
    })

    localStorage.setItem(“cityName”, JSON.stringify(“object”).JSON.parse(local.Storage.getItem(“cityName”));
    localStorage.setItem(“condition”, JSON.stringify(“object”).JSON.parse(local.Storage.getItem(“condition”));
    localStorage.setItem(“temp”, JSON.stringify(“object”).JSON.parse(local.Storage.getItem(“temp”));
    localStorage.setItem(“humidity”, JSON.stringify(“object”).JSON.parse(local.Storage.getItem(“humidity”));
    localStorage.setItem(“wind”, JSON.stringify(“object”).JSON.parse(local.Storage.getItem(“wind”));
    localStorage.setItem(“uv”, JSON.stringify(“object”).JSON.parse(local.Storage.getItem(“uv”));
