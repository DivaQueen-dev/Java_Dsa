package Queue;

import java.util.LinkedList;
import java.util.Queue;

/**
* LIFO Stack implementation using two FIFO Queues.
* This demonstrates the adapter pattern where one interface is adapted to another.
*
* We make the push operation O(N) (or pop O(N)) to enforce stack behavior.
* Below is push-efficient (pop is O(N)) approach.
*
* Time Complexity:
* - Push: O(1)
* - Pop: O(N)
* - Peek: O(N)
* Space Complexity: O(N)
*/
public class StackUsingTwoQueues {

    static class Stack {
        Queue<Integer> q1 = new LinkedList<>();
        Queue<Integer> q2 = new LinkedList<>();

        public boolean isEmpty() {
            return q1.isEmpty();
        }

        // Push: O(1)
        public void push(int data) {
            q1.add(data);
        }

        // Pop: O(N)
        public int pop() {
            if (isEmpty()) {
                System.out.println("Stack Underflow!");
                return -1;
            }

            // Shift all elements except the last one from q1 to q2
            while (q1.size() > 1) {
                q2.add(q1.remove());
            }

            // The last element is the stack top (LIFO)
            int topVal = q1.remove();

            // Swap q1 and q2
            Queue<Integer> temp = q1;
            q1 = q2;
            q2 = temp;

            return topVal;
        }

        // Peek: O(N)
        public int peek() {
            if (isEmpty()) {
                System.out.println("Stack is empty!");
                return -1;
            }

            while (q1.size() > 1) {
                q2.add(q1.remove());
            }

            int topVal = q1.peek();

            // Still need to shift the last element to q2 to keep structure
            q2.add(q1.remove());

            // Swap q1 and q2
            Queue<Integer> temp = q1;
            q1 = q2;
            q2 = temp;

            return topVal;
        }
    }

    public static void main(String[] args) {
        Stack s = new Stack();
        s.push(1);
        s.push(2);
        s.push(3);

        System.out.println("Top: " + s.peek());
        System.out.println("Popped: " + s.pop());
        System.out.println("Top: " + s.peek());
    }
}
