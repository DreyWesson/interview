const nums = [1, 4, 2, 6, 8, 11];
const target = 18;

/**
 * Using TWO POINTER TECHNIQUE
 */
function threeSum(nums, target) {
    const n = nums.length;
    for (let i = 0; i < n - 2; i++) {
      let currentSum = target - nums[i];
      let hashSet = new Set();
      j = i + 1;
      while (j < n)
      {
        if (hashSet.has(currentSum - nums[j])) 
          return true;
        hashSet.add(nums[j]);
        j++;
      }
    }
    return false;
  }
  

/**
 * Using HASHING TECHNIQUE
 */
 function threeSum2(nums, target) {
    nums.sort((a,b) => a-b);
    let n = nums.length
    for (let i = 0; i < n - 2; i++) {
      let curr = nums[i];
      let left = i + 1;
      let right = n - 1
      while (left < right)
      {
          let sum = curr + nums[left] + nums[right];
        if (sum === target)
          return true;
        else if (sum < target)
          left++;
        else
          right--;
      }
    }
    return false
}

  
// console.log(threeSum2(nums, target)); 
console.log(threeSum3([-1,0,1,2,-1,-4])); 
