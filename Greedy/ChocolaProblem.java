package Greedy;

import java.util.Arrays;
import java.util.Collections;

/**
* Problem: Chocola Problem (Minimizing Cost to Cut a Board)
* We have a bar of chocolate of size N x M. We need to break it into 1x1 pieces.
* Cuts can be made horizontally and vertically with given costs.
* The cost of making a cut is: (cut cost) * (number of segments/pieces generated so far).
* Find the minimum cost to break the chocolate.
*
* Strategy: Always perform the most expensive cuts first to minimize the multiplication factor.
* Time Complexity: O(N log N + M log M)
* Space Complexity: O(1)
*/
public class ChocolaProblem {

    public static int getMinCutCost(Integer[] horizontalCuts, Integer[] verticalCuts) {
        // Sort cuts in descending order of cost
        Arrays.sort(horizontalCuts, Collections.reverseOrder());
        Arrays.sort(verticalCuts, Collections.reverseOrder());

        int h = 0; // horizontal cuts pointer
        int v = 0; // vertical cuts pointer

        int hp = 1; // horizontal pieces count
        int vp = 1; // vertical pieces count

        int totalCost = 0;

        while (h < horizontalCuts.length && v < verticalCuts.length) {
            // If vertical cut is costlier, do vertical cut first
            if (verticalCuts[v] >= horizontalCuts[h]) {
                totalCost += verticalCuts[v] * hp;
                vp++;
                v++;
            } else {
                // Else do horizontal cut
                totalCost += horizontalCuts[h] * vp;
                hp++;
                h++;
            }
        }

        // Add remaining cuts
        while (h < horizontalCuts.length) {
            totalCost += horizontalCuts[h] * vp;
            hp++;
            h++;
        }

        while (v < verticalCuts.length) {
            totalCost += verticalCuts[v] * hp;
            vp++;
            v++;
        }

        return totalCost;
    }

    public static void main(String[] args) {
        int n = 4, m = 6;
        Integer[] horizontalCuts = {2, 1, 3}; // size n-1
        Integer[] verticalCuts = {4, 1, 2, 4, 3}; // size m-1

        int minCost = getMinCutCost(horizontalCuts, verticalCuts);
        System.out.println("Minimum cost to cut chocolate: " + minCost);
    }
}
