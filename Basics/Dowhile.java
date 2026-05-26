import java.util.*;
public class Dowhile {
    public static void main(String args[])
        {
            Scanner sc = new Scanner(System.in);
            do{
                System.out.print("Enter a number:");
                int n=sc.nextInt();
                if(n%10==0)
                {
                    // break;
                    continue;
                }
                System.out.println(n);
            }while(true);

        }
    
}
