import java.util.*;
public class Reverse {
    public static void reverse(int arr[])
    {
        int start=0, last=arr.length-1;
        while(start<last)
{
    //   arr[start]=arr[start]+arr[last];
    // arr[last]=arr[start]-arr[last];
    // arr[start]=arr[start]-arr[last];
    // start++;
    // last--;

    int tem=arr[start];
    arr[start]=arr[last];
    arr[last]=tem;
    start++;
    last--;
  
}

    }
    public static void main(String [] args)

{
    int arr[]={1,2,3,4,5};
    reverse(arr);
    System.out.println(Arrays.toString(arr));
}
}
