import java.util.*;
public class SubArraySum {
   public static void printSubArraySums(int arr[]) {
    int ts = 0;
    int maxsum=Integer.MIN_VALUE;
    for (int i = 0; i < arr.length; i++) {
        int currentSum = 0;
        
        for (int j = i; j < arr.length; j++) {
          
            currentSum += arr[j]; 
            
            System.out.println("Sum of subarray [" + i + " to " + j + "]: " + currentSum);
            maxsum=Math.max(maxsum ,currentSum);
            ts++;
        }
        System.out.println();
    }
    System.out.println("Total subarrays are " + ts);
    System.out.println("Maximum sum is " + maxsum);
}
public static void main(String[] args) {
    
        int nums[]={-1,-2,-3,-4,-5};
        printSubArraySums(nums);
    }
}