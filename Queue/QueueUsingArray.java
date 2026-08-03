package Queue;

/**
* Custom Queue implementation from scratch using a Circular Array.
* Circular arrays avoid index drift (wastage of space at the front of the array).
*
* Time Complexity:
* - Enqueue: O(1)
* - Dequeue: O(1)
* - Peek: O(1)
* Space Complexity: O(N) where N is array capacity.
*/
public class QueueUsingArray {

    static class CircularQueue {
        private int[] arr;
        private int size;
        private int capacity;
        private int front;
        private int rear;

        public CircularQueue(int capacity) {
            this.capacity = capacity;
            this.arr = new int[capacity];
            this.size = 0;
            this.front = 0;
            this.rear = -1;
        }

        public boolean isEmpty() {
            return size == 0;
        }

        public boolean isFull() {
            return size == capacity;
        }

        // Add element to the queue
        public void add(int data) {
            if (isFull()) {
                System.out.println("Queue Overflow!");
                return;
            }
            rear = (rear + 1) % capacity;
            arr[rear] = data;
            size++;
        }

        // Remove element from the queue
        public int remove() {
            if (isEmpty()) {
                System.out.println("Queue Underflow!");
                return -1;
            }
            int result = arr[front];
            front = (front + 1) % capacity;
            size--;
            return result;
        }

        // Get front element of the queue
        public int peek() {
            if (isEmpty()) {
                System.out.println("Queue is empty!");
                return -1;
            }
            return arr[front];
        }
    }

    public static void main(String[] args) {
        CircularQueue q = new CircularQueue(5);
        q.add(1);
        q.add(2);
        q.add(3);
        q.add(4);

        System.out.println("Front element: " + q.peek());

        System.out.print("Removing elements: ");
        while (!q.isEmpty()) {
            System.out.print(q.remove() + " ");
        }
        System.out.println();
    }
}
