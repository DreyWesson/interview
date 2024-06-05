/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * Using TWO POINTER TECHNIQUE
 */
var threeSum = function(nums) {
    let result = [];
    let n = nums.length;
    nums.sort((a, b) => a - b); // Sorting the array in ascending order
    for (let i = 0; i < n - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate values for i
      let left = i + 1, right = n - 1;
      while (left < right) {
        let currentSum = nums[i] + nums[left] + nums[right];
        if (currentSum === 0) {
          result.push([nums[i], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicate values for left
          while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicate values for right
          left++;
          right--;
        } else if (currentSum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
    return result;
  };

/**
 * Using HASHING TECHNIQUE
 */
var threeSum = function(nums) {
    let result = [];
    let n = nums.length;
    nums.sort((a, b) => a - b); // Sorting the array in ascending order
    for (let i = 0; i < n - 2; i++) {
      let target = -nums[i];
      let hashMap = new Map();
      for (let j = i + 1; j < n; j++) {
        let complement = target - nums[j];
        if (hashMap.has(complement)) {
          result.push([nums[i], complement, nums[j]]);
          while (j + 1 < n && nums[j] === nums[j + 1]) j++; // Skip duplicate values for j
        }
        hashMap.set(nums[j], j);
      }
      while (i + 1 < n && nums[i] === nums[i + 1]) i++; // Skip duplicate values for i
    }
    return result;
  };
  
  