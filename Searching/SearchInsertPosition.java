public class SearchInsertPosition{
    static int searchInsert(int[] a,int t){
        int s=0,e=a.length-1;
        while(s<=e){
            int m=s+(e-s)/2;
            if(a[m]==t) return m;
            if(a[m]<t) s=m+1;
            else e=m-1;
        }
        return s;
    }
    public static void main(String[] args){
        int[] a={1,3,5,6};
        System.out.println(searchInsert(a,2));
    }
}
