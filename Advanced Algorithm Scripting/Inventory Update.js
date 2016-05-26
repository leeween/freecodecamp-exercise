//  给出两个数组 将其中相同的合并 并将数字相加

function updateInventory(arr1, arr2) {
    //  找出相同并合并
    var result = [];
    for (var i=0; i<arr1.length; i++) {
    	for (var j=0; j<arr2.length; j++) {
    		if (arr1[i][1].indexOf(arr2[j][1]) !== -1) {
    			arr1[i][0] += arr2[j][0];
    			arr2.splice(j, 1);
    		}
    	}
    }
    result = arr1.concat(arr2);
    result.sort(function(a, b) {
		return a[1] > b[1] ? 1 : -1;
	});
    console.log(result);
    return result;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
