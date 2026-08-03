// Lana Del Rey Aesthetic Java & DSA Repository Browser
// Built with love by Ash

// --- REPOSITORY STRUCTURE DEFINITIONS ---
const JAVA_ROADMAP = [
    {
        id: "java-basics",
        title: "Java Basics",
        desc: "Variables, data types, operators, loops, and functions.",
        topics: ["Basics_of_java"]
    },
    {
        id: "java-math",
        title: "Math for DSA",
        desc: "GCD, LCM, prime checks, factorial, Fibonacci.",
        topics: ["Math_for_DSA"]
    },
    {
        id: "java-complexity",
        title: "Time & Space Complexity",
        desc: "Big-O notation, complexity examples, performance analysis.",
        topics: ["Time_and_Space_Complexity"]
    },
    {
        id: "java-arrays",
        title: "Arrays in Java",
        desc: "Contiguous collections, jagged arrays, and 2D matrices.",
        topics: ["Arrays"]
    },
    {
        id: "java-strings",
        title: "String Handling",
        desc: "Immutability, character sequences, StringBuilder & StringBuffer.",
        topics: ["Strings"]
    },
    {
        id: "java-oop",
        title: "Object-Oriented Programming",
        desc: "Inheritance, Polymorphism, Abstraction, Encapsulation, Interfaces.",
        topics: ["OOPS"]
    },
    {
        id: "java-matrixqs",
        title: "Matrix Problems",
        desc: "2D matrix operations, diagonal sums, spiral traversal, transpose.",
        topics: ["MatrixQs"]
    }
];

const DSA_ROADMAP = [
    { id: "time-complexity", title: "Time & Space Complexity", category: "Time_and_Space_Complexity" },
    { id: "arrays", title: "Arrays", category: "Arrays" },
    { id: "strings", title: "Strings", category: "Strings" },
    { id: "searching", title: "Searching", category: "Searching" },
    { id: "sorting", title: "Sorting", category: "Sorting" },
    { id: "recursion", title: "Recursion", category: "Recursion" },
    { id: "backtracking", title: "Backtracking", category: "BackTracking" },
    { id: "bit-manipulation", title: "Bit Manipulation", category: "BitManipulation" },
    { id: "matrix", title: "Matrix Problems", category: "MatrixQs" },
    { id: "two-pointer", title: "Two Pointer", category: "TwoPointer" },
    { id: "sliding-window", title: "Sliding Window", category: "SlidingWindow" },
    { id: "linked-list", title: "Linked List", category: "Lists" },
    { id: "stack", title: "Stack", category: "Stack" },
    { id: "queue", title: "Queue", category: "Queue" },
    { id: "greedy", title: "Greedy Algorithms", category: "Greedy" }
];

