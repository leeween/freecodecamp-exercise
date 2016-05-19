// 将所给字符串变换为 pig latin
// 如果所给字符串第一个字符为元音，直接在后面加上'way'
// 否则找出最先出现的元音，将其前面的字符移到最后面并加上'ay'


function translatePigLatin(str) {
	var consonant = ['a', 'e', 'i', 'o', 'u'];
	var arr = str.split('');
	var newarr =[];
	for (var i=0; i<consonant.length; i++) {
		var index = arr.indexOf(consonant[i]);
		newarr.push(index);
	}
	var numarr = newarr.sort().filter(function(element){
		return element > -1;
	});
	if(numarr[0] === 0) {
		str += 'way';
	}else {
		str = str.slice(numarr[0], str.length) + str.slice(0, numarr[0]) + 'ay';
	}
	return str;
}

translatePigLatin("consonant");
