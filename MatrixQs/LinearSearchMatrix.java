public class LinearSearchMatrix{
    static boolean search(int[][] a,int key){
        for(int[] row:a)
            for(int x:row)
                if(x==key) return true;
        return false;
    }
    public static void main(String[] args){
        int[][] a={{1,2,3},{4,5,6},{7,8,9}};
        System.out.println(search(a,5));
    }
}