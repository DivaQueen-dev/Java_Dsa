public class TowerOfHanoi {
    static void tower(int n,char src,char helper,char dest){
        if(n==1){
            System.out.println("Move disk 1 from "+src+" to "+dest);
            return;
        }
        tower(n-1,src,dest,helper);
        System.out.println("Move disk "+n+" from "+src+" to "+dest);
        tower(n-1,helper,src,dest);
    }
    public static void main(String[] args){
        tower(3,'A','B','C');
    }
}