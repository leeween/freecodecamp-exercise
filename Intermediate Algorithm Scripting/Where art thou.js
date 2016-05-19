//给出一个数组和一个对象，找出包含所给对象的数组里的对象


function whereAreYou(collection, source) {
    var srcKeys = Object.keys(source);

    // filter the collection
    return collection.filter(function (obj) {
        for(var i = 0; i < srcKeys.length; i++) {
            if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
                return false;
            }
        }
        return true;
    });
}

whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
