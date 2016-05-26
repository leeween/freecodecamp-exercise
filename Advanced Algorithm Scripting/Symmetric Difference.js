function sym(args) {
	//  将参数转换成数组
	var argsArr = Array.prototype.slice.call(arguments);
	
	//  将两个参数合并且去除两数组相同内容
	var getDiff = function(arr1, arr2) {
		function filterFunction(arr1, arr2) {
			return arr1.filter(function(item) {
				return arr2.indexOf(item) === -1;
			});
		}
		return filterFunction(arr1, arr2).concat(filterFunction(arr2, arr1));
	};
	//  对参数数组全部执行getDiff
	var symArr = argsArr.reduce(getDiff);

	//  数组去重
	var unique = symArr.filter(function(elem, index, array) {
		return index === array.indexOf(elem);
	});
	console.log(unique);
 	return unique;
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])