import java.util.*;
public class LargestandSmallest {
    public static void findLargestAndSmallest(int arr[])
    {
        int large=Integer.MIN_VALUE;
        int small=Integer.MAX_VALUE;
        for(int i = 0 ; i< arr.length; i++)
        {
            if(arr[i]>large)
            {
                large=arr[i];
            }
            if(arr[i]<small)
            {
                small=arr[i];
            }
        }
        System.out.println("Largest element: "+large);
        System.out.println("Smallest element: "+small);

    }
    public static void main(String args[])
    {
        int arr[]={5, 2, 9, 1, 5, 6};
        findLargestAndSmallest(arr);
    }
}
