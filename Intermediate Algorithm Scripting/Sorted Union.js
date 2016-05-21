// 给出两个或多个数组，返回这些数组内的所有值，去掉相同的值只保留一个。


function uniteUnique(arr) {

	//将所给参数保存为一个数组并将其连接为一个数组。
    var argArr = [];
    for (var i=0; i<arguments.length; i++) {
        argArr.push(arguments[i]);
    };
    var newarr = argArr.reduce(function(a, b) {
        return a.concat(b);
    })
    console.log(newarr);

    //数组去重
    var recArr = [];
    for (var i=0; i<newarr.length; i++) {
        if(recArr.indexOf(newarr[i]) === -1) {
            recArr.push(newarr[i]);
        }
    }
    console.log(recArr);
    return recArr;
} 

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);