public class CountingSort {
    static void countingSort(int[] arr){
        int largest=arr[0];
        for(int x:arr) if(x>largest) largest=x;
        int[] count=new int[largest+1];
        for(int x:arr) count[x]++;
        int j=0;
        for(int i=0;i<count.length;i++){
            while(count[i]>0){
                arr[j++]=i;
                count[i]--;
            }
        }
    }
    static void print(int[] arr){
        for(int x:arr) System.out.print(x+" ");
    }
    public static void main(String[] args){
        int[] arr={1,4,1,3,2,4,3,7};
        countingSort(arr);
        print(arr);
    }
}
