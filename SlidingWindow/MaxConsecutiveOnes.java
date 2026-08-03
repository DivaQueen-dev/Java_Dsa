package SlidingWindow;

/**
* Problem: Max Consecutive Ones III
* Given a binary array nums and an integer k, return the maximum number of
* consecutive 1's in the array if you can flip at most k 0's.
*
* Time Complexity: O(N)
* Space Complexity: O(1)
*/
public class MaxConsecutiveOnes {

    public static int longestOnes(int[] nums, int k) {
        int left = 0;
        int maxLen = 0;
        int zeroCount = 0;

        for (int right = 0; right < nums.length; right++) {
            if (nums[right] == 0) {
                zeroCount++;
            }

            // Shrink window if zero count exceeds K
            while (zeroCount > k) {
                if (nums[left] == 0) {
                    zeroCount--;
                }
                left++;
            }

            // Update max length of 1s
            maxLen = Math.max(maxLen, right - left + 1);
        }

        return maxLen;
    }

    public static void main(String[] args) {
        int[] nums = {1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0};
        int k = 2;

        int result = longestOnes(nums, k);
        System.out.println("Max consecutive ones with at most " + k + " flips: " + result);
    }
}
