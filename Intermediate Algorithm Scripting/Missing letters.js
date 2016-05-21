//  根据给出的字符串字母 找出其中缺失的并返回， 如果是连着的 则返回undefined

function fearNotLetter(str) {
    var startNum = str.charCodeAt(0);
    for(var i=0; i<str.length; i++) {
        var index;
        if(str.charCodeAt(i) !== startNum+i) {
            index = i;
            return String.fromCharCode(startNum+index);
        }
    }
}

fearNotLetter("abceg");