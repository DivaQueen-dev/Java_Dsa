package Greedy;

import java.util.Arrays;
import java.util.Comparator;

/**
* Problem: Fractional Knapsack
* Given weights and values of N items, we need to put these items in a knapsack
* of capacity W to get the maximum total value in the knapsack.
* Items can be broken into smaller pieces (fractions allowed).
*
* Time Complexity: O(N log N) for sorting the ratio.
* Space Complexity: O(N) for storing items with their ratio.
*/
public class FractionalKnapsack {

    static class Item {
        int index;
        int val;
        int weight;
        double ratio;

        public Item(int index, int val, int weight) {
            this.index = index;
            this.val = val;
            this.weight = weight;
            this.ratio = (double) val / weight;
        }
    }

    public static double getMaxValue(int[] val, int[] weight, int capacity) {
        int n = val.length;
        Item[] items = new Item[n];

        for (int i = 0; i < n; i++) {
            items[i] = new Item(i, val[i], weight[i]);
        }

        // Sort items in descending order of their value/weight ratio
        Arrays.sort(items, (a, b) -> Double.compare(b.ratio, a.ratio));

        double totalValue = 0.0;
        int currentCapacity = capacity;

        for (int i = 0; i < n; i++) {
            if (currentCapacity >= items[i].weight) {
                // Take the whole item
                totalValue += items[i].val;
                currentCapacity -= items[i].weight;
            } else {
                // Take fractional part of the item
                totalValue += items[i].ratio * currentCapacity;
                currentCapacity = 0;
                break;
            }
        }

        return totalValue;
    }

    public static void main(String[] args) {
        int[] val = {60, 100, 120};
        int[] weight = {10, 20, 30};
        int capacity = 50;

        double maxValue = getMaxValue(val, weight, capacity);
        System.out.println("Maximum value in Knapsack: " + maxValue);
    }
}
