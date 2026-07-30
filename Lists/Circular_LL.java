public class Circular_LL {

    class Node {
        int data;
        Node next;

        Node(int data) {
            this.data = data;
            this.next = null;
        }
    }

    Node head;
    Node tail;
    int size = 0;

    // Add at Beginning
    public void addFirst(int data) {

        Node newNode = new Node(data);

        // Empty List
        if (head == null) {
            head = tail = newNode;
            tail.next = head;
            size++;
            return;
        }

        newNode.next = head;
        head = newNode;
        tail.next = head;

        size++;
    }

    // Add at End
    public void addLast(int data) {

        Node newNode = new Node(data);

        // Empty List
        if (head == null) {
            head = tail = newNode;
            tail.next = head;
            size++;
            return;
        }

        tail.next = newNode;
        tail = newNode;
        tail.next = head;

        size++;
    }

    // Remove First
    public void removeFirst() {

        if (head == null) {
            System.out.println("List is Empty!");
            return;
        }

        if (head == tail) {
            head = tail = null;
            size--;
            return;
        }

        head = head.next;
        tail.next = head;

        size--;
    }

    // Remove Last
    public void removeLast() {

        if (head == null) {
            System.out.println("List is Empty!");
            return;
        }

        if (head == tail) {
            head = tail = null;
            size--;
            return;
        }

        Node temp = head;

        while (temp.next != tail) {
            temp = temp.next;
        }

        tail = temp;
        tail.next = head;

        size--;
    }

    // Print Circular List
    public void print() {

        if (head == null) {
            System.out.println("List is Empty!");
            return;
        }

        Node temp = head;

        do {
            System.out.print(temp.data + " -> ");
            temp = temp.next;
        } while (temp != head);

        System.out.println("(back to head)");
    }

    // Get Size
    public int size() {
        return size;
    }

    public static void main(String[] args) {

        Circular_LL cll = new Circular_LL();

        cll.addFirst(20);
        cll.addFirst(10);
        cll.addLast(30);
        cll.addLast(40);

        System.out.println("Circular Linked List:");
        cll.print();

        System.out.println("Size = " + cll.size());

        cll.removeFirst();

        System.out.println("\nAfter removeFirst():");
        cll.print();

        cll.removeLast();

        System.out.println("\nAfter removeLast():");
        cll.print();

        System.out.println("Size = " + cll.size());
    }
}