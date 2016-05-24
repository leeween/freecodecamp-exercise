// 正则表达式验证美国电话号码

function telephoneCheck(str) {
  	// Good luck!
  	var reg = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

  	return reg.test(str);
}



telephoneCheck("555-555-5555");