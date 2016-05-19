//替换第一个参数中的第二个参数为第三个参数，  如果第二个参数首字母大写， 第三个字母也需首字母大写 

function myReplace(str, before, after) {
    var arr = str.split(" ");
    if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    	after = after.replace(after.charAt(0), after.charAt(0).toUpperCase());
    }
    for(var i=0;i<arr.length;i++){
        if(arr[i] === before) {
        	arr[i] = after;
        }
    }
    str = arr.join(" ");
    return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
