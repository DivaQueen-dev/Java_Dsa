import os
import json
import re

# Comprehensive catalog mapping problem keywords to difficulty, theory, analogy, dry run, and output
DSA_METADATA = {
    # Arrays
    "arrayinput": {
        "difficulty": "Easy",
        "analogy": "Like writing down a shopping list line by line as a friend calls out items to you.",
        "theory": "Demonstrates reading user input into a static array. It shows how scanner buffers read elements sequentially and store them in memory indices.",
        "dry_run": "1. Initialize scanner and array of size N.\n2. Loop N times: read input and assign to array[i].\n3. Print the populated array.",
        "output": "Enter number of elements: 3\nEnter elements:\n10\n20\n30\nArray elements: [10, 20, 30]"
    },
    "arrayinputoutput": {
        "difficulty": "Easy",
        "analogy": "Filling up a grid of lockers with packages, then opening each locker door one by one to show what is inside.",
        "theory": "Basic array initialization and traversal showing standard index reading and console writing.",
        "dry_run": "1. Initialize hardcoded array or scan sizes.\n2. Output each element at array[index] sequentially using a for loop.",
        "output": "Array elements: 1 2 3 4 5"
    },
    "arrayofobjects": {
        "difficulty": "Easy",
        "analogy": "A row of student folders in a cabinet, where each folder contains a student's name, roll number, and grades.",
        "theory": "Demonstrates object reference arrays in Java. Unlike primitives, arrays of objects store references (addresses) to instance objects on the heap.",
        "dry_run": "1. Declare class Student (name, roll).\n2. Initialize Student[] arr = new Student[2].\n3. Instanatiate objects: arr[0] = new Student('Alice', 101).\n4. Access data: arr[0].name.",
        "output": "Student 1: Name = Alice, Roll = 101\nStudent 2: Name = Bob, Roll = 102"
    },
    "assignment": {
        "difficulty": "Easy",
        "analogy": "Counting how many red apples are in a crate, finding the sum of the second row of item shelves, or rotating a flat tray grid sideways.",
        "theory": "Practical 2D array matrix utilities: element frequency counting, row summing, and simple transposition.",
        "dry_run": "1. Iterate grid cells using nested loops.\n2. Sum elements of index 1 (second row).\n3. Swap grid[i][j] into transpose[j][i].",
        "output": "Count of key 3: 5\nSum of second row: 13\nTranspose matrix printed successfully."
    },
    "binarysearch": {
        "difficulty": "Medium",
        "analogy": "Finding a name in a printed telephone directory. You open to the middle; if the name is alphabetically later, you throw away the left half and repeat.",
        "theory": "A logarithmic divide-and-conquer search algorithm for sorted lists. It computes the midpoint, eliminates half the search space based on comparisons, and halves the remaining index range.",
        "dry_run": "Input: [2, 5, 8, 12, 16], Target = 12\n1. Low=0, High=4 -> Mid=2 (Val=8 < 12) -> Low=3\n2. Low=3, High=4 -> Mid=3 (Val=12 == 12) -> Found!",
        "output": "Searching for target 12 in sorted array...\nTarget found at index 3."
    },
    "diagonalsum": {
        "difficulty": "Easy",
        "analogy": "Walking from the top-left corner of a tiled floor straight to the bottom-right, then from the top-right to the bottom-left, summing values of the tiles you step on.",
        "theory": "Computes the sum of primary and secondary diagonals of a square matrix. Optimizes the traversal from O(N²) to O(N) by calculating diagonal index mappings directly.",
        "dry_run": "Matrix: [[1,2],[3,4]]\n1. Primary: mat[0][0] (1) + mat[1][1] (4) = 5\n2. Secondary: mat[0][1] (2) + mat[1][0] (3) = 5\n3. Overlap check: No overlap since size is even. Sum = 10.",
        "output": "Matrix dimensions: 3x3\nDiagonal Sum: 15"
    },
    "jagged": {
        "difficulty": "Easy",
        "analogy": "A bookshelf where different shelves have different lengths and can hold different numbers of books.",
        "theory": "Demonstrates Jagged (mismatched) multi-dimensional arrays in Java. Each row in a 2D array can be initialized with a unique size because 2D arrays are arrays of arrays.",
        "dry_run": "1. Initialize int[][] arr = new int[2][].\n2. Define row sizes: arr[0] = new int[3]; arr[1] = new int[1].\n3. Traverse and write/read elements based on individual row.length.",
        "output": "Row 0: 10 20 30\nRow 1: 40"
    },
    "kadanesalgol": {
        "difficulty": "Medium",
        "analogy": "Tracking your daily budget. If your cumulative debt becomes worse than starting fresh, you reset your accumulator to zero and keep searching for the best streak.",
        "theory": "Finds the maximum sum of a contiguous subarray. At each index, it decides whether to add the current element to the existing subarray or start a new subarray, maintaining the global maximum.",
        "dry_run": "Input: [-2, 1, -3, 4, -1, 2, 1]\n1. Val=-2: CurrSum=-2, Max=-2\n2. Val=1: CurrSum=max(1, -1)=1, Max=1\n3. Val=-3: CurrSum=max(-3, -2)=-2, Max=1\n4. Val=4: CurrSum=max(4, 2)=4, Max=4",
        "output": "Maximum subarray sum (Kadane's): 6"
    },
    "largestandsmallest": {
        "difficulty": "Easy",
        "analogy": "Scanning a lineup of runners to find the tallest and shortest in a single pass.",
        "theory": "Finds minimum and maximum values in a single linear scan. Demonstrates initialization with Integer.MAX_VALUE and Integer.MIN_VALUE.",
        "dry_run": "1. Set min = MAX_VALUE, max = MIN_VALUE.\n2. Traverse array: if current < min, update min; if current > max, update max.",
        "output": "Array: [5, 2, 9, 1, 7]\nLargest element: 9\nSmallest element: 1"
    },
    "linearsearch": {
        "difficulty": "Easy",
        "analogy": "Searching for a specific card in a shuffled deck by turning cards over one by one from top to bottom.",
        "theory": "Scans elements from left to right sequentially until the target is found. Time complexity is linear because in the worst case, every element must be checked.",
        "dry_run": "Input: [4, 8, 2], Target = 2\n1. Index 0: 4 != 2\n2. Index 1: 8 != 2\n3. Index 2: 2 == 2 -> Return index 2.",
        "output": "Searching for target 8...\nFound target at index 1."
    },
    "nextpermutation": {
        "difficulty": "Medium",
        "analogy": "Finding the next lexicographically larger number using the same digits. Like changing 132 to 213 (the next count up).",
        "theory": "Finds the next lexicographically greater permutation. Locates the pivot from the right where elements decrease, swaps it with the next largest element to its right, and reverses the suffix.",
        "dry_run": "Input: [1, 2, 3]\n1. Find pivot from right: 2 < 3, so pivot index is 1 (val 2).\n2. Find element larger than 2 from right: 3. Swap -> [1, 3, 2].\n3. Reverse suffix after pivot (empty/trivial here) -> Output: [1, 3, 2].",
        "output": "Current permutation: [1, 2, 3]\nNext permutation: [1, 3, 2]"
    },
    "pairs": {
        "difficulty": "Easy",
        "analogy": "Pairing up guests at a party so that every guest meets every other guest exactly once.",
        "theory": "Generates all unique pairs of elements in an array. Shows how nested loops partition index ranges to avoid duplicate pairs like (A, B) and (B, A).",
        "dry_run": "Input: [1, 2, 3]\n1. i=0, j=1 -> Pair (1, 2)\n2. i=0, j=2 -> Pair (1, 3)\n3. i=1, j=2 -> Pair (2, 3)",
        "output": "All unique pairs:\n(1, 2) (1, 3) (2, 3)"
    },
    "prefixsum": {
        "difficulty": "Easy",
        "analogy": "A running total ledger. If you know the total earnings up to June and up to February, you can find March-June earnings with a single subtraction.",
        "theory": "Preprocessing technique where prefix sums of an array are pre-computed. Allows O(1) range sum queries: sum(L, R) = prefix[R] - prefix[L-1].",
        "dry_run": "Input: [3, 1, 4, 2]\n1. prefix[0] = 3\n2. prefix[1] = 3+1 = 4\n3. prefix[2] = 4+4 = 8\n4. Query range 1 to 2: prefix[2] - prefix[0] = 8 - 3 = 5.",
        "output": "Original: [1, 2, 3, 4]\nPrefix Sums: [1, 3, 6, 10]"
    },
    "reverse": {
        "difficulty": "Easy",
        "analogy": "Flipping a row of cards over by swapping the leftmost and rightmost cards, moving inward until they meet in the middle.",
        "theory": "Reverses array elements in-place using two pointers (left and right) migrating towards the center, minimizing auxiliary space.",
        "dry_run": "Input: [1, 2, 3, 4]\n1. Swap index 0 and 3 -> [4, 2, 3, 1]\n2. Swap index 1 and 2 -> [4, 3, 2, 1]\n3. Pointers meet. Stop.",
        "output": "Reversed array: [4, 3, 2, 1]"
    },
    "searching_in_matrix": {
        "difficulty": "Medium",
        "analogy": "Looking up a tax value in a grid table where values increase down each column and across each row. You start at the top-right corner to prune search directions.",
        "theory": "Staircase search in a sorted 2D matrix. Compares target with matrix[row][col] starting from top-right. If target is smaller, move left; if larger, move down.",
        "dry_run": "Matrix: [[10, 20], [15, 25]], Target = 15\n1. Start row=0, col=1 (Val=20 > 15) -> col=0\n2. row=0, col=0 (Val=10 < 15) -> row=1\n3. row=1, col=0 (Val=15 == 15) -> Found!",
        "output": "Searching in 2D sorted matrix...\nFound target 15 at index (1, 0)"
    },
    "sorting": {
        "difficulty": "Easy",
        "analogy": "Rearranging books on a shelf to be in alphabetical order.",
        "theory": "Introduction to basic sorting syntax in Java, using built-in methods like Arrays.sort() for primitive and reference types.",
        "dry_run": "1. Initialize array.\n2. Call Arrays.sort(arr).\n3. Under the hood, Java uses Dual-Pivot Quicksort or Timsort.",
        "output": "Sorted: [1, 2, 3, 4, 5]"
    },
    "spiralmatrix": {
        "difficulty": "Medium",
        "analogy": "Peeling an apple in a continuous spiral strip from the outer skin inward to the core.",
        "theory": "Traverses a 2D matrix in a spiral clock-wise direction. Manages 4 boundary variables (top, bottom, left, right) and shifts them inward after printing each boundary edge.",
        "dry_run": "Grid: 3x3. Boundaries: top=0, bottom=2, left=0, right=2.\n1. Print top row (col 0 to 2) -> Increment top=1.\n2. Print right col (row 1 to 2) -> Decrement right=1.\n3. Print bottom row (col 1 to 0) -> Decrement bottom=1.\n4. Print left col (row 1 to 1) -> Increment left=1.",
        "output": "Spiral Traversal:\n1 2 3 6 9 8 7 4 5"
    },
    "subarray": {
        "difficulty": "Easy",
        "analogy": "Looking at all possible contiguous cuts of a candy bar.",
        "theory": "Generates all contiguous subarrays of an array. Implemented using three nested loops: starting index, ending index, and traversal printer.",
        "dry_run": "Input: [1, 2]\n1. Start=0, End=0 -> [1]\n2. Start=0, End=1 -> [1, 2]\n3. Start=1, End=1 -> [2]",
        "output": "All Subarrays:\n[1]\n[1, 2]\n[2]"
    },
    "subarraysum": {
        "difficulty": "Easy",
        "analogy": "Calculating the total calories of all possible contiguous menu combinations.",
        "theory": "Computes the sum of all subarrays. Shows basic optimization from cubic O(N³) to quadratic O(N²) by carrying over sums instead of re-iterating.",
        "dry_run": "Input: [1, 2]\n1. Subarray [1]: sum = 1\n2. Subarray [1, 2]: sum = 3\n3. Subarray [2]: sum = 2. Total sums counted.",
        "output": "Subarray sums printed."
    },
    "trappingrainwater": {
        "difficulty": "Hard",
        "analogy": "Water collects in puddles between curbs after rain. The depth of a puddle depends on the heights of the curbs on its left and right sides.",
        "theory": "Computes water trapped inside an elevation map. It computes the maximum height to the left and right of each index. The water height at index i is min(maxLeft[i], maxRight[i]) - height[i].",
        "dry_run": "Heights: [2, 0, 2]. n=3.\n1. maxLeft = [2, 2, 2], maxRight = [2, 2, 2]\n2. i=0: min(2,2)-2 = 0\n3. i=1: min(2,2)-0 = 2\n4. i=2: min(2,2)-2 = 0. Total = 2.",
        "output": "Water trapped: 2"
    },
    "twopointers": {
        "difficulty": "Easy",
        "analogy": "Two friends walking from opposite ends of a bridge, meeting in the exact center.",
        "theory": "Illustrates array reversing using index variables moving inward from opposite boundaries, avoiding allocation of a new array.",
        "dry_run": "Input: [1, 2, 3]. Left=0, Right=2.\n1. Swap [0] and [2] -> [3, 2, 1]. Left=1, Right=1.\n2. Left == Right. Stop.",
        "output": "Original: [1, 2, 3]\nReversed: [3, 2, 1]"
    },
    # Backtracking
    "gridways": {
        "difficulty": "Medium",
        "analogy": "A robot navigating a grid, only allowed to roll East (Right) or South (Down). Finding the total paths to the cargo bay.",
        "theory": "Computes paths from (0,0) to (N-1, M-1) in a grid. Shows recursion paths (Right + Down) and compares it with the O(N) mathematical combinations formula.",
        "dry_run": "Grid 2x2. Goal (1,1).\n1. count(0,0) -> count(0,1) + count(1,0)\n2. count(0,1) -> count(0,2) [out] + count(1,1) [reached] = 1\n3. count(1,0) -> count(1,1) [reached] + count(2,0) [out] = 1. Total = 2.",
        "output": "Grid dimensions: 3 x 4\nWays (Recursive): 10\nWays (Mathematical): 10"
    },
    "permutations": {
        "difficulty": "Medium",
        "analogy": "Finding all possible seat assignments for 3 people in a row of 3 chairs.",
        "theory": "Generates all permutations of a string. Recursively extracts characters, appends them to the current prefix, and calls permutations on the remaining substring.",
        "dry_run": "Input: 'ab'\n1. Select 'a' -> prefix='a', remaining='b' -> Recurse('b', 'a') -> prefix='ab', remaining='' [Print 'ab']\n2. Select 'b' -> prefix='b', remaining='a' -> Recurse('a', 'b') -> prefix='ba', remaining='' [Print 'ba']",
        "output": "Permutations of 'abc':\nabc acb bac bca cab cba"
    },
    # Queue
    "firstnonrepeating": {
        "difficulty": "Medium",
        "analogy": "A customer service line. If the customer at the front has already been served (has repeated requests), they are removed from the line to see who is next.",
        "theory": "Finds the first non-repeating character in a stream of characters. Uses a queue to preserve insertion order and a frequency array of size 26.",
        "dry_run": "Stream: 'aab'\n1. 'a': freq[a]=1, q=[a]. Front is 'a'.\n2. 'a': freq[a]=2, q=[a, a]. Front 'a' has freq > 1 -> pop. q=[] -> '#'.\n3. 'b': freq[b]=1, q=[b]. Front is 'b'.",
        "output": "Input Stream: aabccxb\nOutput Stream: a#bbbx"
    },
    "queueusingarray": {
        "difficulty": "Easy",
        "analogy": "A circular ticket queue. When the line hits the end of the lobby, new customers fill empty spaces at the front.",
        "theory": "Circular queue implementation using arrays. Circular indexes avoid memory drift by wrapping around via index = (index + 1) % capacity.",
        "dry_run": "Queue capacity = 3. rear=-1, front=0, size=0.\n1. Add(10) -> rear=0, arr[0]=10, size=1.\n2. Add(20) -> rear=1, arr[1]=20, size=2.\n3. Remove() -> returns arr[front]=10. front=1, size=1.",
        "output": "Circular Queue operational.\nFront element: 1\nRemoving elements: 1 2 3 4"
    },
    "queueusingll": {
        "difficulty": "Easy",
        "analogy": "A train adding cars to the back and passengers exiting from the front locomotive.",
        "theory": "Implements a FIFO queue using linked list nodes. Tracks head (for removal) and tail (for insertion) pointers to guarantee O(1) operations.",
        "dry_run": "1. Add(10) -> head = tail = Node(10).\n2. Add(20) -> tail.next = Node(20), tail = Node(20).\n3. Remove() -> head moves to head.next (Node(20)). Returns 10.",
        "output": "Front element: 10\nRemoved: 10\nNew Front element: 20"
    },
    "queueusingtwostacks": {
        "difficulty": "Medium",
        "analogy": "Using two bins to organize files. You drop incoming files in Bin 1. When you need the oldest file, you flip Bin 1 upside down into Bin 2 and take from top.",
        "theory": "Implements a FIFO queue using two LIFO stacks. Enqueue is O(1). Dequeue swaps elements to the second stack to reverse order, yielding amortized O(1).",
        "dry_run": "Enqueue: push to s1: [1, 2].\nDequeue: s2 is empty. Pop from s1 and push to s2 -> s2 becomes [2, 1] (top 1). Pop s2 -> returns 1.",
        "output": "Front: 1\nRemoved: 1\nFront: 2"
    },
    "stackusingtwoqueues": {
        "difficulty": "Medium",
        "analogy": "Reversing items using two conveyor belts. You move all items to the auxiliary belt, place the new item, and then move everything back.",
        "theory": "Implements LIFO stack using two FIFO queues. Dequeue shifts all elements except the last to the second queue, retrieving the last inserted element.",
        "dry_run": "Push [1, 2] to q1.\nPop: Shift 1 from q1 to q2. Pop 2 from q1 (result). Swap q1 and q2 -> q1 becomes [1], q2 empty.",
        "output": "Top: 3\nPopped: 3\nTop: 2"
    },
    # Sliding Window
    "longestsubstringwithoutrepeating": {
        "difficulty": "Medium",
        "analogy": "Scanning a panorama photo through a sliding cardboard frame. If a duplicate item enters the frame, you slide the left side past it.",
        "theory": "Finds the length of the longest non-repeating substring. Uses a sliding window with left/right pointers and a hash map tracking character positions.",
        "dry_run": "s = 'abcab'\n1. right=0, 'a': map={a:0}, maxLen=1\n2. right=1, 'b': map={a:0, b:1}, maxLen=2\n3. right=2, 'c': map={a:0, b:1, c:2}, maxLen=3\n4. right=3, 'a': duplicate. left=max(0, map[a]+1)=1. map[a]=3. maxLen=max(3, 3-1+1)=3.",
        "output": "String: abcabcbb\nLength of longest non-repeating substring: 3"
    },
    "maxconsecutiveones": {
        "difficulty": "Medium",
        "analogy": "A train track with broken tiles. You have K spare tiles. You walk down the track, laying spares. If you run out of spares, you pick up the oldest one.",
        "theory": "Max consecutive 1s with at most K zero flips. Slides a window while counting zeros. Shrinks left boundary when zero count exceeds K.",
        "dry_run": "nums=[1, 0, 1], K=1.\n1. right=0: val=1. max=1.\n2. right=1: val=0. zero=1. max=2.\n3. right=2: val=1. zero=1. max=3.",
        "output": "Max consecutive ones with at most 2 flips: 6"
    },
    "maxsumsubarray": {
        "difficulty": "Easy",
        "analogy": "A sliding spotlight of width K scanning a row of houses to find the brightest neighborhood section.",
        "theory": "Computes max sum subarray of size K in O(N) by adding the incoming element and subtracting the outgoing element from the rolling sum.",
        "dry_run": "arr=[100, 200, 300], K=2.\n1. Sum first window: 100 + 200 = 300. Max = 300.\n2. Slide to 300: sum = 300 + 300 - 100 = 500. Max = 500.",
        "output": "Maximum sum of subarray of size 2: 500"
    },
    # Stacks
    "maxareahistogram": {
        "difficulty": "Hard",
        "analogy": "Finding the largest billboard you can mount flat against adjacent buildings of different heights.",
        "theory": "Finds the largest rectangle in a histogram. Uses monotonic stacks to compute Next Smaller Left (NSL) and Next Smaller Right (NSR) boundaries for each bar.",
        "dry_run": "Heights: [2, 1, 2]. n=3.\n1. NSL = [-1, -1, 1], NSR = [1, 3, 3]\n2. i=0: w=1-(-1)-1=1. Area=2*1=2\n3. i=1: w=3-(-1)-1=3. Area=1*3=3\n4. i=2: w=3-1-1=1. Area=2*1=2. Max = 3.",
        "output": "Maximum rectangular area in histogram: 3"
    },
    "nextgreaterelement": {
        "difficulty": "Medium",
        "analogy": "Standing in a queue, looking over heads to find the next person down the line who is taller than you.",
        "theory": "Finds next greater element to the right for each item. Uses a monotonic stack from right-to-left, popping smaller elements.",
        "dry_run": "arr=[1, 3, 2]\n1. i=2 (val 2): stack empty -> result[2]=-1. push 2.\n2. i=1 (val 3): stack top 2 <= 3 -> pop. stack empty -> result[1]=-1. push 3.\n3. i=0 (val 1): stack top 3 > 1 -> result[0]=3. push 1.",
        "output": "Original Array: [6, 8, 0, 1, 3]\nNext Greater Array: [8, -1, 1, 3, -1]"
    },
    "pushatbottom": {
        "difficulty": "Medium",
        "analogy": "Lifting all cargo boxes off a pallet, placing a new heavy box at the base, then stacking all previous boxes back in their original order.",
        "theory": "Inserts an element at the bottom of a stack recursively. Temporarily unloads the stack onto the recursion call frame, then pushes elements back.",
        "dry_run": "Stack: [1, 2], Data=3\n1. Pop 2. Recurse([1], 3)\n2. Pop 1. Recurse([], 3)\n3. Stack empty -> Push 3. Return.\n4. Push 1, Push 2 -> Stack: [3, 1, 2].",
        "output": "Original Stack: [1, 2, 3]\nAfter pushing 4 at bottom: [4, 1, 2, 3]"
    },
    "reversestack": {
        "difficulty": "Medium",
        "analogy": "Reversing a stack of plates by lifting them off one by one and inserting each plate at the very bottom of the new stack.",
        "theory": "Reverses a stack recursively. Unloads elements onto call frames, recursively reverses the remainder, and inserts the elements at the bottom.",
        "dry_run": "Stack [1, 2].\n1. Pop 2. Reverse([1]) -> Stack is [1].\n2. pushAtBottom([1], 2) -> Stack becomes [2, 1].",
        "output": "Original Stack: [1, 2, 3]\nReversed Stack: [3, 2, 1]"
    },
    "stackusingarray": {
        "difficulty": "Easy",
        "analogy": "A vertical dispenser for cafeteria trays. Trays are loaded and taken from the top.",
        "theory": "Implements LIFO stack using static array, tracking top index cursor.",
        "dry_run": "Push(10): increment top=0, arr[0]=10. Pop(): return arr[top], decrement top=-1.",
        "output": "Top element: 30\nPopped: 30\nNew Top element: 20"
    },
    "stackusingll": {
        "difficulty": "Easy",
        "analogy": "A link chain where new links are hooked only at the top head hook.",
        "theory": "Implements Stack using singly linked list. Pushes and pops at the head node to guarantee O(1) operations.",
        "dry_run": "Push(10): node.next=head, head=node. Pop(): val=head.data, head=head.next.",
        "output": "Top element: 300\nStack elements: 300 200 100"
    },
    "validparentheses": {
        "difficulty": "Easy",
        "analogy": "Russian nesting dolls. Every opening doll must be closed by the matching closing doll in the exact reverse order of opening.",
        "theory": "Balanced bracket verification. Pushes opening brackets onto stack, matching and popping them when matching closing brackets appear.",
        "dry_run": "s = '([])'\n1. '(' -> push. Stack: ['(']\n2. '[' -> push. Stack: ['(', '[']\n3. ']' -> top matches '[' -> pop. Stack: ['(']\n4. ')' -> top matches '(' -> pop. Stack: []. Valid.",
        "output": "({[]}) is valid? true\n([)] is valid? false"
    },
    # Two Pointers
    "containerwithmostwater": {
        "difficulty": "Medium",
        "analogy": "Two people adjusting vertical boards at the edges of a pool to hold water. They keep moving the shorter board inward to find a taller combination.",
        "theory": "Two-pointer O(N) solution. Computes area between lines, then shifts the pointer pointing to the shorter line to maximize volume potential.",
        "dry_run": "heights=[1, 8, 6, 7]. L=0, R=3.\n1. h=min(1,7)=1. w=3. area=3. L < R (1 < 7) -> L=1.\n2. L=1, R=3. h=min(8,7)=7. w=2. area=14. R < L (7 < 8) -> R=2.\n3. L=1, R=2. h=min(8,6)=6. w=1. area=6. Stop. Max = 14.",
        "output": "Maximum water area: 49"
    },
    "threesum": {
        "difficulty": "Medium",
        "analogy": "Finding three weights from a set that perfectly balance a scale at zero. You pick one, then use two pointers to find matching pairs among the rest.",
        "theory": "Finds unique triplets summing to 0. Sorts array, fixes first element, and uses two pointers for the remaining sum to avoid duplicates.",
        "dry_run": "nums=[-1, 0, 1, 2]. sorted=[-1, 0, 1, 2].\n1. i=0 (val -1). L=1 (0), R=3 (2).\n2. sum = -1 + 0 + 2 = 1 > 0 -> decrement R=2.\n3. sum = -1 + 0 + 1 = 0 -> Found [-1, 0, 1]! L=2, R=1. loop ends.",
        "output": "Input Array: [-1, 0, 1, 2, -1, -4]\nTriplets that sum to 0: [[-1, -1, 2], [-1, 0, 1]]"
    },
    "twosumsorted": {
        "difficulty": "Easy",
        "analogy": "Two shoppers trying to spend exactly $10. One starts with cheapest, one with dearest. If total is too high, the dear shopper goes down. If too low, cheap shopper goes up.",
        "theory": "Finds indices of two elements in a sorted array that sum to target using two converging pointers.",
        "dry_run": "nums=[2, 7, 11], target=9. L=0, R=2.\n1. sum = 2 + 11 = 13 > 9 -> R=1.\n2. sum = 2 + 7 = 9 == 9 -> Found [1, 2] (1-indexed).",
        "output": "Sorted Array: [2, 7, 11, 15]\nTarget: 9\nIndices: [1, 2]"
    }
}

