import java.util.Scanner;

public class ConvertLetter {
    // First letter of every word to uppercase
    public static String convertToUpperCase(String str) {
        if (str == null || str.isEmpty()) {
            return str;
        }

        StringBuilder result = new StringBuilder();
        boolean capitalizeNext = true;

        for (char ch : str.toCharArray()) {
            if (Character.isWhitespace(ch)) {
                capitalizeNext = true;
                result.append(ch);
            } else if (capitalizeNext) {
                result.append(Character.toUpperCase(ch));
                capitalizeNext = false;
            } else {
                result.append(ch);
            }
        }

        return result.toString();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a sentence:");
        String input = sc.nextLine();

        String output = convertToUpperCase(input);
        System.out.println("Converted: " + output);
    }
}
