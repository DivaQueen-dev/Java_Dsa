

public class Palindrome {
    public static void main(String[] args) {
        String str = "Madam";
        if(isPalindrome(str)){
            System.out.println(str+" is a palindrome.");
        }else{
            System.out.println(str+" is not a palindrome.");    
        }
}
public static boolean isPalindrome(String str){
    str=str.toLowerCase();
    for(int i=0;i<str.length()/2;i++){
        if(str.charAt(i)!=str.charAt(str.length()-i-1)){
            return false;
        }
    }
    return true;
}
}