public class StringCompression {
    public static String compressString(String str) {
        if (str == null || str.isEmpty()) {
            return str;
        }

        StringBuilder compressed = new StringBuilder();
        int count = 1;

        for (int i = 1; i < str.length(); i++) {
            if (str.charAt(i) == str.charAt(i - 1)) {
                count++;
            } else {
                compressed.append(str.charAt(i - 1)).append(count);
                count = 1;
            }
        }

        // Append the last character and its count
        compressed.append(str.charAt(str.length() - 1)).append(count);

        return compressed.length() < str.length() ? compressed.toString() : str;
    }
    //without using StringBuilder
    public static String compressStringWithoutBuilder(String str) {
        if (str == null || str.isEmpty()) {
            return str;
        }

        String compressed = "";
        int count = 1;

        for (int i = 1; i < str.length(); i++) {
            if (str.charAt(i) == str.charAt(i - 1)) {
                count++;
            } else {
                compressed += str.charAt(i - 1) + String.valueOf(count);
                count = 1;
            }
        }

        // Append the last character and its count
        compressed += str.charAt(str.length() - 1) + String.valueOf(count);

        return compressed.length() < str.length() ? compressed : str;
    }
    public static void main(String[] args) {
        String input = "aaabbcaaa";
        String compressed = compressString(input);
        System.out.println("Original: " + input);
        System.out.println("Compressed: " + compressed);
        String compressedWithoutBuilder = compressStringWithoutBuilder(input);
        System.out.println("Compressed without StringBuilder: " + compressedWithoutBuilder);
    }
}
