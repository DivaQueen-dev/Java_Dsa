package Stack;

import java.util.Stack;

/**
* Problem: Valid Parentheses.
* Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
* determine if the input string is valid.
*
* Time Complexity: O(N) where N is string length
* Space Complexity: O(N) for stack
*/
public class ValidParentheses {

    public static boolean isValid(String str) {
        Stack<Character> s = new Stack<>();

        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);

            // Push opening brackets to stack
            if (ch == '(' || ch == '{' || ch == '[') {
                            s.push(ch);
                        } else {
                            // If closing bracket and stack is empty, it's invalid
                            if (s.isEmpty()) {
                                return false;
                            }

                            // If matching opening bracket is at stack top, pop it
                            char top = s.peek();
                            if ((ch == ')' && top == '(') ||
                                (ch == '}' && top == '{') ||
                                (ch == ']' && top == '[')) {
                                s.pop();
                            } else {
                                return false;
                            }
                        }
                    }

                    // Stack must be empty for it to be valid
                    return s.isEmpty();
                }

                public static void main(String[] args) {
                    String s1 = "({[]})";
                    String s2 = "([)]";

                    System.out.println(s1 + " is valid? " + isValid(s1));
                    System.out.println(s2 + " is valid? " + isValid(s2));
                }
            }
