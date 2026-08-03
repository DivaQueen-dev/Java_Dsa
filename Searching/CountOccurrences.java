public class CountOccurrences{
    static int first(int[] a,int k){int s=0,e=a.length-1,ans=-1;while(s<=e){int m=s+(e-s)/2;if(a[m]>=k){if(a[m]==k)ans=m;e=m-1;}else s=m+1;}return ans;}
    static int last(int[] a,int k){int s=0,e=a.length-1,ans=-1;while(s<=e){int m=s+(e-s)/2;if(a[m]<=k){if(a[m]==k)ans=m;s=m+1;}else e=m-1;}return ans;}
    public static void main(String[] args){int[] a={1,2,2,2,3};int f=first(a,2),l=last(a,2);System.out.println(l-f+1);}
}
