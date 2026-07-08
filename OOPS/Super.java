class Shape {
    String color;

    Shape(String color) {
        this.color = color;
    }

    void draw() {
        System.out.println("Drawing a generic shape.");
    }
}

class Circle extends Shape {
    int radius;

    Circle(String color, int radius) {
        super(color); // calls the parent constructor
        this.radius = radius;
    }

    @Override
    void draw() {
        super.draw(); // calls the parent method
        System.out.println("Drawing a circle with radius " + radius + " and color " + color);
    }
}

public class Super {
    public static void main(String[] args) {
        Circle c = new Circle("Red", 5);
        c.draw();
    }
}