# Dynamic default generator for other files
def get_metadata_for_file(name, category):
    key = name.replace(".java", "").lower()
    if key in DSA_METADATA:
        return DSA_METADATA[key]
        
    # Heuristic classifications
    difficulty = "Easy"
    if category in ["BackTracking", "MatrixQs", "Queue", "Stack"] or "Sort" in name or "Search" in name:
        difficulty = "Medium"
    if "Trapping" in name or "Histogram" in name or "Sudoku" in name or "NQueens" in name:
        difficulty = "Hard"
        
    name_clean = re.sub(r'(?<!^)(?=[A-Z])', ' ', name.replace(".java", ""))
    
    return {
        "difficulty": difficulty,
        "analogy": f"Like resolving steps of {name_clean} in real life tasks.",
        "theory": f"Implements standard coding concepts of {name_clean} within the {category} module.",
        "dry_run": f"1. Initialize inputs for {name_clean}.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
        "output": f"Executing {name_clean} main module:\nOperation executed successfully."
    }

def main():
    root = "."
    dsa_data = []
    
    for dirpath, _, filenames in os.walk(root):
        if any(ignored in dirpath for ignored in [".git", ".github", "node_modules", "scripts", "dashboard", "assets"]):
            continue
        for f in filenames:
            if f.endswith(".java"):
                filepath = os.path.join(dirpath, f)
                rel_path = os.path.relpath(filepath, root).replace("\\", "/")
                category = os.path.basename(os.path.dirname(filepath))
                
                with open(filepath, "r", encoding="utf-8") as file:
                    code = file.read()
                    
                meta = get_metadata_for_file(f, category)
                
                # Check for TC/SC in the code comments
                tc = "O(N)"
                sc = "O(1)"
                
                # Regex search for TC/SC in comments
                tc_match = re.search(r"(?:time\s*complexity|time)\s*:\s*(O\([^)]+\))", code, re.IGNORECASE)
                if tc_match:
                    tc = tc_match.group(1).strip()
                else:
                    if "binary" in f.lower() or "search" in f.lower():
                        if "matrix" in f.lower() or "2d" in f.lower():
                            tc = "O(N + M)"
                        else:
                            tc = "O(log N)"
                    elif "sort" in f.lower():
                        if "merge" in f.lower() or "quick" in f.lower() or "heap" in f.lower():
                            tc = "O(N log N)"
                        else:
                            tc = "O(N^2)"
                    elif "nqueens" in f.lower() or "sudoku" in f.lower():
                        tc = "O(N!)"
                        
                sc_match = re.search(r"(?:space\s*complexity|space)\s*:\s*(O\([^)]+\))", code, re.IGNORECASE)
                if sc_match:
                    sc = sc_match.group(1).strip()
                else:
                    if "merge" in f.lower():
                        sc = "O(N)"
                    elif "stack" in f.lower() or "queue" in f.lower() or "list" in f.lower():
                        sc = "O(N)"
                
                dsa_data.append({
                    "name": f,
                    "path": rel_path,
                    "category": category,
                    "code": code,
                    "difficulty": meta["difficulty"],
                    "analogy": meta["analogy"],
                    "theory": meta["theory"],
                    "dry_run": meta["dry_run"],
                    "output": meta["output"],
                    "timeComplexity": tc,
                    "spaceComplexity": sc
                })
                
    os.makedirs("dashboard", exist_ok=True)
    
    with open("dashboard/data.js", "w", encoding="utf-8") as f:
        f.write("// Auto-generated data file from scripts/generate_dashboard_data.py\n")
        f.write("const DSA_DATA = ")
        json.dump(dsa_data, f, indent=2)
        f.write(";\n")
        
    print(f"Generated dashboard/data.js with {len(dsa_data)} files.")

if __name__ == "__main__":
    main()
