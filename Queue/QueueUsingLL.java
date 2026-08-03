package Queue;

/**
* Custom Queue implementation from scratch using a Singly Linked List.
* Linked List avoids capacity bounds since memory is allocated dynamically.
*
* Time Complexity:
* - Enqueue: O(1)
* - Dequeue: O(1)
* - Peek: O(1)
* Space Complexity: O(N) where N is number of elements.
*/
public class QueueUsingLL {

    static class Node {
        int data;
        Node next;

        public Node(int data) {
            this.data = data;
            this.next = null;
        }
    }

    static class QueueLL {
        private Node head = null;
        private Node tail = null;

        public boolean isEmpty() {
            return head == null && tail == null;
        }

        // Add element to queue
        public void add(int data) {
            Node newNode = new Node(data);
            if (isEmpty()) {
                head = tail = newNode;
                return;
            }
            tail.next = newNode;
            tail = newNode;
        }

        // Remove element from queue
        public int remove() {
            if (isEmpty()) {
                System.out.println("Queue Underflow!");
                return -1;
            }
            int frontVal = head.data;

            // Single element condition
            if (head == tail) {
                head = tail = null;
            } else {
                head = head.next;
            }

            return frontVal;
        }

        // Peek front element
        public int peek() {
            if (isEmpty()) {
                System.out.println("Queue is empty!");
                return -1;
            }
            return head.data;
        }
    }

    public static void main(String[] args) {
        QueueLL q = new QueueLL();
        q.add(10);
        q.add(20);
        q.add(30);

        System.out.println("Front element: " + q.peek());
        System.out.println("Removed: " + q.remove());
        System.out.println("New Front element: " + q.peek());
    }
}
