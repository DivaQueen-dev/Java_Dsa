package BitManipulation;

public class Operations2 {

    //SWAP TWO NUMBERS WITHOUT USING A TEMPORARY VARIABLE
    public static void swap(int a, int b) {
        a = a ^ b; // Step 1: a now holds the result of a
        b = a ^ b; // Step 2: b now holds the original value of a
        a = a ^ b; // Step 3: a now holds the original value of
        // b
        System.out.println("After swapping: a = " + a + ", b = " + b);
    }
    //COUNT NUMBER OF SET BITS IN AN INTEGER
    public static int countSetBits(int num) {
        int count = 0;
        while (num > 0) {
            count += num & 1; // Increment count if the least significant bit is set
            num = num >> 1; // Right shift to check the next bit
        }
        return count;
    }
    //another method to count set bits using Brian Kernighan's algorithm
    public static int countSetBitsOptimized(int num) {
        int count = 0;
        while (num > 0) {
            num = num & (num - 1); // Remove the last set bit
            count++; // Increment count for each set bit removed
        }
        return count;
    }
    //another method to count set bits using built-in function
    public static int countSetBitsBuiltIn(int num) {
        return Integer.bitCount(num); // Use built-in method to count set bits
    }
    //CHECK IF A NUMBER IS A POWER OF TWO
    public static boolean isPowerOfTwo(int num) {
        return num > 0 && (num & (num - 1)) == 0; // A number is a power of two if it has only one set bit
    }
    //fast exponentiation using bit manipulation
    public static int fastExponentiation(int base, int exp) {
        int result = 1;
        while (exp > 0) {
            if ((exp & 1) == 1) { // If the least significant bit of exp is set
                result *= base; // Multiply the result by the current base
            }
            base *= base; // Square the base
            exp = exp >> 1; // Right shift exp to check the next bit
        }
        return result;
    }
    //modular exponentiation using bit manipulation
    public static int modularExponentiation(int base, int exp, int mod) {
        int result = 1;
        base = base % mod; // Handle cases where base is greater than mod
        while (exp > 0) {
            if ((exp & 1) == 1) { // If the least significant bit of exp is set
                result = (result * base) % mod; // Multiply the result by the current base and take modulus
            }
            base = (base * base) % mod; // Square the base and take modulus
            exp = exp >> 1; // Right shift exp to check the next bit
        }
        return result;
    }
    public static void main(String[] args) {
        int a = 5, b = 10;
        System.out.println("Before swapping: a = " + a + ", b = " + b);
        swap(a, b); // Should swap the values of a and b

        int num = 29; // Binary: 11101
        System.out.println("Number of set bits in " + num + ": " + countSetBits(num)); // Should count the number of set bits
        System.out.println("Number of set bits in " + num + " (optimized): " + countSetBitsOptimized(num)); // Should count the number of set bits using optimized method
        System.out.println("Number of set bits in " + num + " (built-in): " + countSetBitsBuiltIn(num)); // Should count the number of set bits using built-in method

        int powerOfTwo = 16;
        System.out.println(powerOfTwo + " is a power of two? " + isPowerOfTwo(powerOfTwo)); // Should check if the number is a power of two

        int base = 2, exp = 10;
        System.out.println(base + "^" + exp + " = " + fastExponentiation(base, exp)); // Should calculate base raised to the power of exp using fast exponentiation

        int mod = 1000;
        System.out.println(base + "^" + exp + " mod " + mod + " = " + modularExponentiation(base, exp, mod)); // Should calculate base raised to the power of exp modulo mod
    }
}