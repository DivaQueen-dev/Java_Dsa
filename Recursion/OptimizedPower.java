public class OptimizedPower {
    static int power(int x,int n){
        if(n==0) return 1;
        int half=power(x,n/2);
        int res=half*half;
        if(n%2!=0) res*=x;
        return res;
    }
    public static void main(String[] args){
        System.out.println(power(2,10));
    }
}
