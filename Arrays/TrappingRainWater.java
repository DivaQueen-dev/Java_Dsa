/**
* Problem: Trapping Rain Water
* Given n non-negative integers representing an elevation map where the width of each bar is 1,
* compute how much water it can trap after raining.
*
* Time Complexity: O(N)
* Space Complexity: O(N)
*/
public class TrappingRainWater {
    public static int trap(int height[]) {
        int n = height.length;
        if (n == 0) return 0;

        // Array to store the maximum height to the left of each bar
        int maxleft[] = new int[n];
        maxleft[0] = height[0];
        for (int i = 1; i < n; i++) {
            maxleft[i] = Math.max(maxleft[i - 1], height[i]);
        }

        // Array to store the maximum height to the right of each bar
        int maxright[] = new int[n];
        maxright[n - 1] = height[n - 1];
        for (int i = n - 2; i >= 0; i--) {
            maxright[i] = Math.max(maxright[i + 1], height[i]);
        }

        // Calculate trapped water
        int trappedWater = 0;
        for (int i = 0; i < n; i++) {
            trappedWater += Math.min(maxleft[i], maxright[i]) - height[i];
        }

        return trappedWater;
    }

    public static void main(String args[]) {
        int height[] = {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1};
        System.out.println("Water trapped: " + trap(height));
    }
}

