// Example of API call 
// http://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10
// api.openweathermap.org/data/2.5/weather?q=London
// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d7f9888f59f035455ce59bb330b974bc

//my weather API key d7f9888f59f035455ce59bb330b974bc
// Search weather by city name
<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=d7f9888f59f035455ce59bb330b974bc";

$.ajax ({
    url: queryURL,
    method: "GET"
}).then 