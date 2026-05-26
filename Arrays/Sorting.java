import java.util.*;
class Sorting
{
    //bubble sort
    public static void bubbleSort(int arr[])
    {
        for(int i=0;i<arr.length-1;i++)
        {
            int count = 0;
            for(int j=0;j<arr.length-1-i;j++)
            {
                if(arr[j] > arr[j+1])
                {
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    count++; 
                }
            }
            if(count == 0) break;
        }
    }
    //selection sort
       public static void selectionsort(int arr[])
    {
        for(int i=0;i<arr.length-1;i++)
        {
        int minpos=i;
            for(int j=i+1;j<arr.length;j++)
            {
                if(arr[minpos]>arr[j])
                {
                    minpos=j;
                }
            }
            int temp=arr[minpos];
            arr[minpos]=arr[i];
            arr[i]=temp;
        }
    }
    //insertion sort
    public static void insertionsort(int arr[])
    {
        for(int i=1;i<arr.length;i++)
        {
            int current=arr[i];
            int j=i-1;
            while(j>=0 && arr[j]>current)
            {
                arr[j+1]=arr[j];
                j--;
            }
            arr[j+1]=current;
        }
    }
    //inbuilt sort
    public static void inbuiltSort(int arr[])
    {
        Arrays.sort(arr);
    }
    //counting sort
    public static void countingSort(int arr[])
    {
        int largest=Integer.MIN_VALUE;
        for(int i=0;i<arr.length;i++)
        {
            largest=Math.max(largest,arr[i]);
        }
        int count[]=new int[largest+1];
        for(int i=0;i<arr.length;i++)
        {
            count[arr[i]]++;
        }
        int j=0;
        for(int i=0;i<count.length;i++)
        {
            while(count[i]>0)
            {
                arr[j]=i;
                j++;
                count[i]--;
            }
        }
    }
    //print array
    public static void printArray(int arr[])
    {
        for(int i=0;i<arr.length;i++)
        {
            System.out.print(arr[i]+" ");
        }
        System.out.println();
    }

    //main method
    public static void main(String args[])
    {
        int arr[]={3 , 5 , 2 , 1 , 4};
        bubbleSort(arr);
        printArray(arr);
        int arr1[]={3 , 5 , 2 , 1 , 4};
        selectionsort(arr1);
        printArray(arr1);
        int arr2[]={3 , 5 , 2 , 1 , 4};
        insertionsort(arr2);
        printArray(arr2);
        int arr3[]={3 , 5 , 2 , 1 , 4};
        inbuiltSort(arr3);
        printArray(arr3);
        int arr4[]={3 , 5 , 2 , 1 , 4};
        countingSort(arr4);
        printArray(arr4);
    }
}
