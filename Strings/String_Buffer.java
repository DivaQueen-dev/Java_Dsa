public class String_Buffer {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer("Hello");
        sb.append(" World");
        System.out.println(sb.toString()); // Output: Hello World
    }
    // StringBuffer is mutable, meaning you can modify the string without creating a new object.
    //mainly used when you need to perform a lot of modifications to a string, as it is more efficient
    // than using String for such operations. main difference between String and StringBuffer is that String is 
    // immutable, while StringBuffer is mutable.
}
