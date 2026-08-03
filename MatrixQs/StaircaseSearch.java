public class StaircaseSearch{
    static boolean search(int[][] a,int key){
        int r=0,c=a[0].length-1;
        while(r<a.length && c>=0){
            if(a[r][c]==key) return true;
            else if(key<a[r][c]) c--;
            else r++;
        }
        return false;
    }
    public static void main(String[] args){
        int[][] a={{10,20,30,40},{15,25,35,45},{27,29,37,48},{32,33,39,50}};
        System.out.println(search(a,29));
    }
}
