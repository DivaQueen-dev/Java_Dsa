public class Kadanesalgol {

    public static int maxSubarray(int arr[]) {

        // Edge case 1: empty array
        if(arr == null || arr.length == 0){
            return 0;   // or throw exception based on requirement
        }

        int currentSum = arr[0];
        int maxSum = arr[0];

        for(int i = 1; i < arr.length; i++){
            currentSum = Math.max(arr[i], currentSum + arr[i]);
            maxSum = Math.max(maxSum, currentSum);
        }

        return maxSum;
    }

    public static void main(String args[]){

        int arr[] = {1, -2, 3, -4, -5};

        int result = maxSubarray(arr);

        System.out.println("Max Subarray Sum = " + result);
    }
}