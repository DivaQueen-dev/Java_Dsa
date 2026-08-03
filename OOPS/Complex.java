import java.util.*;

class Complex {
    int real;
    int imag;

    // Constructor
    public Complex(int r, int i) {
        real = r;
        imag = i;
    }

    // Addition
    public static Complex add(Complex a, Complex b) {
        return new Complex((a.real + b.real), (a.imag + b.imag));
    }

    // Subtraction
    public static Complex diff(Complex a, Complex b) {
        return new Complex((a.real - b.real), (a.imag - b.imag));
    }

    // Multiplication
    public static Complex product(Complex a, Complex b) {
        return new Complex(((a.real * b.real) - (a.imag * b.imag)),
            ((a.real * b.imag) + (a.imag * b.real)));
    }

    // Print method
    public void printComplex() {
        if (real == 0 && imag != 0) {
            System.out.println(imag + "i");
        } else if (imag == 0 && real != 0) {
            System.out.println(real);
        } else if (imag < 0) {
            System.out.println(real + "" + imag + "i"); // handles negative sign
        } else {
            System.out.println(real + "+" + imag + "i");
        }
    }

    // Main method
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter real and imaginary part of first complex number:");
        int r1 = sc.nextInt();
        int i1 = sc.nextInt();
        Complex c1 = new Complex(r1, i1);

        System.out.println("Enter real and imaginary part of second complex number:");
        int r2 = sc.nextInt();
        int i2 = sc.nextInt();
        Complex c2 = new Complex(r2, i2);

        Complex sum = add(c1, c2);
        Complex difference = diff(c1, c2);
        Complex product = product(c1, c2);

        System.out.println("Sum of the two complex numbers:");
        sum.printComplex();

        System.out.println("Difference of the two complex numbers:");
        difference.printComplex();

        System.out.println("Product of the two complex numbers:");
        product.printComplex();

        sc.close();
    }
}
