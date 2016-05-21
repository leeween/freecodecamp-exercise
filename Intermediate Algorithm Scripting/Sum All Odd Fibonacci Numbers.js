// 斐波拉茨数    1 1 2 3 5 8 13 21 34  从第二个数开始下一个数等与前面两个数之和
// 计算出在斐波拉茨数中  小于所给数字的奇数的和


function sumFibs(num) {
    var prevnum = 0;
    var currentnum = 1;
    var result = 0;

    while (currentnum <= num) {
        if (currentnum % 2 !== 0) {
            result += currentnum;
        }
        currentnum += preventnum;
        prevnum = currentnum - prevnum;
    }
    return result;
}

sumFibs(4);