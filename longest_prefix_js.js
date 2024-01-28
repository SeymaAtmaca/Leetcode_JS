/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0){
        return "";
    }
    // ilk kelime prefix olarak alinir ve kontrol bu ilk kelime uzerinde gerceklesitirilir.
    let prefix = strs[0]
    //dizideki kelimeler cekilir
    for(let word of strs){
        // alinan kelimenin prefix ile eslesip eslesmedigini kontrol eder.
        while(word.indexOf(prefix) !== 0){
            // eger word prefix i icermiyorsa prefix in son harfi silinir ve yeniden kontrol edilir.
            prefix = prefix.slice(0, -1);
            // butun harfler silindiyse, prefix '' a esitse ve henuz bir ortak deger elde edilemediyse return edilir
            if(prefix === '') return ''
        }
    }
    // elde kalan prefix ifade dondurulur.
    return prefix;
};
