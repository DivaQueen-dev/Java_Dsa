package SlidingWindow;

/**
* Problem: Maximum Sum Subarray of Size K
* Given an array of integers Arr of size N and a number K,
* return the maximum sum of a subarray of size K.
*
* Time Complexity: O(N)
* Space Complexity: O(1)
*/
public class MaxSumSubarray {

    public static long getMaxSum(int[] arr, int k) {
        int n = arr.length;
        if (n < k) {
            System.out.println("Invalid: Array size is smaller than window size.");
            return -1;
        }

        // Calculate sum of the first window
        long windowSum = 0;
        for (int i = 0; i < k; i++) {
            windowSum += arr[i];
        }

        long maxSum = windowSum;

        // Slide the window across the array
        for (int i = k; i < n; i++) {
            // Add current element, subtract first element of previous window
            windowSum += arr[i] - arr[i - k];
            maxSum = Math.max(maxSum, windowSum);
        }

        return maxSum;
    }

    public static void main(String[] args) {
        int[] arr = {100, 200, 300, 400};
        int k = 2;
        System.out.println("Maximum sum of subarray of size " + k + ": " + getMaxSum(arr, k));
    }
}
