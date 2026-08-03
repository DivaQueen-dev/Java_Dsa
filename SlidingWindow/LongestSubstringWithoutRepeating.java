package SlidingWindow;

import java.util.HashMap;

/**
* Problem: Longest Substring Without Repeating Characters
* Given a string s, find the length of the longest substring without repeating characters.
*
* Time Complexity: O(N) where N is string length
* Space Complexity: O(min(M, N)) where M is character set size
*/
public class LongestSubstringWithoutRepeating {

    public static int getLongestSubstringLength(String s) {
        int n = s.length();
        int maxLength = 0;

        // Map to store character and its latest index
        HashMap<Character, Integer> charMap = new HashMap<>();

        // Sliding window pointers: left and right
        int left = 0;
        for (int right = 0; right < n; right++) {
            char ch = s.charAt(right);

            // If character is already present in the current window,
            // shrink the window by moving left pointer to the right of last seen index
            if (charMap.containsKey(ch)) {
                left = Math.max(left, charMap.get(ch) + 1);
            }

            charMap.put(ch, right);
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }

    public static void main(String[] args) {
        String s = "abcabcbb";
        System.out.println("String: " + s);
        System.out.println("Length of longest non-repeating substring: " + getLongestSubstringLength(s));
    }
}
