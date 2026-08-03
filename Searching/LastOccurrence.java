public class LastOccurrence{
    static int lastOcc(int[] arr,int key){
        int s=0,e=arr.length-1,ans=-1;
        while(s<=e){
            int mid=s+(e-s)/2;
            if(arr[mid]==key){ ans=mid; s=mid+1; }
            else if(arr[mid]<key) s=mid+1;
            else e=mid-1;
        }
        return ans;
    }
    public static void main(String[] args){
        int[] arr={1,2,2,2,3,4};
        System.out.println(lastOcc(arr,2));
    }
}
