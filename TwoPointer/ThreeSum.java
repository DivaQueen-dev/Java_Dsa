package TwoPointer;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
* Problem: 3Sum
* Given an integer array nums, return all the unique triplets [nums[i], nums[j], nums[k]]
* such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
*
* Time Complexity: O(N^2)
* Space Complexity: O(log N) to O(N) for sorting recursion/array storage
*/
public class ThreeSum {

    public static List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        int n = nums.length;
        if (n < 3) return result;

        // Sort the array to use two-pointers
        Arrays.sort(nums);

        for (int i = 0; i < n - 2; i++) {
            // Since array is sorted, if first element > 0, sum can never be 0
            if (nums[i] > 0) break;

            // Skip duplicate elements for the first position
            if (i > 0 && nums[i] == nums[i - 1]) continue;

            int left = i + 1;
            int right = n - 1;

            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];

                if (sum == 0) {
                    result.add(Arrays.asList(nums[i], nums[left], nums[right]));

                    // Skip duplicate elements for the second position
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    // Skip duplicate elements for the third position
                    while (left < right && nums[right] == nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return result;
    }

    public static void main(String[] args) {
        int[] nums = {-1, 0, 1, 2, -1, -4};
        List<List<Integer>> triplets = threeSum(nums);

        System.out.println("Input Array: " + Arrays.toString(nums));
        System.out.println("Triplets that sum to 0: " + triplets);
    }
}
