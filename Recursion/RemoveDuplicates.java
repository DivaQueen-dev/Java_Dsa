public class RemoveDuplicates {
    static boolean[] map=new boolean[26];
    static void remove(String s,int idx,StringBuilder ans){
        if(idx==s.length()){ System.out.println(ans); return; }
        char c=s.charAt(idx);
        if(map[c-'a']) remove(s,idx+1,ans);
        else{
            map[c-'a']=true;
            ans.append(c);
            remove(s,idx+1,ans);
        }
    }
    public static void main(String[] args){
        remove("appnnacollege",0,new StringBuilder());
    }
}
