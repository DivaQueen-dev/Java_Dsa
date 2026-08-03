package BackTracking;

/**
* Problem: Grid Ways
* Find the number of ways to reach the bottom-right cell (N-1, M-1) from the top-left cell (0, 0)
* in an N x M grid. You can only move right or down.
*
* Recursive Approach:
* Time Complexity: O(2^(N + M))
* Space Complexity: O(N + M) (recursion stack)
*
* Mathematical Approach (Permutations):
* Time Complexity: O(N)
* Space Complexity: O(1)
*/
public class Gridways {

    // 1. Recursive approach to find number of grid ways
    public static int countGridWays(int i, int j, int n, int m) {
        // Base case: Reached target cell
        if (i == n - 1 && j == m - 1) {
            return 1;
        }
        // Corner case: Out of bounds
        if (i >= n || j >= m) {
            return 0;
        }

        // Sum of ways by moving right and moving down
        int waysRight = countGridWays(i, j + 1, n, m);
        int waysDown = countGridWays(i + 1, j, n, m);

        return waysRight + waysDown;
    }

    // 2. Mathematical approach using Combinations: Formula is (N-1 + M-1)! / ((N-1)! * (M-1)!)
    public static long countGridWaysMath(int n, int m) {
        int stepsDown = n - 1;
        int stepsRight = m - 1;
        int totalSteps = stepsDown + stepsRight;

        // We need to calculate combinations C(totalSteps, stepsDown)
        // Which is totalSteps! / (stepsDown! * stepsRight!)
        long ways = 1;
        int r = Math.min(stepsDown, stepsRight);
        for (int i = 1; i <= r; i++) {
            ways = ways * (totalSteps - r + i) / i;
        }

        return ways;
    }

    public static void main(String[] args) {
        int n = 3;
        int m = 4;

        System.out.println("Grid dimensions: " + n + " x " + m);

        // Recursive output
        int recursiveWays = countGridWays(0, 0, n, m);
        System.out.println("Number of ways (Recursive): " + recursiveWays);

        // Mathematical output
        long mathWays = countGridWaysMath(n, m);
        System.out.println("Number of ways (Mathematical): " + mathWays);
    }
}
