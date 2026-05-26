import java. util.*;
public class LinearSearch {
    public static int LinearSearch(String arr[],String Target)
    {
        for(int i=0 ; i<arr.length; i++)
        {
            if(arr[i]==Target)
            {
                return i;
            }
        }
        return -1;
    } 
    public static void main(String args[])
    {
        String arr[]={"apple", "banana", "cherry", "date"};
        String target="cherry";
        System.out.println("Target found at index: "+LinearSearch(arr,target));
    }
}
