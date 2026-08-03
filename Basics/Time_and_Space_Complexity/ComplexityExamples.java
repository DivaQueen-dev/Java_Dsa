public class ComplexityExamples {

    static void constant(){ System.out.println(1); }          // O(1)

    static void linear(int n){
        for(int i=0;i<n;i++);
    }                                                         // O(n)

    static void quadratic(int n){
        for(int i=0;i<n;i++)
        for(int j=0;j<n;j++);
    }                                                         // O(n^2)

    static void logarithmic(int n){
        while(n>1) n/=2;
    }                                                         // O(log n)

    public static void main(String[] args){}
}
