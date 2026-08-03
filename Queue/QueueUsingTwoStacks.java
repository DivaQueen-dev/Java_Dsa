package Queue;

import java.util.Stack;

/**
* FIFO Queue implementation using two LIFO Stacks.
*
* We make the enqueue operation O(N) (or dequeue O(N)).
* Below is enqueue-efficient (dequeue is O(N)) approach (also known as Lazy Dequeue).
*
* Time Complexity:
* - Enqueue (add): O(1)
* - Dequeue (remove): O(N) worst-case (amortized O(1))
* - Peek: O(N) worst-case (amortized O(1))
* Space Complexity: O(N)
*/
public class QueueUsingTwoStacks {

    static class Queue {
        Stack<Integer> s1 = new Stack<>();
        Stack<Integer> s2 = new Stack<>();

        public boolean isEmpty() {
            return s1.isEmpty() && s2.isEmpty();
        }

        // Add (Enqueue): O(1)
        public void add(int data) {
            s1.push(data);
        }

        // Remove (Dequeue): Amortized O(1)
        public int remove() {
            if (isEmpty()) {
                System.out.println("Queue Underflow!");
                return -1;
            }

            // If s2 is empty, move all elements from s1 to s2
            if (s2.isEmpty()) {
                while (!s1.isEmpty()) {
                    s2.push(s1.pop());
                }
            }

            return s2.pop();
        }

        // Peek: Amortized O(1)
        public int peek() {
            if (isEmpty()) {
                System.out.println("Queue is empty!");
                return -1;
            }

            if (s2.isEmpty()) {
                while (!s1.isEmpty()) {
                    s2.push(s1.pop());
                }
            }

            return s2.peek();
        }
    }

    public static void main(String[] args) {
        Queue q = new Queue();
        q.add(1);
        q.add(2);
        q.add(3);

        System.out.println("Front: " + q.peek());
        System.out.println("Removed: " + q.remove());
        System.out.println("Front: " + q.peek());
    }
}
