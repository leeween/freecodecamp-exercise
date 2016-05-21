//接收一段DNA字符串， 返回数组
// example     pairElement('ATCGA')     return   [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]

function pairElement(str) {
  	var dnaArr = ['A', 'T', 'G', 'C'];
  	var reflectArr = ['T', 'A', 'C', 'G'];
  
  	var arr = str.split('');
  	var secArr = [];
  	for (var i=0; i<arr.length; i++) {
	  	secArr.push(arr[i].split(''));
	  	var index = dnaArr.indexOf(secArr[i][0]);
	  	var another = reflectArr[index];
	  	secArr[i].push(another);
  	}
	console.log(secArr);
  	return secArr;
}

pairElement("GCG");