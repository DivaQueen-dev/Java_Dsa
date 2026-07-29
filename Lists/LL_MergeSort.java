class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class LL_MergeSort {

    Node head;

    // Add node at end
    void addLast(int data) {
        Node newNode = new Node(data);

        if (head == null) {
            head = newNode;
            return;
        }

        Node temp = head;

        while (temp.next != null) {
            temp = temp.next;
        }

        temp.next = newNode;
    }

    // Print Linked List
    void printList() {
        Node temp = head;

        while (temp != null) {
            System.out.print(temp.data + " -> ");
            temp = temp.next;
        }

        System.out.println("null");
    }

    // Find middle and split the list
    static Node getMid(Node head) {

        Node slow = head;
        Node fast = head;
        Node prev = null;

        while (fast != null && fast.next != null) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        prev.next = null;

        return slow;
    }

    // Merge two sorted linked lists
    static Node merge(Node left, Node right) {

        Node dummy = new Node(-1);
        Node temp = dummy;

        while (left != null && right != null) {

            if (left.data <= right.data) {
                temp.next = left;
                left = left.next;
            } else {
                temp.next = right;
                right = right.next;
            }

            temp = temp.next;
        }

        while (left != null) {
            temp.next = left;
            left = left.next;
            temp = temp.next;
        }

        while (right != null) {
            temp.next = right;
            right = right.next;
            temp = temp.next;
        }

        return dummy.next;
    }

    // Merge Sort
    static Node mergeSort(Node head) {

        if (head == null || head.next == null) {
            return head;
        }

        Node mid = getMid(head);

        Node left = mergeSort(head);
        Node right = mergeSort(mid);

        return merge(left, right);
    }

    public static void main(String[] args) {

        LL_MergeSort list = new LL_MergeSort();

        list.addLast(8);
        list.addLast(3);
        list.addLast(5);
        list.addLast(2);
        list.addLast(6);
        list.addLast(1);

        System.out.println("Original Linked List:");
        list.printList();

        list.head = mergeSort(list.head);

        System.out.println("\nSorted Linked List:");
        list.printList();
    }
}