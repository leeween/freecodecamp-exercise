/**
 * Created by Administrator on 2016/6/15.
 */

$(document).ready(function() {
    showWeather('shenzhen');
});
function showWeather(city){
    var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var appid = '&APPID=0bcfbe64ef4f3bd2660a757cde1eadce';
    var iconUrl = 'http://openweathermap.org/img/w/'
    city = city.toLowerCase();
    $.ajax({
        url: api + city + appid,
        success: function(data){
            var temp = Math.floor(data.main.temp - 273.15) + '℃';
            var weather = data.weather[0].main;
            var icon = iconUrl + data.weather[0].icon + '.png';
            $('.city').html('<span>地点：</span>' + city);
            $('.temp').html('<span>温度：</span>' + temp);
            $('.weather').html('<span>天气：</span>' + weather);
            $('.icon').html("<img src=" + icon + ">");
        }
    });
}
$('.searchBtn').on('click', function() {
    var searchCity = $('input').val();
    if(searchCity !== '') {
        showWeather(searchCity);
    }
});
var arr = [
    ['北京', 'beijing'],
    ['上海', 'shanghai'],
    ['广州', 'guangzhou'],
    ['深圳', 'shenzhen'],
    ['武汉', 'wuhan'],
    ['杭州', 'hangzhou'],
    ['长沙', 'changsha'],
    ['香港', 'hongkong']
];
$('.common-city').on('click', function(e) {
    if(e.target.nodeName.toLowerCase() === 'span') {
        var name;
        for(var i =0; i<arr.length; i++) {
            if(e.target.innerHTML === arr[i][0]) {
                name = arr[i][1];
            }
        }
        $('input').val(name);
        showWeather(name);
    }
});

