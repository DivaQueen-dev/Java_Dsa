public class SearchRotatedSortedArray{
    static int search(int[] a,int t){
        int s=0,e=a.length-1;
        while(s<=e){
            int m=s+(e-s)/2;
            if(a[m]==t) return m;
            if(a[s]<=a[m]){
                if(t>=a[s]&&t<a[m]) e=m-1; else s=m+1;
            }else{
                if(t>a[m]&&t<=a[e]) s=m+1; else e=m-1;
            }
        }
        return -1;
    }
    public static void main(String[] args){
        int[] a={4,5,6,7,0,1,2};
        System.out.println(search(a,0));
    }
}
