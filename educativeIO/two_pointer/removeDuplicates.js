// var removeDuplicates = function(nums) {
//     const memo = {};
//     let right = 0;
//     let left = 0;

//     while (right < nums.length) {
//         if (memo[nums[right]] !== undefined)
//             memo[nums[right]] += 1;
//         else
//             memo[nums[right]] = 1;
//         if (memo[nums[right]] <= 2)
//         {
//             nums[left] = nums[right]
//             left++;
//         }
//         right++
//     }
//     return (left)
// };

var removeDuplicates = function(nums) {
    let memo = 0;
    let right = 0;
    let left = 0;

    while (right < nums.length) {
        memo = 0;
        while (right < nums.length && nums[left] === nums[right])
        {
            if (memo <= 2)
            {
                nums[left] = nums[right]
                left++;
            }
            memo++;
            right++
        }
        // left++;
        while (right < nums.length && nums[left] != nums[right]) {
            // memo = 0;
            nums[left] = nums[right]
            left++;
        right++;
        }

    }
    console.log(JSON.stringify(nums));
    return (left)
};

removeDuplicates([1,1,1,2,2,3]);