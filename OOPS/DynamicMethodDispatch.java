class Shape1 {
    void draw() {
        System.out.println("Drawing a shape");
    }
}
class Circle1 extends Shape1 {
    @Override
    void draw() {
        System.out.println("Drawing a circle");
    }
}
class Rectangle1 extends Shape1 {
    @Override
    void draw() {
        System.out.println("Drawing a rectangle");
    }
}
class Triangle1 extends Shape1 {
    @Override
    void draw() {
        System.out.println("Drawing a triangle");
    }
}

public class DynamicMethodDispatch {
    //dynamic method dispatch is a mechanism by which a call to an overridden method is resolved at runtime rather than compile-time. It is a fundamental concept in object-oriented programming that allows for polymorphism.
    public static void main(String[] args) {
        Shape1 s; // reference variable of type Shape1
        s = new Circle1(); // s refers to a Circle1 object
        s.draw(); // calls the draw method of Circle1 class

        s = new Rectangle1(); // s now refers to a Rectangle1 object
        s.draw(); // calls the draw method of Rectangle11 class

        s = new Triangle1(); // s now refers to a Triangle1 object
        s.draw(); // calls the draw method of Triangle1 class
    }
}
