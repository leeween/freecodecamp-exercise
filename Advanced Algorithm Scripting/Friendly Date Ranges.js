var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//  转换月份
function turnMonth(num) {
	num = parseInt(num);  
	return months[num-1];
}
//  转换日期
function turnDay(day) {
	day = parseInt(day);
	switch(day) {
		case 1:
			return '1st';
		case 2:
			return '2nd';
		case 3:
			return '3rd';
		default:
			return day + 'th';
	}
}

function turn(arr) {
	var newArr = [];
	newArr[0] = turnMonth(arr[1]);
	newArr[1] = turnDay(arr[2]);
	newArr[2] = arr[0];

	return newArr;
}

function makeFriendlyDates(arr) {
	var result = [];         

	var startArr = arr[0].split('-');
	var endArr = arr[1].split('-');

	startArr = turn(startArr);
	endArr = turn(endArr);
	//["July", "1st", "2016"] 

	if (startArr[1] !== endArr[1] && startArr[2] === endArr[2] && startArr[0] === endArr[0]) {
		startArr.length = 2;
		endArr[0] = endArr[1];
		endArr.length = 1;

		result.push(startArr.join(' '));
		result.push(endArr.join(' '));

	}else if (endArr[2] - startArr[2] === 1 && number[months.indexOf(endArr[0])] < number[months.indexOf(startArr[0])]) {
		startArr.length = 2;
		endArr.length = 2;
		
		result.push(startArr.join(' '));
		result.push(endArr.join(' '));

	}else if (startArr[2] === endArr[2] &&  number[months.indexOf(endArr[0])] > number[months.indexOf(startArr[0])]) {
		endArr.length = 2;
		startArr[1] += ',';
		result.push(startArr.join(' '));
		result.push(endArr.join(' '));

	}else if (startArr[1] === endArr[1] && startArr[2] === endArr[2] && startArr[0] === endArr[0]) {
		startArr[1] += ',';
		result.push(startArr.join(' '));

	}else if (endArr[2] - startArr[2] === 1 && endArr[0] === startArr[0] && parseInt(endArr[1]) < parseInt(startArr[1])) {
		endArr.length = 2;
		startArr[1] += ',';
		result.push(startArr.join(' '));
		result.push(endArr.join(' '));
	}else {
		startArr[1] += ',';
		endArr[1] += ',';
		result.push(startArr.join(' '));
		result.push(endArr.join(' '));

	}
	
	console.log(result)
	return result;
}

makeFriendlyDates(["2016-12-01", "2018-02-03"])