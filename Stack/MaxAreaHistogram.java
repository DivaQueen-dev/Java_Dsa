package Stack;

import java.util.Stack;

/**
* Problem: Largest Rectangle in Histogram (Max Area Histogram).
* Find the area of the largest rectangle in a given histogram.
*
* Time Complexity: O(N)
* Space Complexity: O(N) for stacks
*/
public class MaxAreaHistogram {

    public static int getMaxArea(int[] heights) {
        int n = heights.length;
        int[] nsr = new int[n]; // Next Smaller to Right index
        int[] nsl = new int[n]; // Next Smaller to Left index

        Stack<Integer> s = new Stack<>();

        // 1. Calculate NSR (Next Smaller to Right)
        for (int i = n - 1; i >= 0; i--) {
            while (!s.isEmpty() && heights[s.peek()] >= heights[i]) {
                s.pop();
            }
            if (s.isEmpty()) {
                nsr[i] = n; // Boundary is beyond right
            } else {
                nsr[i] = s.peek();
            }
            s.push(i);
        }

        s.clear();

        // 2. Calculate NSL (Next Smaller to Left)
        for (int i = 0; i < n; i++) {
            while (!s.isEmpty() && heights[s.peek()] >= heights[i]) {
                s.pop();
            }
            if (s.isEmpty()) {
                nsl[i] = -1; // Boundary is beyond left
            } else {
                nsl[i] = s.peek();
            }
            s.push(i);
        }

        // 3. Compute Max Area
        int maxArea = 0;
        for (int i = 0; i < n; i++) {
            int width = nsr[i] - nsl[i] - 1;
            int currentArea = heights[i] * width;
            maxArea = Math.max(maxArea, currentArea);
        }

        return maxArea;
    }

    public static void main(String[] args) {
        int[] heights = {2, 1, 5, 6, 2, 3};
        System.out.println("Maximum rectangular area in histogram: " + getMaxArea(heights));
    }
}
