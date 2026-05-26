import java.util.Scanner;
public class BinToDec {
     public static void binarytodecimal (int binnum)
     {
        int mynum=binnum;
        int decimal=0;
        int pow=0;
        while ((binnum>0)) {
            int lastdigit=binnum%10;
            decimal=decimal+(lastdigit*(int)Math.pow(2,pow));
            pow++;
            binnum=binnum/10;
            
        }
         System.out.println("Decimal Number of  "  +  mynum +" " + "is  "  +  decimal);

     }
    public static void main(String args[])
    {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter a binary number: ");
        int binnum=sc.nextInt();
        binarytodecimal(binnum);
    }
}
