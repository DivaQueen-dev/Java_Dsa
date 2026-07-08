class Mobile
{
    String brand;
    String model;
    int price;
    static String name;
    // Static variable 'name' is shared among all instances of the Mobile class.
   public void show()
   {
    System.out.println(brand+" : "+model+" : "+price+" : "+name);
   }
   // Static method 'display' can be called without creating an instance of the Mobile class.
   public static void display(Mobile obj)
   {
    System.out.println("This is a static method");
    System.out.println(obj.brand+" : "+obj.model+" : "+obj.price+" : "+Mobile.name);
   }
   //static block
static 
{
    System.out.println("This is a static block. It runs when the class is loaded.");
}
}


public class StaticKeyword{
    public static void main(String[] args) {
        Mobile obj1 = new Mobile();
        obj1.brand = "Apple";
        obj1.model = "iPhone 14 Pro Max";
        obj1.price = 120000;
        // Setting the static variable 'name' using the class name, as it is shared among all instances.
        Mobile.name = "Smartphone";

        Mobile obj2 = new Mobile();
        obj2.brand = "Samsung";
        obj2.model = "Galaxy S23 Ultra";
        obj2.price = 90000;
// The static variable 'name' is shared, so it will have the same value for both obj1 and obj2.
        obj1.show();
        obj2.show();
        // Calling the static method 'display' using the class name, passing the objects as arguments.
        Mobile.display(obj1);
        Mobile.display(obj2);
    }



}