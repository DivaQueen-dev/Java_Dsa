public class SquareRoot{
    static int sqrt(int n){
        int s=0,e=n,ans=0;
        while(s<=e){
            int m=s+(e-s)/2;
            long sq=1L*m*m;
            if(sq==n) return m;
            if(sq<n){ans=m;s=m+1;}
            else e=m-1;
        }
        return ans;
    }
    public static void main(String[] args){System.out.println(sqrt(40));}
}
