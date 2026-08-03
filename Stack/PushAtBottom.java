package Stack;

import java.util.Stack;

/**
* Problem: Push an element at the bottom of a Stack.
* This is a classic recursion problem which helps in understanding call stack manipulation.
*
* Time Complexity: O(N) where N is number of stack elements
* Space Complexity: O(N) implicit call stack
*/
public class PushAtBottom {

    public static void pushAtBottom(Stack<Integer> s, int data) {
        // Base case: if stack is empty, push data directly
        if (s.isEmpty()) {
            s.push(data);
            return;
        }

        // Pop top element and hold in call frame
        int top = s.pop();

        // Recursive call for rest of the stack
        pushAtBottom(s, data);

        // Put back the popped elements on top
        s.push(top);
    }

    public static void main(String[] args) {
        Stack<Integer> s = new Stack<>();
        s.push(1);
        s.push(2);
        s.push(3);

        System.out.println("Original Stack (Top on right): " + s);

        pushAtBottom(s, 4);

        System.out.println("After pushing 4 at bottom:      " + s);
    }
}
