public class BinaryStrings {
    static void print(int n,int last,String s){
        if(n==0){ System.out.println(s); return; }
        print(n-1,0,s+"0");
        if(last==0) print(n-1,1,s+"1");
    }
    public static void main(String[] args){ print(3,0,""); }
}