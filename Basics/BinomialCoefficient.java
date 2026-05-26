import java.util.Scanner;

public class BinomialCoefficient {
    
    public static int factorial(int n) {
        int fact = 1;
        for (int i = 1; i <= n; i++) {
            fact *= i;
        }
        return fact;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter n: ");
        int n = sc.nextInt();
        System.out.print("Enter r: ");
        int r = sc.nextInt();
        if (r > n) {
            System.out.println("Invalid input: r cannot be greater than n");
        } else {
            int result = factorial(n) / (factorial(r) * factorial(n - r));
            System.out.println("Binomial Coefficient C(" + n + ", " + r + ") = " + result);
        }
    }
}
