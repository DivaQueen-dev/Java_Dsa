interface Drawable {
    void draw();
}
class Circle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing a circle.");
    }
}
class Rectangle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing a rectangle.");
    }
}
class Triangle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing a triangle.");
    }
}

public class Interface {
    public static void main(String[] args) {
        Drawable circle = new Circle();
        Drawable rectangle = new Rectangle();
        Drawable triangle = new Triangle();

        circle.draw();
        rectangle.draw();
        triangle.draw();
    }
}
