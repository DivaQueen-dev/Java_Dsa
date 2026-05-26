import java.util.*;

public class TrapingRainWater {
    public static int fun(int height[]) {
        int n = height.length;

        int maxleft[] = new int[n];
        maxleft[0] = height[0];
        for (int i = 1; i < n; i++) {
            maxleft[i] = Math.max(maxleft[i - 1], height[i]);
        }

        int maxright[] = new int[n];
        maxright[n - 1] = height[n - 1];
        for (int i = n - 2; i >= 0; i--) {
            maxright[i] = Math.max(maxright[i + 1], height[i]);
        }

        int tw = 0; 
        for (int i = 0; i < n; i++) {
            tw += Math.min(maxleft[i], maxright[i]) - height[i];
        }

        return tw;
    }

    public static void main(String args[]) {
        int height[] = {0,1,0,2,1,0,1,3,2,1,2,1};
        System.out.println(fun(height)); 
    }
}
