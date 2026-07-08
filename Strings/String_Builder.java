public class String_Builder {
        public static void main(String[] args) {
        String str="Toney";
        for(char ch='a';ch<='z';ch++){
            str+=ch;
        }
        System.out.println(str);
        //StringBuilder is mutable and more efficient for concatenation in loops because
        // it doesn't create a new object every time you concatenate. 
        // In contrast, using the '+' operator creates a new String object each time,
        // which can lead to performance issues in loops.
        StringBuilder sb = new StringBuilder("Toney");
        for(char ch='a';ch<='z';ch++){
            sb.append(ch);
        }
        System.out.println(sb.toString());
        } 
}
