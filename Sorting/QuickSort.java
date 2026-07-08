public class QuickSort {
    static void quickSort(int[] arr,int low,int high){
        if(low<high){
            int p=partition(arr,low,high);
            quickSort(arr,low,p-1);
            quickSort(arr,p+1,high);
        }
    }
    static int partition(int[] arr,int low,int high){
        int pivot=arr[high];
        int i=low-1;
        for(int j=low;j<high;j++){
            if(arr[j]<=pivot){
                i++;
                int t=arr[i]; arr[i]=arr[j]; arr[j]=t;
            }
        }
        i++;
        int t=arr[i]; arr[i]=arr[high]; arr[high]=t;
        return i;
    }
    static void print(int[] arr){
        for(int x:arr) System.out.print(x+" ");
    }
    public static void main(String[] args){
        int[] arr={6,3,9,5,2,8};
        quickSort(arr,0,arr.length-1);
        print(arr);
    }
}