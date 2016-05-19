//给出一个数组包含两个数字。返回两个数字之间的数之和（包含这两个数字）


function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
    for (var i=min; i <= max; i++){
        temp += i;
    }
  	return(temp);
}

sumAll([1, 4]);