package Arrays;

import java.util.Arrays;

/**
* Demonstrates the Two-Pointer technique.
* This technique uses two index pointers to traverse a data structure (typically an array or list)
* from both ends towards the center, or at different speeds.
*
* Time Complexity: O(N)
* Space Complexity: O(1)
*/
public class TwoPointers {

    // Reverses the elements of an array in place
    public static void reverse(int[] arr) {
        int left = 0;
        int right = arr.length - 1;

        while (left < right) {
            // Swap elements at left and right indices
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            // Move pointers closer to the center
            left++;
            right--;
        }
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6};
        System.out.println("Original array: " + Arrays.toString(arr));

        reverse(arr);
        System.out.println("Reversed array: " + Arrays.toString(arr));
    }
}
