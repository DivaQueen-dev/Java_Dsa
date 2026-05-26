import java.util.*;
public class BinarySearch {

    // Binary search method
    public static int binarySearch(int[] arr, int key) {
        int start = 0;
        int end = arr.length - 1;

        while (start <= end) {
            int mid = (start + end) / 2;

            if (arr[mid] == key) {
                return mid; // return index if found
            }
            if (arr[mid] < key) {
                start = mid + 1; // search right half
            } else {
                end = mid - 1;   // search left half
            }
        }
        return -1; // not found
    }

    // Main method to test
    public static void main(String[] args) {
        int[] nums = {2, 3, 5, 6, 8, 9, 10, 22, 37};
        int key = 10;

        int ans = binarySearch(nums, key);

        if (ans == -1) {
            System.out.println("Element not found");
        } else {
            System.out.println("Element found at index " + ans);
        }
    }
}