const TOPIC_DETAILS = {
    "Basics_of_java": {
        sarcasm: "Because semicolons apparently determine my happiness.",
        definition: "Java Basics sets up variables, basic data types, operators, and control flow blocks.",
        analogy: "Like writing a baking recipe. You list your ingredients (variables), select correct measuring cups (data types), and execute step-by-step directions (control flow).",
        complexities: [
            { op: "Variable Assignment", best: "O(1)", worst: "O(1)" },
            { op: "Loop Traversal (N)", best: "O(N)", worst: "O(N)" }
        ],
        advantages: ["Stops type mismatches early.", "Provides clean structured logic blocks."],
        disadvantages: ["Requires heavy boilerplate initialization.", "Binds variables statically."],
        mistakes: ["Reading uninitialized local variables.", "Creating infinite loops by forgetting pointer updates."]
    },
    "Math_for_DSA": {
        sarcasm: "Math logic. Good at calculations, bad at feelings.",
        definition: "Algorithmic mathematics dealing with prime numbers, GCD, LCM, factorials, and Fibonacci series calculations.",
        analogy: "Like dividing coins into equal piles, finding the highest common factor of building pillars, or counting paths on a staircase.",
        complexities: [
            { op: "GCD (Euclidean Algorithm)", best: "O(log(min(a, b)))", worst: "O(log(min(a, b)))" },
            { op: "Prime Check (Trial Division)", best: "O(1)", worst: "O(√N)" }
        ],
        advantages: ["Reduces search spaces by applying mathematical shortcuts.", "Euclidean GCD avoids slow subtraction steps."],
        disadvantages: ["Factorials can overflow primitive types quickly.", "Recursive Fibonacci has redundant branch evaluations."],
        mistakes: ["Using int instead of long for factorial computations.", "Failing to check division-by-zero bounds during modulo steps."]
    },
    "Arrays": {
        sarcasm: "Everything is in order. If only life did the same.",
        definition: "A collection of items of the same type stored in contiguous memory cells, allowing fast indexing.",
        analogy: "A row of numbered lockers. You can open locker #5 instantly, but inserting a new locker in the middle requires sliding all subsequent lockers down the corridor.",
        complexities: [
            { op: "Access by Index", best: "O(1)", worst: "O(1)" },
            { op: "Search Value (Linear)", best: "O(1)", worst: "O(N)" },
            { op: "Insert / Delete node", best: "O(1) (at end)", worst: "O(N) (at start)" }
        ],
        advantages: ["Fast constant-time access via arithmetic index offsets.", "Contiguous storage utilizes CPU cache line benefits."],
        disadvantages: ["Fixed capacity. Resizing requires copying elements into a new array.", "Middle index modifications are slow due to shifts."],
        mistakes: ["ArrayIndexOutOfBoundsException by querying index >= array.length.", "Forgetting that array indices are zero-based."]
    },
    "Strings": {
        sarcasm: "Manipulating characters because people are too hard to change.",
        definition: "Sequences of characters. Strings are immutable in Java, while StringBuilder and StringBuffer allow mutable modifications.",
        analogy: "Writing text in ink. Once written, it cannot be changed. If you want to modify a page, you must write a new page from scratch.",
        complexities: [
            { op: "Char Look-up", best: "O(1)", worst: "O(1)" },
            { op: "String Concatenation (+)", best: "O(N + M)", worst: "O(N + M)" }
        ],
        advantages: ["String pool references save heap allocations.", "Immutable strings are naturally thread-safe."],
        disadvantages: ["Concatenation creates garbage heap objects.", "Slow matching without specialized algorithms."],
        mistakes: ["Comparing string values using == instead of the .equals() method.", "Using String inside loops instead of StringBuilder/StringBuffer."]
    },
    "OOPS": {
        sarcasm: "Inherited code. If only I inherited generational wealth instead.",
        definition: "Object-Oriented Programming (OOP) structures systems around classes and objects using encapsulation, inheritance, polymorphism, and abstraction.",
        analogy: "Like blueprinting a house. The blueprint is the Class, and the physical houses on the street are Objects. Inheritance lets you reuse the standard house layout to build townhomes.",
        complexities: [
            { op: "Object Instantiation", best: "O(1)", worst: "O(1)" },
            { op: "Dynamic Dispatch Resolve", best: "O(1)", worst: "O(1)" }
        ],
        advantages: ["Organizes code logically, mimicking real-world objects.", "Encapsulation protects private fields from unsafe changes."],
        disadvantages: ["Object allocation adds heap metadata overhead.", "Can create deep, rigid class heirarchies."],
        mistakes: ["Over-inheritance (using 'extends') when composition ('has-a') is better.", "Exposing mutable class variables directly without private encapsulation."]
    },
    "Collections": {
        sarcasm: "Containers. Trying to store my messy thoughts.",
        definition: "Java Collections Framework provides standardized data structures: List, Set, Map, Queue, and Deque.",
        analogy: "A home organization system. You have boxes for duplicates (Lists), pill organizers for unique items (Sets), and a keyholder rack (Maps) matching name tags to keys.",
        complexities: [
            { op: "ArrayList Index Access", best: "O(1)", worst: "O(1)" },
            { op: "HashSet Search", best: "O(1) average", worst: "O(N)" }
        ],
        advantages: ["High-performance implementations for standard data structures.", "Interoperable APIs simplify data passing."],
        disadvantages: ["Autoboxing primitives to wrapper objects adds memory.", "Thread-unsafe by default without synchronized wrappers."],
        mistakes: ["Selecting ArrayList when frequent middle inserts suggest LinkedList.", "Failing to override hashCode() and equals() when using custom classes in HashSets."]
    },
    "Exception_Handling": {
        sarcasm: "Handling errors. Wish I could handle my daily anxiety.",
        definition: "A system in Java to capture and resolve runtime errors, preventing program termination.",
        analogy: "A safety net under a circus trapeze. If the artist slips (exception thrown), the net catches them (catch block) so they can recover safely.",
        complexities: [
            { op: "Try-Catch Entry", best: "O(1)", worst: "O(1)" }
        ],
        advantages: ["Separates error-handling logic from primary business code.", "Allows applications to fail gracefully or retry."],
        disadvantages: ["Throwing exceptions is expensive due to stack trace creation.", "Abusing catch blocks can hide serious root errors."],
        mistakes: ["Catching generic Throwable or Exception instead of specific exceptions.", "Swallowing exceptions by leaving catch blocks empty."]
    },
    "Generics": {
        sarcasm: "Type safety. Because matching boundaries is comforting.",
        definition: "Generics allow classes, interfaces, and methods to operate on parameterized types, offering compile-time checks.",
        analogy: "Labeled shipping crates. Instead of shipping loose items, you declare a crate that only accepts 'Fruit' or 'Books', catching mistakes at the dock.",
        complexities: [
            { op: "Cast Resolution", best: "O(1)", worst: "O(1)" }
        ],
        advantages: ["Eliminates manual type-casting checks.", "Guarantees type-safety at compile time, eliminating ClassCastExceptions."],
        disadvantages: ["Type erasure means type parameters are not available at runtime.", "Cannot instantiate generic types directly (new T())."],
        mistakes: ["Using raw types (ArrayList) instead of parameterized types (ArrayList<String>).", "Failing to understand the difference between wildcards <? extends T> and <? super T>."]
    },
    "Streams": {
        sarcasm: "Lambda pipelines. Let them flow away like my problems.",
        definition: "A sequence of elements supporting sequential and parallel aggregate operations in a functional style.",
        analogy: "An assembly line. Raw materials flow down the belt, passing through inspectors (filter), packers (map), and finally sorted into boxes (collect).",
        complexities: [
            { op: "Lazy Stream Eval", best: "O(1)", worst: "O(1)" },
            { op: "Terminal Collect", best: "O(N)", worst: "O(N)" }
        ],
        advantages: ["Enables elegant, declarative, and clean processing loops.", "Built-in support for parallel stream multi-core scaling."],
        disadvantages: ["Harder to debug and print mid-stream step states.", "Slight performance overhead compared to raw loops."],
        mistakes: ["Reusing a stream after a terminal operation has already executed.", "Forgetting that streams are lazy and require a terminal operation to run."]
    },
    "File_Handling": {
        sarcasm: "Persistent inputs. Unlike the promises they made.",
        definition: "Enables Java applications to read from and write to persistent storage files on disk.",
        analogy: "Writing entries in a paper journal. You open the journal (File), write lines with a pen (Writer), and close it so the entry is saved.",
        complexities: [
            { op: "Buffered File Read", best: "O(N) (N is file size)", worst: "O(N)" }
        ],
        advantages: ["Saves data permanently across system reloads.", "Supports buffered streams for efficient disk transactions."],
        disadvantages: ["Disk transactions are slow compared to RAM accesses.", "Required exception handling adds boilerplate code."],
        mistakes: ["Forgetting to close File Readers/Writers, causing file lock issues.", "Hardcoding absolute paths instead of relative resources."]
    },
    "JDBC": {
        sarcasm: "Bridges. Connecting different worlds.",
        definition: "Java Database Connectivity (JDBC) is a standardized Java API to connect and execute SQL queries on databases.",
        analogy: "An interpreter at an embassy. Your Java code speaks English, the database speaks SQL, and the JDBC driver translates.",
        complexities: [
            { op: "Statement Execute", best: "O(Q) (Q is query complexity)", worst: "O(Q)" }
        ],
        advantages: ["Standardized API allows switching database vendors easily.", "PreparedStatements prevent SQL Injection attacks."],
        disadvantages: ["Manual connection management is error-prone.", "High boilerplate compared to modern ORMs (Hibernate)."],
        mistakes: ["Concatenating user inputs directly into SQL strings instead of using PreparedStatements parameters.", "Failing to close ResultSet and Connection objects."]
    },
    "Multithreading": {
        sarcasm: "Concurrent loops. My brain has too many tabs open.",
        definition: "Executing multiple threads concurrently to maximize CPU core utilization.",
        analogy: "A restaurant kitchen. One chef chops vegetables, another boils water, and a third makes sauce, rather than one chef waiting for each step.",
        complexities: [
            { op: "Thread Spawn", best: "O(1)", worst: "O(1)" }
        ],
        advantages: ["Prevents UI blocking by running heavy tasks in the background.", "Improves execution speed on multi-core processors."],
        disadvantages: ["Can introduce race conditions, deadlocks, and thread leaks.", "Context switching adds CPU overhead."],
        mistakes: ["Using Thread.run() instead of Thread.start() to launch a thread.", "Incorrect locking leading to deadlocks or thread starvation."]
    },
    "Advanced_Java": {
        sarcasm: "Deep reflect. Staring into the compiled void.",
        definition: "Covers Reflection APIs, custom annotations, network sockets, and JVM class loading mechanisms.",
        analogy: "A mechanic looking under the hood of a moving car, adjusting valves and changing oil dynamically while driving.",
        complexities: [
            { op: "Reflection Field Lookup", best: "O(1)", worst: "O(F)" }
        ],
        advantages: ["Reflection allows dynamic dependency injection frameworks (Spring).", "Annotations decouple configuration from logic."],
        disadvantages: ["Reflection bypasses compile-time checks.", "Slower performance due to dynamic class resolutions."],
        mistakes: ["Abusing reflection when simple interfaces would suffice.", "Failing to close network socket input streams."]
    },
    "Time_and_Space_Complexity": {
        sarcasm: "Growth rates. Asymptotic scaling of stress.",
        definition: "Mathematical notations (Big-O) used to define the growth rate of algorithms in terms of execution steps (Time) and auxiliary memory (Space).",
        analogy: "Planning a travel route. You measure how many miles you walk (Time) and how much luggage you must carry with you (Space).",
        complexities: [
            { op: "Constant Check", best: "O(1)", worst: "O(1)" },
            { op: "Nested Loops", best: "O(N^2)", worst: "O(N^2)" }
        ],
        advantages: ["Provides machine-independent metrics for algorithm efficiency.", "Allows selecting optimal solutions before writing code."],
        disadvantages: ["Focuses on asymptotic limits; ignores constant factor differences for small inputs.", "Mathematical analysis requires practice."],
        mistakes: ["Assuming recursive calls have O(1) space complexity (ignoring the call stack).", "Confusing worst-case time with average-case time."]
    },
    "BitManipulation": {
        sarcasm: "Direct switches. Simple, binary choices.",
        definition: "Logical calculations performed directly on binary digits of integers.",
        analogy: "A panel of light switches. You can flip switches, check if a switch is on, or toggle them instantly without visiting each light.",
        complexities: [
            { op: "Bitwise AND/OR/XOR", best: "O(1)", worst: "O(1)" }
        ],
        advantages: ["Runs directly on CPU registers, yielding maximum performance.", "Compresses multiple booleans into a single integer, saving space."],
        disadvantages: ["Hard to read, write, and maintain.", "Easy to run into operator precedence issues."],
        mistakes: ["Assuming shift operators have higher priority than arithmetic.", "Forgetting parenthesis around logical tests."]
    },
    "Lists": {
        sarcasm: "Sequenced nodes. Emotionally attached to memory locations.",
        definition: "A collection of nodes linked sequentially by references, allocated dynamically on the heap.",
        analogy: "A treasure hunt. You start at clue 1, which tells you where clue 2 is hidden. You cannot skip clues, but adding a clue only requires modifying one card.",
        complexities: [
            { op: "Node Access / Search", best: "O(1)", worst: "O(N)" },
            { op: "Insert / Delete Node", best: "O(1)", worst: "O(1) (given node reference)" }
        ],
        advantages: ["Dynamic scaling. No resizing copies required.", "O(1) node inserts and deletions."],
        disadvantages: ["No constant-time random access.", "Pointers consume extra memory space."],
        mistakes: ["Losing the head node pointer, making the entire list garbage collected.", "Failing to check if a node's next reference is null before dereferencing."]
    },
    "Stack": {
        sarcasm: "Last one in. Just like my sleep schedule.",
        definition: "LIFO (Last In, First Out) data structure. Push and pop operations are allowed only at the top.",
        analogy: "A stack of plates. You place new plates on top, and when you take a plate, you take the top one first.",
        complexities: [
            { op: "Push", best: "O(1)", worst: "O(1)" },
            { op: "Pop", best: "O(1)", worst: "O(1)" }
        ],
        advantages: ["Simple, clean LIFO access logic.", "Crucial for backtracking algorithms and expression evaluation."],
        disadvantages: ["No random access to middle or bottom elements.", "Static array implementations have size limitations."],
        mistakes: ["Popping from an empty stack, causing underflow errors.", "Mismatched push/pop operations in parsing algorithms."]
    },
    "Queue": {
        sarcasm: "Waiting patiently. Unlike me.",
        definition: "FIFO (First In, First Out) data structure. Insert at rear (enqueue), remove from front (dequeue).",
        analogy: "A queue at a coffee shop counter. The first person to arrive is served first, and new customers queue at the back.",
        complexities: [
            { op: "Enqueue (Add)", best: "O(1)", worst: "O(1)" },
            { op: "Dequeue (Remove)", best: "O(1)", worst: "O(1)" }
        ],
        advantages: ["Guarantees elements are processed in order of insertion.", "Excellent for breadths-first traversal and request buffering."],
        disadvantages: ["Cannot access middle elements without clearing the queue.", "Circular arrays have fixed capacity limits."],
        mistakes: ["Enqueuing to a full circular queue.", "Calling remove() on an empty queue without checking isEmpty()."]
    },
    "HashMap": {
        sarcasm: "Key matches. Where's my matching pair?",
        definition: "Stores key-value pairs using a hashing algorithm to map keys to bucket indices.",
        analogy: "A dictionary index. You look up a word (key) and find its page number (value) instantly without reading the book.",
        complexities: [
            { op: "Insert / Put", best: "O(1)", worst: "O(N)" },
            { op: "Search / Get", best: "O(1)", worst: "O(N)" }
        ],
        advantages: ["Constant-time lookups and insertions on average.", "Extremely flexible key-value associations."],
        disadvantages: ["Does not preserve element order.", "Requires good hash functions to prevent collisions."],
        mistakes: ["Keys missing hashCode() and equals() implementations.", "Using mutable objects as keys."]
    },
    "Heap": {
        sarcasm: "Priority order. Urgent calls only.",
        definition: "A complete binary tree satisfying the heap property: parent node is always max (MaxHeap) or min (MinHeap) of its children.",
        analogy: "A hospital triage queue. The patient with the highest severity (priority) is treated next, regardless of when they arrived.",
        complexities: [
            { op: "Get Max / Min", best: "O(1)", worst: "O(1)" },
            { op: "Insert Element", best: "O(log N)", worst: "O(log N)" }
        ],
        advantages: ["Highly efficient priority retrieval.", "Ideal for sorting (HeapSort) and finding K largest elements."],
        disadvantages: ["No search support. Finding an arbitrary element takes O(N) time.", "Pointers or array index math add tree overhead."],
        mistakes: ["Assuming a heap is sorted (it only guarantees parent-child order, not left-right order).", "Failing to run heapify down after removing the root."]
    },
    "Trees": {
        sarcasm: "Hierarchies. Branching options.",
        definition: "A non-linear hierarchical data structure containing nodes connected by edges, with a single root.",
        analogy: "A family ancestry tree or a corporate organizational chart, starting with the CEO down to employees.",
        complexities: [
            { op: "Pre-order Traversal", best: "O(N)", worst: "O(N)" },
            { op: "In-order Traversal", best: "O(N)", worst: "O(N)" }
        ],
        advantages: ["Represents hierarchical data naturally (e.g. file directories).", "Supports fast, sorted traversals."],
        disadvantages: ["Requires complex recursion/pointer manipulations.", "Unbalanced structures degrade search efficiency to O(N)."],
        mistakes: ["Forgetting the base case in tree traversals.", "Failing to check if child references are null before traversing."]
    },
    "BST": {
        sarcasm: "Binary Search Trees. Fast queries, slow balancing.",
        definition: "A Binary Search Tree (BST) is a binary tree where left child nodes are smaller than parent, and right child nodes are larger.",
        analogy: "An alphabetized cabinet. Folder files A-L are in the left drawer, M-Z are in the right drawer.",
        complexities: [
            { op: "Search Target", best: "O(log N)", worst: "O(N) (skewed tree)" }
        ],
        advantages: ["Maintains sorted order dynamically.", "Average logarithmic search and insert operations."],
        disadvantages: ["Worst case degrades to O(N) if keys are inserted in sorted order.", "Requires rotations (AVL/Red-Black) to keep balanced."],
        mistakes: ["Failing to handle duplicate node keys.", "Incorrect pointer assignments during node deletions."]
    },
    "Trie": {
        sarcasm: "Autocomplete prefixes. Predicting my choices.",
        definition: "A Trie (prefix tree) is a search tree used to store associative arrays where keys are usually strings.",
        analogy: "Looking up words in a dictionary by spelling them out letter by letter. As you type 'c'-'a'-'t', you navigate down specific branches.",
        complexities: [
            { op: "Insert Word", best: "O(L)", worst: "O(L)" }
        ],
        advantages: ["Fast prefix search. Ideal for autocomplete and spell checkers.", "Saves space by sharing character node paths."],
        disadvantages: ["High memory cost because each node contains an array of 26 pointers.", "Slower than hash tables for exact matches."],
        mistakes: ["Failing to mark the endOfWord boolean when inserting a word.", "Creating duplicate arrays of size 26 unnecessarily at leaf nodes."]
    },
    "Graphs": {
        sarcasm: "Trust issues, but with nodes.",
        definition: "A network of vertices (nodes) connected by edges. Can be represented as adjacency lists or matrices.",
        analogy: "A map of flight routes connecting cities, or a social network connecting friends.",
        complexities: [
            { op: "BFS Traversal", best: "O(V + E)", worst: "O(V + E)" },
            { op: "DFS Traversal", best: "O(V + E)", worst: "O(V + E)" }
        ],
        advantages: ["Models complex networks, dependencies, and maps.", "Supports pathfinding optimization algorithms."],
        disadvantages: ["High computational costs for dense graphs.", "Complex memory representations."],
        mistakes: ["Failing to track visited vertices, leading to infinite loops in cyclic graphs.", "Choosing adjacency matrix when adjacency list is more memory-efficient for sparse graphs."]
    },
    "Greedy": {
        sarcasm: "Local optimum. Short-term wins.",
        definition: "An algorithmic paradigm that makes the locally optimal choice at each stage in the hope of finding a global optimum.",
        analogy: "A shopping spree. You always choose the most expensive item on the shelf first to get the most value, hoping it fits your budget.",
        complexities: [
            { op: "Activity Selection", best: "O(N log N)", worst: "O(N log N)" }
        ],
        advantages: ["Easy to design and implement.", "Fast execution since it does not search all combinations."],
        disadvantages: ["Can produce suboptimal solutions (fails on problems without greedy optimal structure, like 0/1 Knapsack).", "Proving correctness is mathematically complex."],
        mistakes: ["Using greedy sorting without verifying that subproblems are independent.", "Assuming greedy choice works for shortest path in graphs with negative weights."]
    },
    "DP": {
        sarcasm: "Trauma, but optimized.",
        definition: "Dynamic Programming (DP) solves complex problems by breaking them down into overlapping subproblems, storing results in a lookup table (memoization/tabulation).",
        analogy: "Writing down 1+1+1+1+1 = 5. If you write another +1, you don't count from 1 again. You remember the 5, add 1, and get 6.",
        complexities: [
            { op: "Memoized Fib", best: "O(N)", worst: "O(N)" },
            { op: "LCS Subsequence", best: "O(N * M)", worst: "O(N * M)" }
        ],
        advantages: ["Reduces exponential O(2^N) time complexities to polynomial O(N) or O(N²).", "Guarantees optimal solutions by evaluating subproblems once."],
        disadvantages: ["High memory cost to store subproblem states.", "Identifying overlapping states is difficult."],
        mistakes: ["Failing to define state dimensions correctly.", "Forgetting to initialize the memoization array/table with empty values."]
    },
    "Segment_Tree": {
        sarcasm: "Interval aggregates. Chunking tasks.",
        definition: "A binary tree used for storing intervals or segments, allowing fast range queries and updates.",
        analogy: "A district sales manager structure. Managers compute sales sums for their districts and report to regional managers, allowing quick regional statistics.",
        complexities: [
            { op: "Range Query", best: "O(log N)", worst: "O(log N)" }
        ],
        advantages: ["Performs both range queries and single-element updates in logarithmic time.", "Supports arbitrary associative functions (sum, min, max, gcd)."],
        disadvantages: ["Requires O(4N) memory space.", "Complex to implement compared to prefix sum arrays."],
        mistakes: ["Failing to update parent nodes recursively after modifying a leaf node.", "Failing to handle overlapping interval boundary checks correctly."]
    },
    "Advanced_Algorithms": {
        sarcasm: "Cinematic logic. Over-engineered paths.",
        definition: "Covers advanced graph optimization (Kruskal, Prim), string matching (KMP), and advanced memory structures.",
        analogy: "Planning a global shipping logistics network, optimizing routes, and matching patterns in DNA sequences.",
        complexities: [
            { op: "Kruskal MST", best: "O(E log V)", worst: "O(E log V)" }
        ],
        advantages: ["Solves highly complex real-world computing problems.", "Provably optimal limits for routing and sorting."],
        disadvantages: ["Extremely difficult to design and debug.", "High constants in asymptotic complexities."],
        mistakes: ["Failing to path-compress in Disjoint Set Union (DSU) operations.", "Incorrect calculation of KMP prefix lookup table index shifts."]
    },
    "MatrixQs": {
        sarcasm: "2D grids. Even my problems have two dimensions.",
        definition: "Matrix problems involve operations on 2D arrays: searching, traversal, transformations, and aggregations like diagonal sums and spiral printing.",
        analogy: "A spreadsheet of numbers. You can read cells by (row, column), slide across rows, snake down columns, or walk diagonally like a chess bishop.",
        complexities: [
            { op: "Matrix Traversal", best: "O(N*M)", worst: "O(N*M)" },
            { op: "Spiral Print", best: "O(N*M)", worst: "O(N*M)" },
            { op: "Staircase Search", best: "O(1)", worst: "O(N+M)" }
        ],
        advantages: ["Constant-time O(1) random cell access by index.", "Efficient columnar and diagonal operations with index math."],
        disadvantages: ["High space usage for dense matrices.", "Cache-unfriendly traversals (column-major access) can be slow."],
        mistakes: ["Forgetting to check row vs. column bounds in nested loops.", "Confusing row-major and column-major indexing in transpose operations."]
    },
    "TwoPointer": {
        sarcasm: "Two pointers. Because one wasn't causing enough confusion.",
        definition: "A technique using two index pointers that traverse an array simultaneously from different positions, reducing nested loop complexities to linear time.",
        analogy: "Two friends walking from opposite ends of a bridge toward each other, signaling when they find a matching pair of tiles.",
        complexities: [
            { op: "Two Sum (Sorted)", best: "O(N)", worst: "O(N)" },
            { op: "Three Sum", best: "O(N^2)", worst: "O(N^2)" }
        ],
        advantages: ["Reduces O(N^2) brute force to O(N) for sorted arrays.", "O(1) extra space since no extra data structures are needed."],
        disadvantages: ["Only works efficiently on sorted arrays for most problems.", "Logic can become tricky with duplicates."],
        mistakes: ["Moving both pointers simultaneously without checking target first.", "Forgetting to sort the input array before applying two pointers."]
    },
    "SlidingWindow": {
        sarcasm: "A window that doesn't need curtains. Just results.",
        definition: "The Sliding Window technique maintains a running computation over a subset (window) of array elements, extending or shrinking the window based on constraints.",
        analogy: "Sliding a picture frame across a photo strip, always showing the same width of image, but revealing different parts as it moves.",
        complexities: [
            { op: "Fixed Window Max Sum", best: "O(N)", worst: "O(N)" },
            { op: "Variable Window (Longest No-Repeat)", best: "O(N)", worst: "O(N)" }
        ],
        advantages: ["Converts O(N^2) or O(N^3) brute force into O(N) solutions.", "Elegant and memory-efficient — only the window bounds and a running value are tracked."],
        disadvantages: ["Only suitable for contiguous subarray / substring problems.", "Variable window boundaries can be tricky to manage."],
        mistakes: ["Not handling duplicate characters correctly in variable-window problems.", "Forgetting to shrink the left pointer when constraints are violated."]
    }
};

