public class BinarySearch2DMatrix{
    static boolean search(int[][] a,int t){
        int r=a.length,c=a[0].length,s=0,e=r*c-1;
        while(s<=e){
            int m=s+(e-s)/2;
            int val=a[m/c][m%c];
            if(val==t)return true;
            if(val<t)s=m+1;
            else e=m-1;
        }
        return false;
    }
    public static void main(String[] args){
        int[][] a={{1,3,5},{7,9,11},{13,15,17}};
        System.out.println(search(a,9));
    }
}
