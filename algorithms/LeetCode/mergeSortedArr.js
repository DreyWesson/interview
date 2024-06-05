/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// RECURSION Solution
var mergeREC = function (nums1, m, nums2, n) {
    const cached = [];
    let i = 0;
    let j = 0;
    nums1.splice(m);
    nums2.splice(n);
    function incrementor(val) {
        cached.push(val);
        return 1;
    }
    function handler(arg1, arg2) {
        if (arg1 === undefined && arg2 === undefined) return;
        if (arg1 === undefined) j += incrementor(arg2);
        else if (arg2 === undefined) i += incrementor(arg1);
        else if (arg1 < arg2) i += incrementor(arg1);
        else if (arg1 >= arg2) j += incrementor(arg2);
        return handler(nums1[i], nums2[j]);
    }
    handler(nums1[i], nums2[j]);
    i = -1;
    while (cached[++i] !== undefined) nums1[i] = cached[i];
};

// Iterative Solution
var mergeITR = function (nums1, m, nums2, n) {
    let newM = m - 1,
        newN = n - 1;
    function decrement(val, i) {
        nums1[i] = val;
        return 1;
    }
    for (let i = m + n - 1; i >= 0; i--) {
        if (newN < 0 || nums1[newM] > nums2[newN])
            newM -= decrement(nums1[newM], i);
        else newN -= decrement(nums2[newN], i);
    }
};
