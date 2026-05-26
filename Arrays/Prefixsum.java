import java.util.*;
public class Prefixsum {
    public static void prefixSum(int arr[])
    {
        int prefix[]=new int [arr.length];
        prefix[0]=arr[0];
        for(int i=1;i<arr.length;i++)
        {
            prefix[i]=prefix[i-1]+arr[i];
        }
        int maxsum=prefix[0];
        for(int i = 0 ; i<arr.length;i++)
        {
            for(int j=i ; j<arr.length;j++)
            {
                int sum;
                sum=i==0?prefix[j]:prefix[j]-prefix[i-1];
                if(sum>maxsum)
                {
                    maxsum=sum;
                }
            }
        }
        System.out.println(maxsum);
    }
    public static void main(String[] args) {
        int nums[]={1,-2,6,-1,3};
        prefixSum(nums);
    }
}
