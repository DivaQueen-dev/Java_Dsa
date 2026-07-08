public class MergeSort {
    static void mergeSort(int[] arr,int si,int ei){
        if(si>=ei) return;
        int mid=si+(ei-si)/2;
        mergeSort(arr,si,mid);
        mergeSort(arr,mid+1,ei);
        merge(arr,si,mid,ei);
    }
    static void merge(int[] arr,int si,int mid,int ei){
        int[] temp=new int[ei-si+1];
        int i=si,j=mid+1,k=0;
        while(i<=mid && j<=ei){
            if(arr[i]<=arr[j]) temp[k++]=arr[i++];
            else temp[k++]=arr[j++];
        }
        while(i<=mid) temp[k++]=arr[i++];
        while(j<=ei) temp[k++]=arr[j++];
        for(k=0,i=si;k<temp.length;k++,i++) arr[i]=temp[k];
    }
    static void print(int[] arr){
        for(int x:arr) System.out.print(x+" ");
    }
    public static void main(String[] args){
        int[] arr={6,3,9,5,2,8};
        mergeSort(arr,0,arr.length-1);
        print(arr);
    }
}