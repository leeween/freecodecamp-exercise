//  如果给出的第一个参数数组中的每一项都含有 第二个参数  并且值不为空  返回true

function truthCheck(collection, pre) {
  	return collection.every(function (element) {
    	return element.hasOwnProperty(pre) && Boolean(element[pre]);
  	});
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");