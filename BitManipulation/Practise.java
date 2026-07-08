package BitManipulation;

public class Practise {
    public static void main(String[] args) {
        int num = 5; // Binary: 101
        int result = addOne(num);
        System.out.println("Result of adding 1 to " + num + ": " + result); // Should print 6 (Binary: 110)
        char uppercaseChar = 'A';
        char lowercaseChar = toLowerCase(uppercaseChar);
        System.out.println("Lowercase of " + uppercaseChar + ": " + lowercaseChar); // Should print 'a'
        int[] arr = {1, 2, 3, 4, 4, 5};
        findMissingAndDuplicate(arr);
    }
 //Add 1 Using Bit Manipulation
    public static int addOne(int num) {
        return num + 1;
    }
    //Convert Uppercase to Lowercase Using Bits
    public static char toLowerCase(char ch) {
        if (ch >= 'A' && ch <= 'Z') {
            return (char)(ch + 32); // Convert uppercase to lowercase by adding 32
        }
        return ch; // Return the character unchanged if it's not uppercase
    }
    //missing and duplicate number in an array
    public static void findMissingAndDuplicate(int[] arr) {
        int n = arr.length;
        int xor = 0;

        // Step 1: XOR all elements in the array and numbers from 1 to n
        for (int i = 0; i < n; i++) {
            xor ^= arr[i]; // XOR with array elements
            xor ^= (i + 1); // XOR with numbers from 1 to n
        }

        // Step 2: Find the rightmost set bit in the xor result
        int setBit = xor & -xor;

        int x = 0, y = 0;

        // Step 3: Divide elements into two groups based on the rightmost set bit
        for (int i = 0; i < n; i++) {
            if ((arr[i] & setBit) != 0) {
                x ^= arr[i]; // XOR for group with the set bit
            } else {
                y ^= arr[i]; // XOR for group without the set bit
            }
            if (((i + 1) & setBit) != 0) {
                x ^= (i + 1); // XOR for group with the set bit
            } else {
                y ^= (i + 1); // XOR for group without the set bit
            }
        }

        System.out.println("Missing number: " + y);
        System.out.println("Duplicate number: " + x);
    }
}
