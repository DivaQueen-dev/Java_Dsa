public class FloorAndCeil{
    public static void main(String[] args){
        int[] a={2,4,6,8,10}; int key=7;
        int s=0,e=a.length-1,f=-1,c=-1;
        while(s<=e){
            int m=s+(e-s)/2;
            if(a[m]==key){f=c=a[m];break;}
            if(a[m]<key){f=a[m];s=m+1;}
            else{c=a[m];e=m-1;}
        }
        System.out.println("Floor="+f+" Ceil="+c);
    }
}
