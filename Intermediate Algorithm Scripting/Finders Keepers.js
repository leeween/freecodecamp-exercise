// 找出所给第一个参数中  符合  所给第二个参数的  第一个值

function findElement(arr, func) {
    
    // var num = 0;
    // var newarr = [];
    // for (var i=0; i<arr.length; i++) {
    //     if (func(arr[i]) === true) {
    //         newarr.push(i);
    //     }
    // };
    // return arr[newarr[0]];

    return arr.filter(func)[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) 