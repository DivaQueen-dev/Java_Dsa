package TwoPointer;

import java.util.Arrays;

/**
* Problem: Two Sum II - Input Array Is Sorted.
* Find two numbers in a 1-indexed sorted array that add up to a target number.
*
* Time Complexity: O(N)
* Space Complexity: O(1)
*/
public class TwoSumSorted {

    public static int[] twoSum(int[] numbers, int target) {
        int left = 0;
        int right = numbers.length - 1;

        while (left < right) {
            int currentSum = numbers[left] + numbers[right];

            if (currentSum == target) {
                // Return 1-indexed positions
                return new int[]{left + 1, right + 1};
            } else if (currentSum < target) {
                left++; // Increase sum by moving left pointer right
            } else {
                right--; // Decrease sum by moving right pointer left
            }
        }

        return new int[]{-1, -1}; // No solution found
    }

    public static void main(String[] args) {
        int[] numbers = {2, 7, 11, 15};
        int target = 9;

        int[] result = twoSum(numbers, target);
        System.out.println("Sorted Array: " + Arrays.toString(numbers));
        System.out.println("Target: " + target);
        System.out.println("Indices (1-indexed): " + Arrays.toString(result));
    }
}
