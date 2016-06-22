/**
 * Created by Administrator on 2016/6/22.
 */

var $ = function(e) {
    return document.querySelector(e);
};
// 将所存数据转化为时间秒数  方便每次-1
var toSec = function(str){
    // str = '24:23'
    var arr = str.split(':');
    // str = '01:02' str='25'
    if(arr.length === 1) {
        return parseInt(arr[0], 10) * 60;
    }else {
        return (parseInt(arr[0], 10) * 60 + parseInt(arr[1], 10));
    }
};
// 转化为时间格式的字符串展示
var toTime = function(timer) {
    timer = data.workTime;
    var minutes = Math.floor(timer / 60),
        seconds = Math.floor(timer % 60);
    minutes = minutes >= 10 ? minutes : '0'+minutes;
    seconds = seconds >= 10 ? seconds : '0'+seconds;
    var str = minutes + ':' + seconds;
    return str;
};
// 储存数据
var data = {
    breakTime: toSec($('.breaktime-length').innerText),  //休息时间   设定区间为0 - 30
    workTime: toSec($('.worktime-length').innerText),  //工作时间   设定区间为5 - 60
    pomodoroNum: 0,  //已获得番茄个数
    status: 0  //当前状态，0表示工作，1表示休息
};

//计时器
var timer = null,
    flag = false;
var countTime = function() {
    clearInterval(timer);
    timer = setInterval(function() {
        flag = true;
        if(data.workTime <= 0) {
            data.workTime = data.breakTime;
            $('.todo').innerText = 'break';
            document.getElementById("time").innerHTML = toTime(data.breakTime);
        }else {
            data.workTime--;
            document.getElementById("time").innerHTML = toTime(data.workTime);
        }
    },1000);
};

$('.clock').onclick = function() {
    if(flag === false) {
        countTime();
    }else {
        clearInterval(timer);
        flag = false;
    }
};

$('.control').addEventListener('click', function(e) {
    if(e.target.nodeName.toLowerCase() !== 'button') {
        return;
    }
    var _target = e.target.getAttribute(['data-target']);
    if(_target === 'worktime-length' && e.target.className === 'plus') {
        if($('.' + _target).innerText >= 60) {
            return;
        }
        $('.' + _target).innerText++;
        $('#time').innerText = $('.' + _target).innerText;
        data.workTime = toSec($('.' + _target).innerText);
    }else if(_target === 'worktime-length' && e.target.className === 'minus') {
        if($('.' + _target).innerText <= 5) {
            return;
        }
        $('.' + _target).innerText--;
        $('#time').innerText = $('.' + _target).innerText;
        data.workTime = toSec($('.' + _target).innerText);
    }else if(_target === 'breaktime-length' && e.target.className === 'plus') {
        if($('.' + _target).innerText >= 30) {
            return;
        }
        $('.' + _target).innerText++;
        data.breakTime = toSec($('.' + _target).innerText);
    }else {
        if($('.' + _target).innerText <= 0) {
            return;
        }
        $('.' + _target).innerText--;
        data.breakTime = toSec($('.' + _target).innerText);
    }
});

