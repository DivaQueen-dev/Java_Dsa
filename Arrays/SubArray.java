import java.util.*;
public class SubArray {
    public static void printsubArray(int arr[])
        {
            int ts=0;
            for(int i = 0 ; i<arr.length;i++)
            {
                for(int j=i ; j<arr.length;j++)
                {
                    for(int k=i ; k<=j;k++)
                    {
                        System.out.print(arr[k]+" ");
                        
                    }
                 ts++;
                System.out.println();
                }
                System.out.println();
            }
            System.out.println("Total subarrays are "+ts);
        }
    public static void main(String args[])    {
        int nums[]={1,2,3,4,5};
        printsubArray(nums);
    }
}