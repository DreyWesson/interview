/**
* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    You can return the answer in any order.

    

    Example 1:

    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
    Example 2:

    Input: nums = [3,2,4], target = 6
    Output: [1,2]
    Example 3:

    Input: nums = [3,3], target = 6
    Output: [0,1]

 */

    var twoSum = function(nums, target) {
        const hashMap = new Map();
        const result = [];
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (hashMap.has(complement)) {
                result.push(hashMap.get(complement), i);
                break;
            }
            hashMap.set(nums[i], i);
        }
        return result;
    };
    
    let nums = [8, 7, 4, 5, 6, 3, 4, 2, 9, 12];
    let target = 6;
    let value = twoSum(nums, target);
// console.log(value[0], value[1]);

// const twoSumSortedArr = function(nums, target) {
//     // nums.sort((a,b)=> a-b);
//     let n = nums.length;
//     let sum = 0;

//     let right = n - 1;
//     let left = 0;

//     while (left < right)
//     {
//         sum = nums[left] + nums[right];
//         if (sum == target)
//             return [left, right];
//         else if (sum > target)
//             right--;
//         else left++;
//         // console.log(sum)
//     }
//     return []
// };
// value = twoSumSortedArr(nums, target);
// console.log(value[0], value[1]);

