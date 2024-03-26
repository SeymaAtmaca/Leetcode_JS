/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    if (s.length === 0) return 0;
    
    const val = Number.parseInt(s.trim());
    
    if (!isNaN(val)) {
        if (val <= Number.MIN_SAFE_INTEGER) return Number.MIN_SAFE_INTEGER;
        else if (val >= Number.MAX_SAFE_INTEGER) return Number.MAX_SAFE_INTEGER;
        else return val;
    }
    
    return 0;
};
