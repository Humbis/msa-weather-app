// class weatherData{
//     name: string;
//     temp: number;
//     time: string;
//     weatherCond: string;
//     clouds: number;
//     wind: number;
//     rain: number;
$('#searchbtn').click(function () {
    var cityName = $('#cities').val();
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=ea030e80b21e4006ed84c9781fa9c3a4", function (data) {
        console.log(data);
        $("#weatherRaw").html(data.name + " "
            + Math.round((data.main.temp - 273.15) * 10) / 10);
    });
});
$(document).ready(function () {
    $('.menu').dropit();
    var availableTags = [
        "Auckland",
        "Wellington",
        "Christchurch",
        "Hamilton",
        "Tauranga",
        "Dunedin",
        "Nelson",
        "Rotorua",
        "Whangarei",
        "Invercargill",
        "Whanganui",
        "Gisborne",
        "London",
        "New York",
        "Washington",
        "Melbourne",
        "Adelaide",
        "Brisbane",
        "Sydney",
        "Canberra",
        "Los Angeles",
        "Chicago"
    ];
    $("#cities").autocomplete({
        source: availableTags
    });
});
//# sourceMappingURL=weatherAPI.js.map