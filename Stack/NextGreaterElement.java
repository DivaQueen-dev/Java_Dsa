package Stack;

import java.util.Arrays;
import java.util.Stack;

/**
* Problem: Next Greater Element on the right.
* Given an array, find the next greater element for each element to its right.
* If none exists, output -1.
*
* Time Complexity: O(N) since each element is pushed/popped at most once
* Space Complexity: O(N) for stack
*/
public class NextGreaterElement {

    public static int[] getNextGreater(int[] arr) {
        int n = arr.length;
        int[] result = new int[n];
        Stack<Integer> s = new Stack<>();

        // Traverse from right to left (since we look for greater on right)
        for (int i = n - 1; i >= 0; i--) {
            // Pop smaller or equal elements since they can't be next greater for any left element
            while (!s.isEmpty() && s.peek() <= arr[i]) {
                s.pop();
            }

            // If stack is empty, no greater element exists to the right
            if (s.isEmpty()) {
                result[i] = -1;
            } else {
                result[i] = s.peek();
            }

            // Push current element for left neighbors
            s.push(arr[i]);
        }

        return result;
    }

    public static void main(String[] args) {
        int[] arr = {6, 8, 0, 1, 3};
        int[] nextGreater = getNextGreater(arr);

        System.out.println("Original Array:     " + Arrays.toString(arr));
        System.out.println("Next Greater Array: " + Arrays.toString(nextGreater));
    }
}
