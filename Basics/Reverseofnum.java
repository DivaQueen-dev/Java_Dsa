public class Reverseofnum {
    public static void main(String[] args) {
        int n = 180907;
        int rev = 0;

        while (n > 0) {
            int lastDigit = n % 10; // Extract the last digit
            rev = (rev * 10) + lastDigit; // Append it to the reversed number
            n = n / 10; // Remove the last digit from n
        }
        System.out.print(rev);
    }
}
