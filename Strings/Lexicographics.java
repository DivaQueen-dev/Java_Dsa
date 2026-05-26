

public class Lexicographics {
    public static void main(String[] args) {
        String str1 = "apple";
        String str2 = "banana";
        String str3 = "apple";

        System.out.println(str1.compareTo(str2)); // Negative value
        System.out.println(str2.compareTo(str1)); // Positive value
        System.out.println(str1.compareTo(str3)); // Zero
    }
}
