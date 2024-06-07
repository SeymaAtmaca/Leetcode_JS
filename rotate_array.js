/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k %= nums.length

    let rotate = (i,j) => {
        while (i<j){ [nums[i++], nums[j--]] = [nums[j], nums[i]] }
    }
    rotate(0, nums.length-1)
    rotate(0, k-1)
    rotate(k, nums.length-1)
};