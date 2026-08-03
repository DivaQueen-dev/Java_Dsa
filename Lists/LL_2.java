class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class LL_2 {

    Node head;
    int size;

    // ---------------- ADD FIRST ----------------
    public void addFirst(int data) {
        Node newNode = new Node(data);
        newNode.next = head;
        head = newNode;
        size++;
    }

    // ---------------- ADD LAST ----------------
    public void addLast(int data) {

        Node newNode = new Node(data);

        if (head == null) {
            head = newNode;
            size++;
            return;
        }

        Node temp = head;

        while (temp.next != null) {
            temp = temp.next;
        }

        temp.next = newNode;
        size++;
    }

    // ---------------- ADD AT INDEX ----------------
    public void addAtIndex(int idx, int data) {

        if (idx == 0) {
            addFirst(data);
            return;
        }

        Node newNode = new Node(data);
        Node temp = head;

        for (int i = 0; i < idx - 1; i++) {
            temp = temp.next;
        }

        newNode.next = temp.next;
        temp.next = newNode;
        size++;
    }

    // ---------------- REMOVE FIRST ----------------
    public void removeFirst() {

        if (head == null) {
            System.out.println("List is empty!");
            return;
        }

        head = head.next;
        size--;
    }

    // ---------------- REMOVE LAST ----------------
    public void removeLast() {

        if (head == null) {
            System.out.println("List is empty!");
            return;
        }

        if (head.next == null) {
            head = null;
            size--;
            return;
        }

        Node temp = head;

        while (temp.next.next != null) {
            temp = temp.next;
        }

        temp.next = null;
        size--;
    }

    // ---------------- DISPLAY ----------------
    public void display() {

        if (head == null) {
            System.out.println("List is empty!");
            return;
        }

        Node temp = head;

        while (temp != null) {
            System.out.print(temp.data + " -> ");
            temp = temp.next;
        }

        System.out.println("null");
    }

    // ---------------- SIZE BY TRAVERSAL ----------------
    public int sizeTraversal() {

        Node temp = head;
        int count = 0;

        while (temp != null) {
            count++;
            temp = temp.next;
        }

        return count;
    }

    // ---------------- SIZE USING VARIABLE ----------------
    public int size() {
        return size;
    }

    // ---------------- ITERATIVE SEARCH ----------------
    public boolean iterativeSearch(int key) {

        Node temp = head;

        while (temp != null) {

            if (temp.data == key) {
                return true;
            }

            temp = temp.next;
        }

        return false;
    }

    // ---------------- RECURSIVE SEARCH ----------------
    public int recursiveSearch(int key) {
        return helper(head, key);
    }

    private int helper(Node head, int key) {

        if (head == null) {
            return -1;
        }

        if (head.data == key) {
            return 0;
        }
        int idx = helper(head.next, key);
        if (idx == -1) {
            return -1;
        }

        return idx + 1;
    }

    // ---------------- REVERSE LINKED LIST ----------------
    public void reverse() {

        Node prev = null;
        Node curr = head;
        Node next;

        while (curr != null) {

            // Save the next node
            next = curr.next;

            // Reverse the link
            curr.next = prev;

            // Move prev one step ahead
            prev = curr;

            // Move curr one step ahead
            curr = next;
        }

        head = prev;
    }

    // ---------------- RECURSIVE REVERSE ----------------
    public Node reverseRecursive(Node head) {

        // Base Case
        if (head == null || head.next == null) {
            return head;
        }

        Node newHead = reverseRecursive(head.next);

        head.next.next = head;
        head.next = null;

        return newHead;
    }

    // ---------------- MAIN ----------------
    public static void main(String[] args) {

        LL_2 list = new LL_2();

        System.out.println("========== LINKED LIST ==========\n");

        list.addFirst(10);
        list.addFirst(20);
        list.addFirst(30);
        list.addFirst(40);
        list.addFirst(50);

        System.out.println("After addFirst():");
        list.display();

        list.addLast(99);

        System.out.println("\nAfter addLast(99):");
        list.display();

        list.addAtIndex(2, 999);

        System.out.println("\nAfter addAtIndex(2, 999):");
        list.display();

        System.out.println("\nSize using Traversal : " + list.sizeTraversal());
        System.out.println("Size using Variable  : " + list.size());

        list.removeFirst();

        System.out.println("\nAfter removeFirst():");
        list.display();

        list.removeLast();

        System.out.println("\nAfter removeLast():");
        list.display();

        System.out.println("\nFinal Size : " + list.size());

        System.out.println("\nIterative Search:");

        System.out.println("30 Found?  " + list.iterativeSearch(30));
        System.out.println("100 Found? " + list.iterativeSearch(100));

        System.out.println("\nRecursive Search:");

        System.out.println("999 Found at index: " + list.recursiveSearch(10));
        System.out.println("101 Found at index: " + list.recursiveSearch(1010));

        System.out.println("\nBefore Reverse:");
        list.display();

        list.reverse();

        System.out.println("\nAfter Reverse:");
        list.display();

        list.head = list.reverseRecursive(list.head);
        System.out.println("\nAfter Recursive Reverse:");
        list.display();

    }
}
