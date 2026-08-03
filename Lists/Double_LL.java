public class Double_LL {

    class Node {
        int data;
        Node next;
        Node prev;

        Node(int data) {
            this.data = data;
            this.next = null;
            this.prev = null;
        }
    }

    Node head;
    Node tail;
    int size = 0;

    // Add at Beginning
    public void addFirst(int data) {
        Node newNode = new Node(data);

        if (head == null) {
            head = tail = newNode;
            size++;
            return;
        }

        newNode.next = head;
        head.prev = newNode;
        head = newNode;
        size++;
    }

    // Add at End
    public void addLast(int data) {
        Node newNode = new Node(data);

        if (head == null) {
            head = tail = newNode;
            size++;
            return;
        }

        tail.next = newNode;
        newNode.prev = tail;
        tail = newNode;
        size++;
    }

    // Remove First Node
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
        head.prev = null;
        size--;
    }

    // Remove Last Node
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

        tail = tail.prev;
        tail.next = null;
        size--;
    }

    // Print Forward
    public void printForward() {

        if (head == null) {
            System.out.println("List is Empty!");
            return;
        }

        Node temp = head;

        while (temp != null) {
            System.out.print(temp.data + " <-> ");
            temp = temp.next;
        }

        System.out.println("null");
    }

    // Print Backward
    public void printBackward() {

        if (tail == null) {
            System.out.println("List is Empty!");
            return;
        }

        Node temp = tail;

        while (temp != null) {
            System.out.print(temp.data + " <-> ");
            temp = temp.prev;
        }

        System.out.println("null");
    }

    // Get Size
    public int size() {
        return size;
    }

    //reverse the linked list
    public void reverse() {
        Node temp = null;
        Node current = head;

        while (current != null) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }

        if (temp != null) {
            tail = head;
            head = temp.prev;
        }
    }

    public static void main(String[] args) {

        Double_LL dll = new Double_LL();

        dll.addFirst(20);
        dll.addFirst(10);
        dll.addLast(30);
        dll.addLast(40);

        System.out.println("Forward Traversal:");
        dll.printForward();

        dll.reverse();
        System.out.println("\nAfter reverse():");
        dll.printForward();

        System.out.println("Backward Traversal:");
        dll.printBackward();

        System.out.println("Size: " + dll.size());

        dll.removeFirst();
        System.out.println("\nAfter removeFirst():");
        dll.printForward();

        dll.removeLast();
        System.out.println("\nAfter removeLast():");
        dll.printForward();

        System.out.println("Backward Traversal:");
        dll.printBackward();

        System.out.println("Size: " + dll.size());

    }
}
