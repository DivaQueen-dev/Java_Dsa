package BitManipulation;

public class Operators {
    public static void main(String[] args) {
        int a = 5; // 0101 in binary
        int b = 3; // 0011 in binary

        // Bitwise AND
        System.out.println("a & b: " + (a & b)); // Output: 1 (0001 in binary)

        // Bitwise OR
        System.out.println("a | b: " + (a | b)); // Output: 7 (0111 in binary)

        // Bitwise XOR
        System.out.println("a ^ b: " + (a ^ b)); // Output: 6 (0110 in binary)

        // Bitwise NOT
        System.out.println("~a: " + (~a)); // Output: -6 (in two's complement)

        // Left Shift
        System.out.println("a << 1: " + (a << 1)); // Output: 10 (1010 in binary)

        // Right Shift
        System.out.println("a >> 1: " + (a >> 1)); // Output: 2 (0010 in binary)
    }
}
