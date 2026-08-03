public class BinarySearch {
    static int binarySearch(int[] arr,int key){
        int s=0,e=arr.length-1;
        while(s<=e){
            int mid=s+(e-s)/2;
            if(arr[mid]==key) return mid;
            if(arr[mid]<key) s=mid+1;
            else e=mid-1;
        }
        return -1;
    }
    public static void main(String[] args){
        int[] arr={2,4,6,8,10,12};
        System.out.println(binarySearch(arr,8));
    }
}
