package Stack;

/**
* Custom Stack implementation from scratch using an Array.
*
* Time Complexity:
* - Push: O(1)
* - Pop: O(1)
* - Peek: O(1)
* Space Complexity: O(N) where N is the array capacity.
*/
public class StackUsingArray {

    static class MyStack {
        private int[] arr;
        private int top;
        private int capacity;

        public MyStack(int capacity) {
            this.capacity = capacity;
            this.arr = new int[capacity];
            this.top = -1;
        }

        public boolean isEmpty() {
            return top == -1;
        }

        public boolean isFull() {
            return top == capacity - 1;
        }

        // Push data to stack
        public void push(int data) {
            if (isFull()) {
                System.out.println("Stack Overflow!");
                return;
            }
            arr[++top] = data;
        }

        // Pop data from stack
        public int pop() {
            if (isEmpty()) {
                System.out.println("Stack Underflow!");
                return -1;
            }
            return arr[top--];
        }

        // Peek top element
        public int peek() {
            if (isEmpty()) {
                System.out.println("Stack is empty!");
                return -1;
            }
            return arr[top];
        }
    }

    public static void main(String[] args) {
        MyStack stack = new MyStack(5);
        stack.push(10);
        stack.push(20);
        stack.push(30);

        System.out.println("Top element: " + stack.peek());
        System.out.println("Popped: " + stack.pop());
        System.out.println("New Top element: " + stack.peek());
    }
}
