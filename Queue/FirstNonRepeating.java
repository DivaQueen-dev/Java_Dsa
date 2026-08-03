package Queue;

import java.util.LinkedList;
import java.util.Queue;

/**
* Problem: First non-repeating character in a stream.
* Given a stream of characters, find the first non-repeating character
* at each instant of insertion. If no such character exists, return '#'.
*
* Time Complexity: O(N) where N is stream length
* Space Complexity: O(1) (frequency array of size 26 and queue max size 26)
*/
public class FirstNonRepeating {

    public static String findFirstNonRepeating(String stream) {
        int[] freq = new int[26];
        Queue<Character> q = new LinkedList<>();
        StringBuilder result = new StringBuilder();

        for (int i = 0; i < stream.length(); i++) {
            char ch = stream.charAt(i);

            // Add character to queue and increment frequency
            q.add(ch);
            freq[ch - 'a']++;

            // Clean up queue from front by removing repeating characters
            while (!q.isEmpty() && freq[q.peek() - 'a'] > 1) {
                q.remove();
            }

            // Append result
            if (q.isEmpty()) {
                result.append('#');
            } else {
                result.append(q.peek());
            }
        }

        return result.toString();
    }

    public static void main(String[] args) {
        String stream = "aabccxb";
        String ans = findFirstNonRepeating(stream);

        System.out.println("Input Stream:  " + stream);
        System.out.println("Output Stream: " + ans);
        // At 'a': 'a'
        // At 'a': freq('a')=2, queue empty -> '#'
        // At 'b': 'b'
        // At 'c': 'b'
        // At 'c': 'b'
        // At 'x': 'b'
        // At 'b': 'b' repeating now, front becomes 'c' (repeating), next is 'x' -> 'x'
    }
}
