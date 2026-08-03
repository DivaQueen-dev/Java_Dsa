package Greedy;

import java.util.ArrayList;
import java.util.Arrays;

/**
* Problem: Job Sequencing with Deadlines
* Given a set of jobs where each job has a deadline and associated profit,
* find the maximum profit sequence of jobs.
*
* Time Complexity: O(N log N + N * maxDeadline)
* Space Complexity: O(maxDeadline) to track slot allocation.
*/
public class JobSequencing {

    static class Job {
        char id;
        int deadline;
        int profit;

        public Job(char id, int deadline, int profit) {
            this.id = id;
            this.deadline = deadline;
            this.profit = profit;
        }
    }

    public static void printJobSequence(Job[] jobs) {
        // Sort jobs in descending order of profit
        Arrays.sort(jobs, (a, b) -> Integer.compare(b.profit, a.profit));

        // Find the maximum deadline to size the slots array
        int maxDeadline = 0;
        for (Job job : jobs) {
            maxDeadline = Math.max(maxDeadline, job.deadline);
        }

        // Slots to keep track of filled time slots
        char[] result = new char[maxDeadline];
        boolean[] slots = new boolean[maxDeadline];
        int jobCount = 0;
        int totalProfit = 0;

        for (Job job : jobs) {
            // Find a free slot for this job, starting from the latest slot possible
            for (int j = Math.min(maxDeadline, job.deadline) - 1; j >= 0; j--) {
                if (!slots[j]) {
                    slots[j] = true;
                    result[j] = job.id;
                    jobCount++;
                    totalProfit += job.profit;
                    break;
                }
            }
        }

        System.out.println("Scheduled " + jobCount + " jobs for total profit of " + totalProfit);
        System.out.print("Job execution order: ");
        for (char id : result) {
            if (id != '\u0000') {
                System.out.print(id + " ");
            }
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Job[] jobs = {
            new Job('A', 2, 100),
            new Job('B', 1, 19),
            new Job('C', 2, 27),
            new Job('D', 1, 25),
            new Job('E', 3, 15)
        };

        printJobSequence(jobs);
    }
}
