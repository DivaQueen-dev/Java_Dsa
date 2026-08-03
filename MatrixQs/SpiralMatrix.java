public class SpiralMatrix{
    static void spiral(int[][] a){
        int sr=0,sc=0,er=a.length-1,ec=a[0].length-1;
        while(sr<=er && sc<=ec){
            for(int j=sc;j<=ec;j++) System.out.print(a[sr][j]+" ");
            for(int i=sr+1;i<=er;i++) System.out.print(a[i][ec]+" ");
            for(int j=ec-1;j>=sc && sr!=er;j--) System.out.print(a[er][j]+" ");
            for(int i=er-1;i>sr && sc!=ec;i--) System.out.print(a[i][sc]+" ");
            sr++;sc++;er--;ec--;
        }
    }
    public static void main(String[] args){
        int[][] a={{1,2,3,4},{5,6,7,8},{9,10,11,12},{13,14,15,16}};
        spiral(a);
    }
}
