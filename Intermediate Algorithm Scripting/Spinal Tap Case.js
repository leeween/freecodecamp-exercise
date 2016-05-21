// 给出一段字符串，返回全部小写，空格和下划线替换为-，并且原字符串大写与小写要分开的字符串

function spinalCase(str) {
	// 先将 小写大写 的连接方式转换位 小写-大写
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\s|_/g, '-').toLowerCase();
    return str;
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");