// add(2)(3) = 5;
// function add(a) {
// 	return function (b) {
// 		return a + b;
// 	}
// }
// add(2+3) = 5;
// function(a, b) {
// 	return a + b;
// }

function addTogether() {
	if (arguments.length === 2) {
		if (typeof(arguments[0]) == "number" && typeof(arguments[1]) == "number" ) {
			return arguments[0] + arguments[1];
		}else {
			return undefined;
		}		
	}else {
		if (typeof(arguments[0]) !== "number") {
			return undefined;
		}else {
			var a = arguments[0];
			return function(b) {
                if (typeof(b) !== 'number') {
                    return undefined;
                }else {
                  return a + b;
                }
				 
			};
		}
		
	}
}
addTogether(2,3);
addTogether(2)(3);