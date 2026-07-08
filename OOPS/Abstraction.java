abstract class Demo
{
    abstract void show();
    void display()
    {
        System.out.println("This is a concrete method in an abstract class.");
    }
}
public class Abstraction {
    public static void main(String[] args) {
        // Demo obj = new Demo(); // This will give an error because we cannot instantiate an abstract class
        Demo obj = new Demo() {
            @Override
            void show() {
                System.out.println("This is the implementation of the abstract method.");
            }
        };
        obj.show();
        obj.display();
    }
}
