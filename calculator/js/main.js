/**
 * Created by Administrator on 2016/6/13.
 */
// 快速获取
function $(name) {
    return document.querySelector(name);
}
// 保存stage的值
var val = '';
$('.buttons').addEventListener('click', function(e) {
    if(e.target.classList[0] !== 'button') {
        return;
    }
    switch (e.target.value) {
        case 'AC':
            $('input').value = '0';
            val = '';
            break;
        case '=':
            $('input').value = eval(val);
            val = eval(val);
            break;
        default:
            val += e.target.value;
            $('input').value = val;
            break;
    }
});

