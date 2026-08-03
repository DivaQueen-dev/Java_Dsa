public class LastOccurrence {
    static int lastOcc(int[] arr,int key,int i){
        if(i==arr.length) return -1;
        int found=lastOcc(arr,key,i+1);
        if(found==-1&&arr[i]==key) return i;
        return found;
    }
    public static void main(String[] args){
        int[] arr={2,5,8,5,7};
        System.out.println(lastOcc(arr,5,0));
    }
}
