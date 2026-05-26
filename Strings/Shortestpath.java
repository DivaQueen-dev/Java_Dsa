

public class Shortestpath {
    public static void main(String[] args){
        String path="WNEENESENNN";
        int x=0 , y=0;
        for(int i=0;i<path.length();i++){
            if(path.charAt(i)=='N'){
                y++;
            }
            else if(path.charAt(i)=='S'){
                y--;
            }
            else if(path.charAt(i)=='E'){
                x++;
            }
            else if(path.charAt(i)=='W'){
                x--;
            }
        }
        System.out.println("Final position: (" + x + ", " + y + ")");
        double distance = Math.sqrt(x*x + y*y);
        System.out.println("Shortest distance from the origin: " + distance);
    }

}
