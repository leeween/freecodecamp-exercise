// 将所给第一个参数数组中满足 第二个函数条件的 第一个元素前面的元素删除掉 

function dropElements(arr, func) {
    var newarr = arr.filter(func);
    var index = arr.indexOf(newarr[0]);
    var result = [];
    if (index > -1) {
        result = arr.slice(index);
    }
    // Drop them elements.
    return result;
}
dropElements([1, 2, 3, 4], function(n) {return n > 5;})
