public class PalindromeTriangle {
    public static void main(String[] args) {
        int n = 5; // number of rows

        for (int i = 1; i <= n; i++) {
            // Print leading spaces
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }

            // Print increasing characters
            char ch = 'A';
            for (int k = 1; k <= i; k++) {
                System.out.print(ch);
                ch++;
            }

            // Print decreasing characters (to form palindrome)
            ch -= 2; // step back one character
            for (int k = 1; k < i; k++) {
                System.out.print(ch);
                ch--;
            }

            System.out.println();
        }
    }
}
