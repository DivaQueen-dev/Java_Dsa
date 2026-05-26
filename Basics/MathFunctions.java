public class MathFunctions {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        System.out.println("Min of " + a + " and " + b + " = " + Math.min(a, b));
        System.out.println("Max of " + a + " and " + b + " = " + Math.max(a, b));
        double num = 25;
        System.out.println("Square root of " + num + " = " + Math.sqrt(num));
        System.out.println("2 raised to 3 = " + Math.pow(2, 3));
        int negative = -15;
        System.out.println("Absolute value of " + negative + " = " + Math.abs(negative));
        double avg = (a + b + num) / 3.0;
        System.out.println("Average of " + a + ", " + b + ", " + num + " = " + avg);
    }
}
