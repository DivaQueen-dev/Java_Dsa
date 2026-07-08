public class SelectionSort {
    static void selectionSort(int[] arr){
        for(int i=0;i<arr.length-1;i++){
            int min=i;
            for(int j=i+1;j<arr.length;j++)
                if(arr[j]<arr[min]) min=j;
            int temp=arr[min];
            arr[min]=arr[i];
            arr[i]=temp;
        }
    }
    static void print(int[] arr){
        for(int x:arr) System.out.print(x+" ");
    }
    public static void main(String[] args){
        int[] arr={5,4,1,3,2};
        selectionSort(arr);
        print(arr);
    }
}