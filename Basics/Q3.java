import java.util.*;

public class Q3 {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Cost of pencil: ");
        float pencil = sc.nextFloat();

        System.out.print("Cost of pen: ");
        float pen = sc.nextFloat();

        System.out.print("Cost of eraser: ");
        float eraser = sc.nextFloat();

        float total = pencil + pen + eraser;
        float gst = total * 0.18f; // 18% tax
        float finalBill = total + gst;

        System.out.println("Total cost = " + total);
        System.out.println("GST (18%) = " + gst);
        System.out.println("Final Bill = " + finalBill);
    }
}
