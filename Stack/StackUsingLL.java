package Stack;

/**
* Custom Stack implementation from scratch using a Singly Linked List.
*
* Time Complexity:
* - Push: O(1)
* - Pop: O(1)
* - Peek: O(1)
* Space Complexity: O(N) where N is the number of elements.
*/
public class StackUsingLL {

    static class Node {
        int data;
        Node next;

        public Node(int data) {
            this.data = data;
            this.next = null;
        }
    }

    static class StackLL {
        private Node head = null;

        public boolean isEmpty() {
            return head == null;
        }

        // Push data (inserted at front of list for O(1) time)
        public void push(int data) {
            Node newNode = new Node(data);
            newNode.next = head;
            head = newNode;
        }

        // Pop data
        public int pop() {
            if (isEmpty()) {
                System.out.println("Stack Underflow!");
                return -1;
            }
            int topVal = head.data;
            head = head.next;
            return topVal;
        }

        // Peek top data
        public int peek() {
            if (isEmpty()) {
                System.out.println("Stack is empty!");
                return -1;
            }
            return head.data;
        }
    }

    public static void main(String[] args) {
        StackLL s = new StackLL();
        s.push(100);
        s.push(200);
        s.push(300);

        System.out.println("Top element: " + s.peek());
        System.out.print("Stack elements: ");
        while (!s.isEmpty()) {
            System.out.print(s.pop() + " ");
        }
        System.out.println();
    }
}
