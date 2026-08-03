/**
* Demonstrates Method Overloading (Compile-time Polymorphism) in Java.
* Overloading occurs when multiple methods in the same class have the same name
* but different parameter lists (type, number, or both).
*/
public class Polymorphism {
    // Overloaded method: adds two integers
    public int add(int a, int b) {
        return a + b;
    }

    // Overloaded method: adds two double values
    public double add(double a, double b) {
        return a + b;
    }

    // Overloaded method: adds three integers
    public int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        Polymorphism obj = new Polymorphism();
        System.out.println("Sum of two integers: " + obj.add(5, 10));
        System.out.println("Sum of two doubles: " + obj.add(5.5, 10.5));
        System.out.println("Sum of three integers: " + obj.add(5, 10, 15));
    }
}

