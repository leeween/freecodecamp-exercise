/**
 * Created by Administrator on 2016/6/15.
 */
$(document).ready(function(){
    $('.change').on('click', function() {
        $.getJSON('js/quote.json',function(data){
            var i = random();
            $('.quote').html('"' + data[i].quote);
            $('.name').html('-' + data[i].name);
            $('.share').on('click', function(e) {
                e.preventDefault();
                openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + data[i].quote + '" ' + data[i].name));
            });
        });
        var bgColor = colorRandom();
        $('body').css('background-color', bgColor);
        $('.share').css('background-color', bgColor);
        $('.change').css('background-color', bgColor);
        $('p').css('color', bgColor);
    });
});
function openURL(url){
    window.open(url, 'twitter-share', 'width=550, height=400');
}
function random() {
    return Math.floor(Math.random() * 8);
}
function colorRandom() {
    return '#'+ Math.floor(Math.random()*16777215).toString(16);
}
