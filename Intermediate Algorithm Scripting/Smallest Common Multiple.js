
// 计算出所给数组 两个数字及两个数字间的数字的最小公倍数

// 分布计算  性能极低   计算[1, 25]需要4000万次
function smallestCommons(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });

    var newArr = [];
    for (var i = arr[0]; i >= arr[1]; i--) {
        newArr.push(i);
    }
    var quot = 0;
    var loop = 1;
    var n;

    do {
        quot = newArr[0] * loop * newArr[1];
        for (n = 2; n < newArr.length; n++) {
            if (quot % newArr[n] !== 0) {
                break;
            }
        }

        loop++;
    }while (n !== newArr.length)

    return quot;
}


// 优化算法   欧几里得算法。

// 先放在这里  后面学习算法再看。
function smallestCommons(arr) {
    var range = [];
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
    }

    return range.reduce(function(previousValue, currentValue) {
        var gcdPrevCurr = gcd(previousValue, currentValue);
        return (previousValue * currentValue) / gcdPrevCurr;
    });

    function gcd(x, y) {    // Implements The Euclidean Algorithm
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }
}

// test here
smallestCommons([1,5]);
