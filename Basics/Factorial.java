import java.util.Scanner;

public class Factorial {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter a non-negative integer: ");
    
        if (!sc.hasNextInt()) {
            System.out.println("Error: Please enter a valid integer.");
            return;
        }

        int n = sc.nextInt();
        long fact = 1; 

        if (n < 0) {
            System.out.println("Factorial is not defined for negative numbers.");
        } else {
            
            for (int i = 2; i <= n; i++) {
                fact *= i;
            }
            System.out.println("Factorial of " + n + " is: " + fact);
        }

        sc.close();
    }
}