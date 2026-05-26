public class DecToBin {
    public static void decimaltobinary(int num)
    {
        int pow=0;
        int bin=0;
        while(num>0)
        {
            int rem= num%2;
            bin=bin+rem*(int)Math.pow(10,pow);
            pow++;
            num=num/2;
        }
        System.out.println("Binary Number is: " + bin);
    }
    public static void main(String[] args) {
        decimaltobinary(5);
    }
}
// First iteration:

// rem = 5 % 2 = 1

// bin = 0 + 1 * 10^0 = 1

// pow = 1

// num = 5 / 2 = 2

// Second iteration:

// rem = 2 % 2 = 0

// bin = 1 + 0 * 10^1 = 1

// pow = 2

// num = 2 / 2 = 1

// Third iteration:

// rem = 1 % 2 = 1

// bin = 1 + 1 * 10^2 = 1 + 100 = 101

// pow = 3

// num = 1 / 2 = 0 → loop ends.
