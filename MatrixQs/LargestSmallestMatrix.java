public class LargestSmallestMatrix{
    public static void main(String[] args){
        int[][] a={{1,7,3},{4,9,6},{2,8,5}};
        int min=a[0][0],max=a[0][0];
        for(int[] r:a)
        for(int x:r){
            if(x<min) min=x;
            if(x>max) max=x;
        }
        System.out.println("Smallest="+min);
        System.out.println("Largest="+max);
    }
}
