  class Node {
        int data;
        Node next;

        Node(int data) {
            this.data = data;
            this.next = null;
        }
    }
public class LL_Cycle {

  

   static Node head;

    // Print Linked List
    static void printList() {
        Node temp = head;

        while (temp != null) {
            System.out.print(temp.data + " -> ");
            temp = temp.next;
        }

        System.out.println("null");
    }

    // Detect Cycle using Floyd's Algorithm
    static boolean hasCycle() {

        Node slow = head;
        Node fast = head;

        while (fast != null && fast.next != null) {

            slow = slow.next;
            fast = fast.next.next;

            if (slow == fast) {
                return true;
            }
        }

        return false;
    }

    // Remove Cycle
    static void removeCycle() {

        Node slow = head;
        Node fast = head;
        boolean cycle = false;

        // Detect Cycle
        while (fast != null && fast.next != null) {

            slow = slow.next;
            fast = fast.next.next;

            if (slow == fast) {
                cycle = true;
                break;
            }
        }

        if (!cycle) {
            System.out.println("No Cycle Found.");
            return;
        }

        // Move slow to head
        slow = head;

        // Special Case: Cycle starts from head
        if (slow == fast) {

            while (fast.next != slow) {
                fast = fast.next;
            }

            fast.next = null;
            return;
        }

        // General Case
        while (slow.next != fast.next) {
            slow = slow.next;
            fast = fast.next;
        }

        fast.next = null;
    }

    public static void main(String[] args) {

        // Creating Linked List
        head = new Node(1);
        head.next = new Node(2);
        head.next.next = new Node(3);
        head.next.next.next = new Node(4);
        head.next.next.next.next = new Node(5);

        // Creating Cycle
        // 5 -> 3
        head.next.next.next.next.next = head.next.next;

        System.out.println("Cycle Present: " + hasCycle());

        removeCycle();

        System.out.println("Cycle Present After Removal: " + hasCycle());

        System.out.println("Linked List:");

        printList();
    }
}