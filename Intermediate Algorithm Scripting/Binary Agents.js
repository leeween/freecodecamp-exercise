// 给出一串代表字符的二进制数字  将其转化为字符串

function binaryAgent(str) {
    var arr = str.split(" ");
    var newarr = arr.map(function (element, index, array) {
        return parseInt(element, 2);
    });
    var string = newarr.map(function (element, index, array) {
        return String.fromCharCode(element);
    });
    console.log(string.join(""));
    return string.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");