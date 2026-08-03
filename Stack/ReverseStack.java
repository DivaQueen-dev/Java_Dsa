package Stack;

import java.util.Stack;

/**
* Problem: Reverse a Stack using Recursion.
* Utilizes the call stack and a pushAtBottom utility.
*
* Time Complexity: O(N^2)
* Space Complexity: O(N) implicit call stack
*/
public class ReverseStack {

    // Reuses the pushAtBottom logic
    public static void pushAtBottom(Stack<Integer> s, int data) {
        if (s.isEmpty()) {
            s.push(data);
            return;
        }
        int top = s.pop();
        pushAtBottom(s, data);
        s.push(top);
    }

    // Recursively reverses the stack
    public static void reverse(Stack<Integer> s) {
        // Base case: empty stack is already reversed
        if (s.isEmpty()) {
            return;
        }

        // Pop top element and hold in call frame
        int top = s.pop();

        // Recursively reverse the rest of the stack
        reverse(s);

        // Push the popped top element back at the bottom of reversed stack
        pushAtBottom(s, top);
    }

    public static void main(String[] args) {
        Stack<Integer> s = new Stack<>();
        s.push(1);
        s.push(2);
        s.push(3);

        System.out.println("Original Stack (Top on right): " + s);

        reverse(s);

        System.out.println("Reversed Stack (Top on right): " + s);
    }
}
