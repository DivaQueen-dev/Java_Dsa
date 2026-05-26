public class Palindrome{
    public static boolean isPalindrome(int num) {
        int rev = 0;
        int original = num;

        while (num > 0) {
            rev = rev * 10 + (num % 10); // build reverse directly
            num = num / 10;              // remove last digit
        }

        return original == rev; // directly return comparison result
    }

    public static void main(String[] args) {
        int num = 12321;
        if (isPalindrome(num)) {
            System.out.println("The number is palindrome");
        } else {
            System.out.println("The number is not palindrome");
        }
    }
}
