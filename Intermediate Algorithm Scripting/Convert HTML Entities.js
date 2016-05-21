// 将所给字符串中的特殊字符转义

function convertHTML(str) {
    str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
	console.log(str)
	return str;
}

convertHTML("Dolce & Gabbana");