

public class StringFunctions {
    public static void main(String[] args) {
        String str = "Hello World";
        System.out.println(str.length());
        System.out.println(str.charAt(0));
        System.out.println(str.indexOf('o'));
        System.out.println(str.substring(0, 5));
        System.out.println(str.toUpperCase());
        System.out.println(str.toLowerCase());
        System.out.println(str.trim());
        System.out.println(str.replace('o', 'a'));
    }
    
}
