public class GCD_LCM {
    static int gcd(int a,int b){
        while(b!=0){
            int t=b; b=a%b; a=t;
        }
        return a;
    }
    static int lcm(int a,int b){
        return a/gcd(a,b)*b;
    }
    public static void main(String[] args){
        System.out.println(gcd(18,24));
        System.out.println(lcm(18,24));
    }
}
