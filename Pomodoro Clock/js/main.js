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

var reset = function() {
    data.breakTime = 300;
    data.workTime = 1500;
    $('.todo').innerText = 'work';
    $('.worktime-length').innerText = 25;
    $('.breaktime-length').innerText = 5;
}
//计时器
var timer = null,
    flag = false;
var countTime = function() {
    clearInterval(timer);
    timer = setInterval(function() {
        flag = true;
        if(data.workTime <= 0) {
            if(data.breakTime <= 0) {
                return;
            }
            data.status = 1;
            data.breakTime--;
            $('.todo').innerText = 'break';
            $('.tips').innerText = '休息一会吧！';
            document.getElementById("time").innerHTML = toTime(data.breakTime);
        }else {
            data.status = 0;
            data.workTime--;
            $('.tips').innerText = '认真工作吧！';
            document.getElementById("time").innerHTML = toTime(data.workTime);
        }
    },1000);
    if(data.breakTime === 0 && data.workTime === 0) {
        var span = document.createElement('span');
        span.className = 'pomodoro';
        $('.pomodoro-wrap').appendChild(span);
        reset();
    }
    if(document.getElementsByClassName('pomodoro').length === 4) {
        alert('恭喜您，今天获得4个番茄！');
        $('.pomodoro-wrap').innerHTML = '';
    }
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
    if(_target === 'worktime-length' && e.target.className === 'plus' && data.status === 0) {
        if($('.' + _target).innerText >= 60) {
            return;
        }
        $('.' + _target).innerText++;
        $('#time').innerText = $('.' + _target).innerText;
        data.workTime = toSec($('.' + _target).innerText);
    }else if(_target === 'worktime-length' && e.target.className === 'minus' && data.status === 0) {
        if($('.' + _target).innerText <= 5) {
            return;
        }
        $('.' + _target).innerText--;
        $('#time').innerText = $('.' + _target).innerText;
        data.workTime = toSec($('.' + _target).innerText);
    }else if(_target === 'breaktime-length' && e.target.className === 'plus' && data.status === 1) {
        if($('.' + _target).innerText >= 30) {
            return;
        }
        $('.' + _target).innerText++;
        $('#time').innerText = $('.' + _target).innerText;
        data.breakTime = toSec($('.' + _target).innerText);
    }else if(_target === 'breaktime-length' && e.target.className === 'minus' && data.status === 1) {
        if($('.' + _target).innerText <= 0) {
            return;
        }
        $('.' + _target).innerText--;
        $('#time').innerText = $('.' + _target).innerText;
        data.breakTime = toSec($('.' + _target).innerText);
    }
});

