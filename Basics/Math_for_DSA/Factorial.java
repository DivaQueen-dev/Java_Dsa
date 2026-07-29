public class Factorial {
    static long fact(int n){
        long ans=1;
        for(int i=2;i<=n;i++) ans*=i;
        return ans;
    }
    public static void main(String[] args){
        System.out.println(fact(5));
    }
}