let currentView = "home";
let selectedTopic = "";
let selectedProblem = null;
let codeMirrorInstance = null;

// Helper: convert camelCase filenames to readable titles
function cleanTitle(filename) {
    let name = filename.replace(/\.java$/, "");
    name = name.replace(/(?<!^)(?=[A-Z])/g, " ");
    name = name.replace(/[_-]+/g, " ");
    return name.replace(/\s+/g, " ").trim();
}

// Global router
function navigateTo(view, arg1 = null) {
    document.querySelectorAll(".view-pane").forEach(v => v.classList.remove("active"));
    document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));

    // Find nav-link with corresponding data-target
    const activeLink = document.querySelector(`.nav-link[data-target="${view}"]`);
    if (activeLink) activeLink.classList.add("active");

    currentView = view;

    if (view === "home") {
        document.getElementById("view-home").classList.add("active");
    } else if (view === "java") {
        renderRoadmap("java");
        document.getElementById("view-java").classList.add("active");
    } else if (view === "dsa") {
        renderRoadmap("dsa");
        document.getElementById("view-dsa").classList.add("active");
    } else if (view === "roadmap") {
        document.getElementById("view-roadmap").classList.add("active");
    } else if (view === "topic-detail") {
        selectedTopic = arg1;
        renderTopicDetails();
        document.getElementById("view-topic-detail").classList.add("active");
    } else if (view === "program-detail") {
        selectedProblem = arg1;
        renderProgramDetails();
        document.getElementById("view-program-detail").classList.add("active");
    } else if (view === "getting-started") {
        document.getElementById("view-getting-started").classList.add("active");
    } else if (view === "about") {
        document.getElementById("view-about").classList.add("active");
    }

    // Close mobile drawer if open
    const drawer = document.getElementById("nav-mobile-drawer");
    if (drawer) {
        drawer.classList.remove("open");
        drawer.setAttribute("aria-hidden", "true");
        const hamburger = document.getElementById("nav-hamburger");
        if (hamburger) hamburger.setAttribute("aria-expanded", "false");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Render timelines/roadmaps for Java and DSA
function renderRoadmap(type) {
    const timeline = document.getElementById(type === "java" ? "java-timeline" : "dsa-timeline");
    timeline.innerHTML = "";

    const list = type === "java" ? JAVA_ROADMAP : DSA_ROADMAP;

    list.forEach(node => {
        const item = document.createElement("div");
        item.className = "roadmap-node-container";

        // Count files in this roadmap category
        let filesCount = 0;
        let categoryKey = "";
        
        if (type === "java") {
            node.topics.forEach(cat => {
                filesCount += DSA_DATA.filter(f => f.category === cat).length;
            });
            categoryKey = node.topics[0];
        } else {
            filesCount = DSA_DATA.filter(f => f.category === node.category).length;
            categoryKey = node.category;
        }

        const fileLabel = filesCount > 0 ? `${filesCount} file${filesCount !== 1 ? 's' : ''}` : 'Browse';

        item.innerHTML = `
            <div class="roadmap-dot"></div>
            <div class="roadmap-card">
                <h3>${node.title}</h3>
                <p>${type === "java" ? node.desc : fileLabel + " in this topic"}</p>
                <span class="roadmap-file-count">${filesCount > 0 ? '☕ ' + filesCount + ' program' + (filesCount !== 1 ? 's' : '') : '📂 Browse'}</span>
            </div>
        `;
        
        item.querySelector(".roadmap-card").addEventListener("click", () => {
            navigateTo("topic-detail", categoryKey);
        });

        timeline.appendChild(item);
    });
}

// Render Topic Details (Step 2)
function renderTopicDetails() {
    const details = TOPIC_DETAILS[selectedTopic] || {
        sarcasm: "Trust the compiler.",
        definition: "Conceptual topic in Java DSA.",
        analogy: "No analogy defined.",
        complexities: [],
        advantages: ["Standardized computational logic.", "Aids in writing code structures."],
        disadvantages: ["Adds memory/processing step overhead.", "Requires practice to master."],
        mistakes: ["Failing to handle null conditions.", "Boundary checking errors."]
    };

    document.getElementById("topic-breadcrumb-self").innerText = selectedTopic;
    
    // Check if category belongs to Java or DSA roadmap for breadcrumbs parent
    const isJavaCategory = JAVA_ROADMAP.some(sec => sec.topics.includes(selectedTopic));
    const breadcrumbParent = document.getElementById("topic-breadcrumb-parent");
    if (isJavaCategory) {
        breadcrumbParent.innerText = "Java Track";
        breadcrumbParent.onclick = () => navigateTo("java");
        document.getElementById("topic-module-label").innerText = "Java Programming Module";
    } else {
        breadcrumbParent.innerText = "DSA Track";
        breadcrumbParent.onclick = () => navigateTo("dsa");
        document.getElementById("topic-module-label").innerText = "Data Structures & Algorithms";
    }

    document.getElementById("topic-title").innerText = cleanTitle(selectedTopic);
    document.getElementById("topic-sarcastic-subtitle").innerText = `"${details.sarcasm}"`;
    document.getElementById("topic-def-text").innerText = details.definition;
    document.getElementById("topic-analogy-text").innerText = details.analogy;

    // Render complexities
    const tbody = document.getElementById("topic-complexity-tbody");
    tbody.innerHTML = "";
    if (!details.complexities || details.complexities.length === 0) {
        tbody.innerHTML = `<tr><td colspan="3" style="text-align:center; color:var(--color-muted);">No complexities tabulated.</td></tr>`;
    } else {
        details.complexities.forEach(row => {
            const tr = document.createElement("tr");
            tr.innerHTML = `<td><strong>${row.op}</strong></td><td><code>${row.best}</code></td><td><code>${row.worst}</code></td>`;
            tbody.appendChild(tr);
        });
    }

    // Render pros list
    const pros = document.getElementById("topic-advantages-list");
    pros.innerHTML = "";
    details.advantages.forEach(adv => {
        const li = document.createElement("li");
        li.innerText = adv;
        pros.appendChild(li);
    });

    // Render cons list
    const cons = document.getElementById("topic-disadvantages-list");
    cons.innerHTML = "";
    details.disadvantages.forEach(dis => {
        const li = document.createElement("li");
        li.innerText = dis;
        cons.appendChild(li);
    });

    // Render mistakes
    const mistakes = document.getElementById("topic-mistakes-list");
    mistakes.innerHTML = "";
    details.mistakes.forEach(mis => {
        const li = document.createElement("li");
        li.innerText = mis;
        mistakes.appendChild(li);
    });

    // Render solved program cards inside topic
    renderTopicProgramsGrid();
    
    // Update Sidebar Navigation Scrollspy active indicators
    setupSidebarScrollspy();
}

// Render solved program cards grid in topic view
function renderTopicProgramsGrid() {
    const grid = document.getElementById("topic-programs-grid");
    grid.innerHTML = "";

    const questions = DSA_DATA.filter(f => f.category === selectedTopic);

    const progressMascot = document.getElementById("topic-progress-mascot");

    if (questions.length === 0) {
        grid.innerHTML = `
            <div class="program-card" style="grid-column: 1/-1; width:100%; border-style:dashed; cursor:default; background-color:transparent;">
                <img src="../assets/disgust.png" alt="Anya waiting" style="width:80px; height:auto; display:block; margin:0 auto 12px auto;">
                <h3 style="font-family:var(--font-serif); font-style:italic; text-align:center;">No files here yet.</h3>
                <p style="text-align:center; color:var(--color-muted);">Add <code>.java</code> files to the <code>${selectedTopic}</code> directory and regenerate data to see them here.</p>
            </div>
        `;
        if (progressMascot) progressMascot.style.display = "none";
        return;
    }

    questions.forEach(item => {
        const card = document.createElement("div");
        card.className = "program-card";
        
        let diffColor = "easy";
        if (item.difficulty === "Medium") diffColor = "medium";
        if (item.difficulty === "Hard") diffColor = "hard";

        // Truncate theory description
        const snippet = item.theory.length > 70 ? item.theory.substring(0, 70) + "..." : item.theory;

        card.innerHTML = `
            <div class="program-card-header">
                <span class="badge-difficulty ${diffColor}">${item.difficulty}</span>
            </div>
            <h3>${cleanTitle(item.name)}</h3>
            <p>${snippet}</p>
            <div class="pin-complexities" style="margin-top: 14px;">
                <span class="complexity-pill">⏳ ${item.timeComplexity}</span>
                <span class="complexity-pill">📦 ${item.spaceComplexity}</span>
            </div>
        `;

        card.addEventListener("click", () => {
            navigateTo("program-detail", item);
        });

        grid.appendChild(card);
    });

    // Hide progress mascot (not tracking progress)
    if (progressMascot) progressMascot.style.display = "none";
}

// Render Program details view
function renderProgramDetails() {
    document.getElementById("program-breadcrumb-parent").innerText = cleanTitle(selectedProblem.category);
    document.getElementById("program-breadcrumb-parent").onclick = () => {
        navigateTo("topic-detail", selectedProblem.category);
    };

    document.getElementById("sheet-category").innerText = selectedProblem.category;
    document.getElementById("sheet-title").innerText = cleanTitle(selectedProblem.name);
    document.getElementById("sheet-path").innerText = selectedProblem.path;
    document.getElementById("sheet-tc").innerText = selectedProblem.timeComplexity;
    document.getElementById("sheet-sc").innerText = selectedProblem.spaceComplexity;
    document.getElementById("sheet-theory").innerText = selectedProblem.theory;
    document.getElementById("sheet-analogy").innerText = selectedProblem.analogy;
    document.getElementById("sheet-dry-run").innerText = selectedProblem.dry_run;
    document.getElementById("sheet-output").innerText = selectedProblem.output;

    // Related questions list
    const relatedContainer = document.getElementById("sheet-related-problems");
    const relatedList = DSA_DATA.filter(f => f.category === selectedProblem.category && f.name !== selectedProblem.name).slice(0, 3);
    
    if (relatedList.length === 0) {
        relatedContainer.innerHTML = `<span style="color:var(--color-muted); font-style:italic;">No other problems in this category.</span>`;
    } else {
        relatedContainer.innerHTML = "";
        relatedList.forEach(q => {
            const span = document.createElement("span");
            span.className = "complexity-pill clickable";
            span.style.cursor = "pointer";
            span.innerText = `☕ ${cleanTitle(q.name)}`;
            span.addEventListener("click", () => {
                navigateTo("program-detail", q);
            });
            relatedContainer.appendChild(span);
        });
    }

    // Load code into CodeMirror viewer (read-only — no editing, no cursor)
    if (codeMirrorInstance) {
        codeMirrorInstance.setValue(selectedProblem.code);
    } else {
        const textarea = document.getElementById("ide-editor-textarea");
        codeMirrorInstance = CodeMirror.fromTextArea(textarea, {
            lineNumbers: true,
            mode: "text/x-java",
            theme: "neo",
            lineWrapping: true,
            readOnly: "nocursor"
        });
        codeMirrorInstance.setValue(selectedProblem.code);
    }

    // Update the practice links with a pre-filled hint (opens OneCompiler)
    const practiceButtons = document.querySelectorAll(".practice-btn");
    practiceButtons.forEach(btn => {
        btn.href = "https://onecompiler.com/java";
    });
}

// (Standalone playground removed — all practice redirects to OneCompiler externally)

// Side bar Scrollspy active navigation highlighting
function setupSidebarScrollspy() {
    const sections = document.querySelectorAll(".topic-article-section");
    const navLinks = document.querySelectorAll(".sidebar-link");

    const scrollspyHandler = () => {
        let currentActiveId = "";
        const scrollPos = window.scrollY || document.documentElement.scrollTop;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (scrollPos >= sectionTop) {
                currentActiveId = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentActiveId}`) {
                link.classList.add("active");
            }
        });
    };

    window.removeEventListener("scroll", scrollspyHandler);
    window.addEventListener("scroll", scrollspyHandler);
    
    // Quick triggers for sidebar link click events
    navLinks.forEach(link => {
        link.onclick = (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                window.scrollTo({
                    top: targetEl.offsetTop - 100,
                    behavior: "smooth"
                });
            }
        };
    });
}

// No Piston API - Practice redirects to OneCompiler externally


// Global search suggestions index controller
function initSearchIndex() {
    const searchInput = document.getElementById("nav-search");
    const suggestions = document.getElementById("search-suggestions");

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        suggestions.innerHTML = "";

        if (!query) {
            suggestions.classList.remove("active");
            return;
        }

        // Search matching category list (Step 1 matching)
        const matchedCategories = Object.keys(TOPIC_DETAILS).filter(cat => 
            cat.toLowerCase().includes(query)
        );

        // Search matching Java file names (Step 2 matching)
        const matchedFiles = DSA_DATA.filter(f => 
            f.name.toLowerCase().includes(query) ||
            f.theory.toLowerCase().includes(query)
        );

        if (matchedCategories.length === 0 && matchedFiles.length === 0) {
            suggestions.innerHTML = `
                <div style="padding: 20px; text-align:center;">
                    <img src="../assets/disgust.png" style="width:90px; height:auto; display:block; margin:0 auto 12px auto; border-radius:8px; border:1px solid var(--color-border);">
                    <div style="font-family:var(--font-serif); font-style:italic; font-size:13.5px; color:var(--color-muted);">
                        "Even Binary Search couldn't find that."
                    </div>
                </div>
            `;
            suggestions.classList.add("active");
            return;
        }

        // Render category matches
        matchedCategories.forEach(cat => {
            const div = document.createElement("div");
            div.className = "suggestion-item";
            div.innerHTML = `
                <span class="suggestion-name">📚 Topic: ${cleanTitle(cat)}</span>
                <span class="suggestion-path">View Concept Overview</span>
            `;
            div.addEventListener("click", () => {
                suggestions.classList.remove("active");
                searchInput.value = "";
                navigateTo("topic-detail", cat);
            });
            suggestions.appendChild(div);
        });

        // Render file matches
        matchedFiles.slice(0, 8).forEach(file => {
            const div = document.createElement("div");
            div.className = "suggestion-item";
            div.innerHTML = `
                <span class="suggestion-name">☕ ${cleanTitle(file.name)}</span>
                <span class="suggestion-path">${file.path}</span>
            `;
            div.addEventListener("click", () => {
                suggestions.classList.remove("active");
                searchInput.value = "";
                navigateTo("program-detail", file);
            });
            suggestions.appendChild(div);
        });

        suggestions.classList.add("active");
    });

    // Close suggestions box on clicking outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".search-wrapper")) {
            suggestions.classList.remove("active");
        }
    });
}

// Setup core controller actions on document ready
document.addEventListener("DOMContentLoaded", () => {
    // 1. Desktop navigation clicks
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            navigateTo(link.dataset.target);
        });
    });

    // 1b. Mobile navigation links
    document.querySelectorAll(".nav-mobile-link").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            navigateTo(link.dataset.target);
        });
    });

    // 1c. Mobile hamburger toggle
    const hamburger = document.getElementById("nav-hamburger");
    const mobileDrawer = document.getElementById("nav-mobile-drawer");
    if (hamburger && mobileDrawer) {
        hamburger.addEventListener("click", () => {
            const isOpen = mobileDrawer.classList.toggle("open");
            hamburger.setAttribute("aria-expanded", String(isOpen));
            mobileDrawer.setAttribute("aria-hidden", String(!isOpen));
        });
    }

    // 2. Global search suggestions
    initSearchIndex();

    // 3. Theme Toggle Switcher (light/dark mode)
    const savedTheme = localStorage.getItem("theme-mode") || "light";
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("theme-toggle").innerText = "☀️";
    }

    document.getElementById("theme-toggle").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const activeTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
        localStorage.setItem("theme-mode", activeTheme);
        document.getElementById("theme-toggle").innerText = activeTheme === "dark" ? "☀️" : "🌙";
    });

    // 4. Copy code to clipboard
    document.getElementById("ide-copy-code").addEventListener("click", () => {
        if (!codeMirrorInstance) return;
        const codeText = codeMirrorInstance.getValue();
        navigator.clipboard.writeText(codeText).then(() => {
            const alertCard = document.getElementById("copy-success-alert");
            alertCard.classList.add("active");
            setTimeout(() => alertCard.classList.remove("active"), 2500);
        }).catch(() => {
            // Fallback for older browsers
            const textArea = document.createElement("textarea");
            textArea.value = codeText;
            textArea.style.position = "fixed";
            textArea.style.opacity = "0";
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
            const alertCard = document.getElementById("copy-success-alert");
            alertCard.classList.add("active");
            setTimeout(() => alertCard.classList.remove("active"), 2500);
        });
    });

    // 5. Download Code
    document.getElementById("ide-download-code").addEventListener("click", () => {
        if (!selectedProblem || !codeMirrorInstance) return;
        const codeText = codeMirrorInstance.getValue();
        const blob = new Blob([codeText], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = selectedProblem.name.endsWith(".java") ? selectedProblem.name : selectedProblem.name + ".java";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    });

    // 6. Floating Back-to-Top Button
    const topBtn = document.getElementById("btn-back-to-top");
    window.addEventListener("scroll", () => {
        topBtn.style.display = window.scrollY > 300 ? "flex" : "none";

        // Update scroll progress bar
        const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percent = totalScrollHeight > 0 ? (window.scrollY / totalScrollHeight) * 100 : 0;
        document.getElementById("scroll-progress").style.width = `${percent}%`;
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // 7. Study Accordion collapsible items toggle with aria-expanded
    document.querySelectorAll(".accordion-header").forEach(header => {
        header.addEventListener("click", () => {
            const item = header.closest(".accordion-item");
            const wasActive = item.classList.contains("active");

            // Collapse all
            document.querySelectorAll(".accordion-item").forEach(i => {
                i.classList.remove("active");
                i.querySelector(".accordion-header")?.setAttribute("aria-expanded", "false");
            });

            // Toggle clicked
            if (!wasActive) {
                item.classList.add("active");
                header.setAttribute("aria-expanded", "true");
            }
        });
    });

    // 8. Keyboard navigation for card elements with role="button"
    document.querySelectorAll('[role="button"]').forEach(el => {
        el.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                el.click();
            }
        });
    });
});
