public class FindPeakElement{
    static int peak(int[] a){
        int s=0,e=a.length-1;
        while(s<e){
            int m=s+(e-s)/2;
            if(a[m]>a[m+1]) e=m;
            else s=m+1;
        }
        return s;
    }
    public static void main(String[] args){
        int[] a={1,3,20,4,1,0};
        System.out.println(peak(a));
    }
}
