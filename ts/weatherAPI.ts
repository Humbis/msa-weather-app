
// class weatherData{
//     name: string;
//     temp: number;
//     time: string;
//     weatherCond: string;
//     clouds: number;
//     wind: number;
//     rain: number;

//     constructor(city, temp, time, weatherCond, clouds, wind){
//         this.name = name;
//         this.temp = temp;
//         this.time = time;
//         this.weatherCond = weatherCond;
//         this.clouds = clouds;
//         this.wind = wind;
//     }
// }
declare var $;


$('#searchbtn').click(function () {
    var cityName: string = $('#cities').val();
    getWeather(cityName);
})

$(document).ready(function() {
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
    $( "#cities" ).autocomplete({
      source: availableTags
    });

    $('ul.menuItems li').click(function(e) 
    { 
        getWeather($(this).find("a").text());
    });

    // $("#shareBtn").click(function () {
    //     FB.ui({
    //         method: 'share',
    //         display: 'popup',
    //         href: 'http://msa2016module2weatherapp.azurewebsites.net/',
    //     }, function(response){});
    // })
});
function getWeather(cityName:string) {
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=ea030e80b21e4006ed84c9781fa9c3a4",
        function (data) {
            console.log(data);
            $("#weatherRaw").html(data.name + " " 
                + Math.round((data.main.temp - 273.15) * 10) / 10
                + "\xB0C " 
                + data.weather[0].description);
        }
    )
}
