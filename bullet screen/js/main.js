/**
 * Created by Administrator on 2016/6/14.
 */
function $(name) {
    return document.querySelector(name);
}

// 发射弹幕
$('#go-data').addEventListener('click', function() {
    var val = $('input').value;
    $('input').value = '';
    if (val === '') {
        return;
    }
    var div = document.createElement('div');
    div.innerHTML = val;
    $('.stage').appendChild(div);
    show(div);
    move(div);
});
/**
 * 初始化弹幕样式
 * 1.绝对定位，位置从右边随机
 * 2.字体颜色随机
 * 3.字体大小随机
 */

function show(ele) {
    // 位置
    var max = 464;
    var min = 0;
    ele.style.position = 'absolute';
    ele.style.left = $('.stage').clientWidth + 'px';
    ele.style.top = Math.random() * (max - min) + min + 'px';
    ele.style.width = '1000px';
    // 字体大小
    var maxFont = 36;
    var minFont = 14;
    ele.style.fontSize =  Math.random() * (maxFont - minFont) + minFont + 'px';

    // 颜色
    // parseInt("0xffffff",16).toString(10) = 16777215
    ele.style.color =  '#'+Math.floor(Math.random()*16777215).toString(16);
}
/**
 * 弹幕运动
 * 1.不同速度
 * 2.到达最左边后清除
 */
function move(ele) {
    var maxSpeed = 20;
    var minSpeed = 5;
    var speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
    setInterval(function() {
        ele.style.left = ele.offsetLeft - speed + 'px';
        if (parseInt(ele.style.left) < -1000) {
            ele.style.left = $('.stage').clientWidth + 'px';
        }
    }, 30);
}
// 清除弹幕
$('#clear-data').addEventListener('click', function() {
    $('.stage').innerHTML = '';
});

/**
 * 后期改进计划：
 * 如果超过50条弹幕 删除最早的一条
 * 使用localestorage
 * 代码优化
 */
