#include <iostream>
#include <vector>
#include <unordered_set>

bool threeSum(std::vector<int>& nums, int target) {
    std::sort(nums.begin(), nums.end());
    int n = nums.size();

    for (int i = 0; i < n - 2; i++) {
        int left = i + 1, right = n - 1;
        std::cout << i <<std::endl;
        while (left < right) {
            int currentSum = nums[i] + nums[left] + nums[right];
            std::cout << "\033[033m"" i: ""\033[0m" << i << "\033[033m"" left: ""\033[0m" << left << "\033[033m"" right: ""\033[0m" << right << "\033[033m"" sum: ""\033[0m" << currentSum << std::endl;
            if (currentSum == target)
                return true;
            else if (currentSum < target)
                left++;
            else 
                right--;
        }
    }
    return false;
}

int main() {
    std::vector<int> nums = {1, 4, 2, 6, 8, 11};
    int target = 64;
    std::cout << std::boolalpha << threeSum(nums, target) << std::endl;

    return 0;
}
