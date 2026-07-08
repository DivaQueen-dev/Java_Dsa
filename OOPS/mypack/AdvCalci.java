package mypack;

public class AdvCalci {
    public static void advcalci(String[] args) {
        if (args.length < 3) {
            System.out.println("Usage: java MainRunner <operation> <num1> <num2>");
            return;
        }

        String operation = args[0];
        double num1, num2;

        try {
            num1 = Double.parseDouble(args[1]);
            num2 = Double.parseDouble(args[2]);
        } catch (NumberFormatException e) {
            System.out.println("Please enter valid numbers.");
            return;
        }

        switch (operation) {
            case "add":
                System.out.println(num1 + num2);
                break;
            case "sub":
                System.out.println(num1 - num2);
                break;
            case "mul":
                System.out.println(num1 * num2);
                break;
            case "div":
                if (num2 == 0) {
                    System.out.println("Error: Division by zero");
                } else {
                    System.out.println(num1 / num2);
                }
                break;
            default:
                System.out.println("Invalid operation. Use add, sub, mul, or div.");
        }
    }
}
