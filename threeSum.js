/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if(nums.every(num => num == 0 )){
        return [[0,0,0]]
    }
    else {
    const ans = new Set()
    for (let i = 0; i < nums.length; i++) {
        const set = new Set()
        for (let j = i + 1; j < nums.length; j++) {
            let third = -nums[i] - nums[j]
            if (set.has(third)) {
                const sortedArr = ([nums[i], nums[j], third].sort((x, y) => x - y))
                ans.add(sortedArr.join(','));
            }
            set.add(nums[j])
        }

    }
const result = Array.from(ans).map(item => item.split(',').map(Number));
    return result
    }
};