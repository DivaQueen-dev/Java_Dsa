package Greedy;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;

/**
* Problem: Activity Selection
* Select the maximum number of activities that can be performed by a single person or machine,
* assuming that a person can only work on a single activity at a time.
*
* Time Complexity: O(N log N) if unsorted, O(N) if already sorted by end time.
* Space Complexity: O(N) for storing the activity mappings.
*/
public class ActivitySelection {

    // Static class representing an Activity
    static class Activity {
        int index;
        int start;
        int end;

        public Activity(int index, int start, int end) {
            this.index = index;
            this.start = start;
            this.end = end;
        }
    }

    public static ArrayList<Integer> selectActivities(int[] start, int[] end) {
        int n = start.length;
        Activity[] activities = new Activity[n];

        for (int i = 0; i < n; i++) {
            activities[i] = new Activity(i, start[i], end[i]);
        }

        // Sort activities based on their end times (Greedy Choice Property)
        Arrays.sort(activities, Comparator.comparingInt(a -> a.end));

        ArrayList<Integer> selectedActivities = new ArrayList<>();

        // The first activity is always selected
        selectedActivities.add(activities[0].index);
        int lastEndTime = activities[0].end;

        for (int i = 1; i < n; i++) {
            // If the start time of this activity is greater than or equal to
            // the end time of the last selected activity, select it
            if (activities[i].start >= lastEndTime) {
                selectedActivities.add(activities[i].index);
                lastEndTime = activities[i].end;
            }
        }

        return selectedActivities;
    }

    public static void main(String[] args) {
        int[] start = {1, 3, 0, 5, 8, 5};
        int[] end = {2, 4, 6, 7, 9, 9};

        ArrayList<Integer> result = selectActivities(start, end);

        System.out.println("Maximum number of activities: " + result.size());
        System.out.print("Selected activity indices (0-indexed): ");
        for (int index : result) {
            System.out.print(index + " ");
        }
        System.out.println();
    }
}
