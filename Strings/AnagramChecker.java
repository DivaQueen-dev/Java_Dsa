import java.util.Arrays;

public class AnagramChecker {
    public static void main(String args[]) {

        String str1 = "race";
        String str2 = "care";

        // Convert to lowercase
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();

        // Check lengths
        if(str1.length() == str2.length()) {

            // Convert strings into char array
            char[] arr1 = str1.toCharArray();
            char[] arr2 = str2.toCharArray();

            // Sort arrays
            Arrays.sort(arr1);
            Arrays.sort(arr2);

            // Compare arrays
            boolean result = Arrays.equals(arr1, arr2);

            if(result) {
                System.out.println("Strings are anagrams");
            } else {
                System.out.println("Strings are not anagrams");
            }

        } else {
            System.out.println("Strings are not anagrams");
        }
    }
}


        // String s1 = new String("Hello");
        // String s2 = s1.intern();

        // String s3 = "Hello";

        // System.out.println(s2 == s3);
        //it is true because both s2 and s3 refer to the same string literal "Hello" in the string pool. 
        // The intern() method ensures that s2 points to the string literal in the pool, which is the same as s3.

