//single inheritance
class A{
    void display()
    {
        System.out.println("This is class A");
    }
}
class B extends A{
    void show()
    {
        System.out.println("This is class B");
    }
}
//multilevel inheritance
class C extends B{
    void print()
    {
        System.out.println("This is class C");
    }
}
//hierarchical inheritance
class D extends A{
    void display()
    {
        System.out.println("This is class D");
    }
}
//hybrid inheritance
class E extends B{
    void display()
    {
        System.out.println("This is class E");
    }
}

class Inheritance{
    public static void main(String args[])
    {
        B b = new B();
        b.display(); // inherited from class A
        b.show(); // own method of class B

        C c = new C();
        c.display(); // inherited from class A
        c.show(); // inherited from class B
        c.print(); // own method of class C

        D d = new D();
        d.display(); // overridden method in class D

        E e = new E();
        e.display(); // overridden method in class E
    }
}