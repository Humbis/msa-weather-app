declare var $;


$('#searchbtn').click(function () {
    var cityName: string = $('#cities').val();
    getWeather(cityName);
})

$(document).ready(function() {
    //initialise the dropit drop down menu plugin
    $('.menu').dropit();
    //initialise the autocomplete feature of the jquery-ui plugin
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
});

//Starts an API call to OpenWeather and display relevant data
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
