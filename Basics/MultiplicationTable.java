import java.util.Scanner;

public class MultiplicationTable {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int n = scanner.nextInt();
        System.out.print("Enter starting range: ");
        int start = scanner.nextInt();
        System.out.print("Enter ending range: ");
        int end = scanner.nextInt();
        scanner.close();
        
        if (start > end) {
            System.out.println("Invalid range: start must be <= end.");
            return;
        }
        
        for (int i = start; i <= end; i++) {
            System.out.println(n + " * " + i + " = " + (n * i));
        }
    }
}
