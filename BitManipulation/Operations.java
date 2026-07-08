package BitManipulation;

public class Operations {
    // Method to set a bit at a specific position
    public static int setBit(int num, int pos) {
        return num | (1 << pos); // Use bitwise OR to set the bit at the specified position
    }
    // Method to clear a bit at a specific position
    public static int clearBit(int num, int pos) {
        return num & ~(1 << pos); // Use bitwise AND with NOT to clear the bit at the specified position
    }
    // Method to toggle a bit at a specific position
    public static int toggleBit(int num, int pos) {
        return num ^ (1 << pos); // Use bitwise XOR to toggle the bit at the specified position
    }
    // Method to check if a bit at a specific position is set
    public static boolean isBitSet(int num, int pos) {
        return (num & (1 << pos)) != 0; // Use bitwise AND to check if the bit at the specified position is set
    }
    //REMOVE THE LAST SET BIT
    public static int removeLastSetBit(int num) {
        return num & (num - 1); // Use bitwise AND to remove the last set bit
    }   
    //clear5 range of bits from i to j
    public static int clearRangeOfBits(int num, int i, int j) {
        int mask = ((1 << i) - 1) | (~0 << (j + 1)); // Create a mask to clear bits from i to j
        return num & mask; // Use bitwise AND to clear the specified range of bits  }
    }
    
        public static void main(String[] args) {
        int num = 29; // Binary: 11101
        int pos = 2;    
        System.out.println("Original number: " + num);
        System.out.println("After setting bit at position " + pos + ": " + setBit(num, pos)); // Should set the bit at position 2
        System.out.println("After clearing bit at position " + pos + ": " + clearBit(num, pos)); // Should clear the bit at position 2
        System.out.println("After toggling bit at position " + pos + ": " + toggleBit(num, pos)); // Should toggle the bit at position 2
        System.out.println("Is bit at position " + pos + " set? " + isBitSet(num, pos)); // Should check if the bit at position 2 is set
        System.out.println("After removing last set bit: " + removeLastSetBit(num)); // Should remove the last set bit
        int i = 1, j = 3;
        System.out.println("After clearing bits from position " + i + " to " + j + ": " + clearRangeOfBits(num, i, j)); // Should clear bits from position 1 to 3
}
}
