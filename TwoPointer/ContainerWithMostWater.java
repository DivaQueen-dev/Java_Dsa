package TwoPointer;

/**
* Problem: Container With Most Water
* Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai).
* n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0).
* Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
*
* Time Complexity: O(N)
* Space Complexity: O(1)
*/
public class ContainerWithMostWater {

    public static int maxArea(int[] height) {
        int maxWater = 0;
        int left = 0;
        int right = height.length - 1;

        while (left < right) {
            // Height is bounded by the shorter line
            int h = Math.min(height[left], height[right]);
            int width = right - left;
            int currentWater = h * width;

            maxWater = Math.max(maxWater, currentWater);

            // Move the pointer pointing to the shorter line to try and find a taller boundary
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxWater;
    }

    public static void main(String[] args) {
        int[] height = {1, 8, 6, 2, 5, 4, 8, 3, 7};
        System.out.println("Maximum water area: " + maxArea(height));
    }
}
