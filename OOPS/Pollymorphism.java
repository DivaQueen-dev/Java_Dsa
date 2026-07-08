public class Pollymorphism {
    public int add(int a, int b) {
        return a + b;
    }
    public double add(double a, double b) {
        return a + b;
    }
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    public static void main(String[] args) {
        Pollymorphism obj = new Pollymorphism();
        System.out.println("Sum of two integers: " + obj.add(5, 10));
        System.out.println("Sum of two doubles: " + obj.add(5.5, 10.5));
        System.out.println("Sum of three integers: " + obj.add(5, 10, 15));
    }
}
