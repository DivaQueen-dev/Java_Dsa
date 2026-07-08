public class TransposeMatrix{
    public static void main(String[] args){
        int[][] a={{1,2,3},{4,5,6}};
        int[][] t=new int[a[0].length][a.length];
        for(int i=0;i<a.length;i++)
            for(int j=0;j<a[0].length;j++)
                t[j][i]=a[i][j];
        for(int[] r:t){
            for(int x:r) System.out.print(x+" ");
            System.out.println();
        }
    }
}