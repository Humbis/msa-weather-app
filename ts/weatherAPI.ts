$.get("http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=json&APPID=ea030e80b21e4006ed84c9781fa9c3a4",
    function (data) {
        console.log(data);
        $("#weatherRaw").html(data.city.name + " " 
            + data.list[0].dt_txt + " " 
            + Math.round((data.list[0].main.temp_max - 273.15) * 10) / 10);
    }
);

$(document).ready(function() {
    $('.menu').dropit();
});