import java.util.ArrayList;

public class Rainwater {
    public static int storewater(ArrayList<Integer> height) {
        int maxwtr = 0;
        for (int i = 0; i < height.size(); i++) {
            for (int j = i + 1; j < height.size(); j++) {
                int ht = Math.min(height.get(i), height.get(j));
                int width = j - i;
                int water = ht * width;
                maxwtr = Math.max(maxwtr, water);
            }
        }
        return maxwtr;
    }

    public static int storewater2(ArrayList<Integer> height) {
        int low = 0;
        int high = height.size() - 1;
        int maxwtr = 0;
        while (low < high) {
            int ht = Math.min(height.get(low), height.get(high));
            int width = high - low;
            int water = ht * width;
            maxwtr = Math.max(maxwtr, water);
            if (height.get(low) < height.get(high)) {
                low++;
            } else {
                high--;
            }
        }
        return maxwtr;
    }

    public static void main(String args[]) {
        ArrayList<Integer> height = new ArrayList<>();
        height.add(1);
        height.add(2);
        height.add(3);
        height.add(4);
        height.add(5);
        height.add(6);
        height.add(7);
        height.add(8);
        System.out.println(storewater(height));
        System.out.println(storewater2(height));
    }

}
