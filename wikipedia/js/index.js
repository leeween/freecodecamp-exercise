/**
 * Created by Administrator on 2016/6/18.
 */

$('.search').bind('click', function () {
    $('.stage').html('');
    var val = $('input').val();
    var api = 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=';
    if(val === '') {
        return;
    }
    $.ajax({
        url: api + val,
        dataType: 'jsonp',
        type: 'POST',
        headers: { 'Api-User-Agent': 'Example/1.0' },
        success: function (data) {
            var dataArr = data.query.search;
            var html = '';
            for(var content in dataArr) {
                html += '<div class="item"><a href="https://en.wikipedia.org/wiki/' + dataArr[content].title + '"class="title" target="_blank">' + dataArr[content].title + '</a><p class="content">' + dataArr[content].snippet + '</p></div>'
            }
            if(html.length>0) {
                $('.stage').append(html);
            }else {
                $('.stage').html('未搜索到结果');
            }
        }
    });
});