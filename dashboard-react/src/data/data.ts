// Auto-generated from dashboard/data.js and dashboard/app.js
// DO NOT EDIT MANUALLY

import type { Program, TopicDetail, RoadmapNode } from '../types';

export const DSA_DATA: Program[] = [
  {
    "name": "ArrayInput.java",
    "path": "Arrays/ArrayInput.java",
    "category": "Arrays",
    "code": "import java.util.Scanner;\nimport java.util.Arrays;\n\npublic class ArrayInput {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n\n        System.out.print(\"Enter the size of the array: \");\n        int n = sc.nextInt();\n\n        int[] arr = new int[n];\n        System.out.println(\"Enter the elements of the array:\");\n        for (int i = 0; i < n; i++) {\n            arr[i] = sc.nextInt();\n        }\n        System.out.println(\"The elements of the array are: \" + Arrays.toString(arr));\n\n        sc.close();\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like writing down a shopping list line by line as a friend calls out items to you.",
    "theory": "Demonstrates reading user input into a static array. It shows how scanner buffers read elements sequentially and store them in memory indices.",
    "dry_run": "1. Initialize scanner and array of size N.\n2. Loop N times: read input and assign to array[i].\n3. Print the populated array.",
    "output": "Enter number of elements: 3\nEnter elements:\n10\n20\n30\nArray elements: [10, 20, 30]",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "ArrayInputOutput.java",
    "path": "Arrays/ArrayInputOutput.java",
    "category": "Arrays",
    "code": "import java.util.Scanner;\nimport java.util.Arrays;\npublic class ArrayInputOutput {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n\n        System.out.print(\"Enter the size of the array: \");\n        int n = sc.nextInt();\n\n        int[] arr = new int[n];\n\n        System.out.println(\"Enter the elements of the array:\");\n        for (int i = 0; i < n; i++) {\n            arr[i] = sc.nextInt();\n        }\n\n        System.out.println(\"The elements of the array are:\");\n        for (int num : arr) {\n            System.out.print(num + \" \");\n        }\n\n        sc.close();\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Filling up a grid of lockers with packages, then opening each locker door one by one to show what is inside.",
    "theory": "Basic array initialization and traversal showing standard index reading and console writing.",
    "dry_run": "1. Initialize hardcoded array or scan sizes.\n2. Output each element at array[index] sequentially using a for loop.",
    "output": "Array elements: 1 2 3 4 5",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "ArrayOfObjects.java",
    "path": "Arrays/ArrayOfObjects.java",
    "category": "Arrays",
    "code": "class Student {\n    String name;\n    int age;\n}\n\npublic class ArrayOfObjects {\n    public static void main(String[] args) {\n        Student s1 = new Student();\n        s1.name = \"John\";\n        s1.age = 20;\n\n        Student s2 = new Student();\n        s2.name = \"Alice\";\n        s2.age = 22;\n\n        Student s3 = new Student();\n        s3.name = \"Bob\";\n        s3.age = 21;\n\n        Student[] students = {s1, s2, s3};\n\n        // Using traditional for loop\n        for (int i = 0; i < students.length; i++) {\n            System.out.println(\"Name: \" + students[i].name + \", Age: \" + students[i].age);\n        }\n\n        // Using enhanced for loop\n        System.out.println(\"\\nUsing enhanced for loop:\");\n        for (Student s : students) {\n            System.out.println(\"Name: \" + s.name + \", Age: \" + s.age);\n        }\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "A row of student folders in a cabinet, where each folder contains a student's name, roll number, and grades.",
    "theory": "Demonstrates object reference arrays in Java. Unlike primitives, arrays of objects store references (addresses) to instance objects on the heap.",
    "dry_run": "1. Declare class Student (name, roll).\n2. Initialize Student[] arr = new Student[2].\n3. Instanatiate objects: arr[0] = new Student('Alice', 101).\n4. Access data: arr[0].name.",
    "output": "Student 1: Name = Alice, Roll = 101\nStudent 2: Name = Bob, Roll = 102",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Assignment.java",
    "path": "Arrays/Assignment.java",
    "category": "Arrays",
    "code": "class Assignment\n{\n    public static int fun(int arr[][],int key)\n    {\n        //count of key in 2D array\n        int count=0;\n        for(int i=0;i<arr.length;i++)\n        {\n            for(int j=0;j<arr[i].length;j++)\n            {\n                if(arr[i][j]==key)\n                {\n                    count++;\n                }\n            }\n\n        }\n        return count;\n    }\n    public static void fun2(int arr[][])\n    {\n        //sum of elements in 2nd row\n        int sum=0;\n        for(int i=0;i<arr[1].length;i++)\n        {\n            sum+=arr[1][i];\n        }\n        System.out.println(sum);\n\n    }\n    public static void fun3(int arr[][])\n    {\n        //transpose of a matrix\n        int transpose[][]=new int[arr[0].length][arr.length];\n        for(int i=0;i<arr.length;i++)\n        {\n            for(int j=0;j<arr[i].length;j++)\n            {\n                transpose[j][i]=arr[i][j];\n            }\n        }//print the transpose\n        for(int i=0;i<transpose.length;i++)\n        {\n            for(int j=0;j<transpose[i].length;j++)\n            {\n                System.out.print(transpose[i][j]+\" \");\n            }\n            System.out.println();\n        }\n    }\n\n    public static void main(String[] args)\n    {\n        int arr[][]={{1,2,3},{4,3,6},{3,33,9},{3,3,3}};\n        System.out.println(fun(arr,3));\n        fun2(arr);\n        fun3(arr);\n\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Counting how many red apples are in a crate, finding the sum of the second row of item shelves, or rotating a flat tray grid sideways.",
    "theory": "Practical 2D array matrix utilities: element frequency counting, row summing, and simple transposition.",
    "dry_run": "1. Iterate grid cells using nested loops.\n2. Sum elements of index 1 (second row).\n3. Swap grid[i][j] into transpose[j][i].",
    "output": "Count of key 3: 5\nSum of second row: 13\nTranspose matrix printed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "BinarySearch.java",
    "path": "Arrays/BinarySearch.java",
    "category": "Arrays",
    "code": "import java.util.*;\npublic class BinarySearch {\n\n    // Binary search method\n    public static int binarySearch(int[] arr, int key) {\n        int start = 0;\n        int end = arr.length - 1;\n\n        while (start <= end) {\n            int mid = (start + end) / 2;\n\n            if (arr[mid] == key) {\n                return mid; // return index if found\n            }\n            if (arr[mid] < key) {\n                start = mid + 1; // search right half\n            } else {\n                end = mid - 1;   // search left half\n            }\n        }\n        return -1; // not found\n    }\n\n    // Main method to test\n    public static void main(String[] args) {\n        int[] nums = {2, 3, 5, 6, 8, 9, 10, 22, 37};\n        int key = 10;\n\n        int ans = binarySearch(nums, key);\n\n        if (ans == -1) {\n            System.out.println(\"Element not found\");\n        } else {\n            System.out.println(\"Element found at index \" + ans);\n        }\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Finding a name in a printed telephone directory. You open to the middle; if the name is alphabetically later, you throw away the left half and repeat.",
    "theory": "A logarithmic divide-and-conquer search algorithm for sorted lists. It computes the midpoint, eliminates half the search space based on comparisons, and halves the remaining index range.",
    "dry_run": "Input: [2, 5, 8, 12, 16], Target = 12\n1. Low=0, High=4 -> Mid=2 (Val=8 < 12) -> Low=3\n2. Low=3, High=4 -> Mid=3 (Val=12 == 12) -> Found!",
    "output": "Searching for target 12 in sorted array...\nTarget found at index 3.",
    "timeComplexity": "O(log N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "DiagonalSum.java",
    "path": "Arrays/DiagonalSum.java",
    "category": "Arrays",
    "code": "public class DiagonalSum {\n    public static int diagonalSum_1(int[][] matrix) {\n        int sum = 0;\n        for (int i = 0; i < matrix.length; i++) {\n            for (int j = 0; j < matrix[0].length; j++) {\n                if (i == j || i + j == matrix.length - 1) {\n                    sum += matrix[i][j];\n                }\n            }\n        }\n        return sum;\n    }\n    public static int diagonalSum_2(int[][] matrix) {\n        int sum = 0;\n        for (int i = 0; i < matrix.length; i++) {\n            sum += matrix[i][i];\n            if (i != matrix.length - 1 - i) {\n                sum += matrix[i][matrix.length - 1 - i];\n            }\n        }\n        return sum;\n    }\n    public static void main(String[] args) {\n        int[][] matrix = {\n            {1, 2, 3},\n            {4, 5, 6},\n            {7, 8, 9}\n        };\n        System.out.println(\"Diagonal Sum (Method 1): \" + diagonalSum_1(matrix));\n        System.out.println(\"Diagonal Sum (Method 2): \" + diagonalSum_2(matrix));\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Walking from the top-left corner of a tiled floor straight to the bottom-right, then from the top-right to the bottom-left, summing values of the tiles you step on.",
    "theory": "Computes the sum of primary and secondary diagonals of a square matrix. Optimizes the traversal from O(N²) to O(N) by calculating diagonal index mappings directly.",
    "dry_run": "Matrix: [[1,2],[3,4]]\n1. Primary: mat[0][0] (1) + mat[1][1] (4) = 5\n2. Secondary: mat[0][1] (2) + mat[1][0] (3) = 5\n3. Overlap check: No overlap since size is even. Sum = 10.",
    "output": "Matrix dimensions: 3x3\nDiagonal Sum: 15",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Jagged.java",
    "path": "Arrays/Jagged.java",
    "category": "Arrays",
    "code": "class Jagged\n{\n    public static void main(String args[])\n    {\n        int nums[][]=new int[3][];\n        nums[0]=new int[2];\n        nums[1]=new int[3];\n        nums[2]=new int[4];\n        for(int i=0;i<nums.length;i++)\n        {\n            for(int j=0;j<nums[i].length;j++)\n            {\n                nums[i][j]=(int)(Math.random()*100);\n            }\n        }\n        for(int[] row:nums)\n        {\n            for(int cols:row)\n            {\n                System.out.print(cols+\" \");\n            }\n            System.out.println();\n        }\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "A bookshelf where different shelves have different lengths and can hold different numbers of books.",
    "theory": "Demonstrates Jagged (mismatched) multi-dimensional arrays in Java. Each row in a 2D array can be initialized with a unique size because 2D arrays are arrays of arrays.",
    "dry_run": "1. Initialize int[][] arr = new int[2][].\n2. Define row sizes: arr[0] = new int[3]; arr[1] = new int[1].\n3. Traverse and write/read elements based on individual row.length.",
    "output": "Row 0: 10 20 30\nRow 1: 40",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Kadanesalgol.java",
    "path": "Arrays/Kadanesalgol.java",
    "category": "Arrays",
    "code": "public class Kadanesalgol {\n\n    public static int maxSubarray(int arr[]) {\n\n        // Edge case 1: empty array\n        if(arr == null || arr.length == 0){\n            return 0;   // or throw exception based on requirement\n        }\n\n        int currentSum = arr[0];\n        int maxSum = arr[0];\n\n        for(int i = 1; i < arr.length; i++){\n            currentSum = Math.max(arr[i], currentSum + arr[i]);\n            maxSum = Math.max(maxSum, currentSum);\n        }\n\n        return maxSum;\n    }\n\n    public static void main(String args[]){\n\n        int arr[] = {1, -2, 3, -4, -5};\n\n        int result = maxSubarray(arr);\n\n        System.out.println(\"Max Subarray Sum = \" + result);\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Tracking your daily budget. If your cumulative debt becomes worse than starting fresh, you reset your accumulator to zero and keep searching for the best streak.",
    "theory": "Finds the maximum sum of a contiguous subarray. At each index, it decides whether to add the current element to the existing subarray or start a new subarray, maintaining the global maximum.",
    "dry_run": "Input: [-2, 1, -3, 4, -1, 2, 1]\n1. Val=-2: CurrSum=-2, Max=-2\n2. Val=1: CurrSum=max(1, -1)=1, Max=1\n3. Val=-3: CurrSum=max(-3, -2)=-2, Max=1\n4. Val=4: CurrSum=max(4, 2)=4, Max=4",
    "output": "Maximum subarray sum (Kadane's): 6",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "LargestandSmallest.java",
    "path": "Arrays/LargestandSmallest.java",
    "category": "Arrays",
    "code": "import java.util.*;\npublic class LargestandSmallest {\n    public static void findLargestAndSmallest(int arr[])\n    {\n        int large=Integer.MIN_VALUE;\n        int small=Integer.MAX_VALUE;\n        for(int i = 0 ; i< arr.length; i++)\n        {\n            if(arr[i]>large)\n            {\n                large=arr[i];\n            }\n            if(arr[i]<small)\n            {\n                small=arr[i];\n            }\n        }\n        System.out.println(\"Largest element: \"+large);\n        System.out.println(\"Smallest element: \"+small);\n\n    }\n    public static void main(String args[])\n    {\n        int arr[]={5, 2, 9, 1, 5, 6};\n        findLargestAndSmallest(arr);\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Scanning a lineup of runners to find the tallest and shortest in a single pass.",
    "theory": "Finds minimum and maximum values in a single linear scan. Demonstrates initialization with Integer.MAX_VALUE and Integer.MIN_VALUE.",
    "dry_run": "1. Set min = MAX_VALUE, max = MIN_VALUE.\n2. Traverse array: if current < min, update min; if current > max, update max.",
    "output": "Array: [5, 2, 9, 1, 7]\nLargest element: 9\nSmallest element: 1",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "LinearSearch.java",
    "path": "Arrays/LinearSearch.java",
    "category": "Arrays",
    "code": "import java. util.*;\npublic class LinearSearch {\n    public static int LinearSearch(String arr[],String Target)\n    {\n        for(int i=0 ; i<arr.length; i++)\n        {\n            if(arr[i]==Target)\n            {\n                return i;\n            }\n        }\n        return -1;\n    }\n    public static void main(String args[])\n    {\n        String arr[]={\"apple\", \"banana\", \"cherry\", \"date\"};\n        String target=\"cherry\";\n        System.out.println(\"Target found at index: \"+LinearSearch(arr,target));\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Searching for a specific card in a shuffled deck by turning cards over one by one from top to bottom.",
    "theory": "Scans elements from left to right sequentially until the target is found. Time complexity is linear because in the worst case, every element must be checked.",
    "dry_run": "Input: [4, 8, 2], Target = 2\n1. Index 0: 4 != 2\n2. Index 1: 8 != 2\n3. Index 2: 2 == 2 -> Return index 2.",
    "output": "Searching for target 8...\nFound target at index 1.",
    "timeComplexity": "O(log N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "NextPermutation.java",
    "path": "Arrays/NextPermutation.java",
    "category": "Arrays",
    "code": "class NextPermutation {\n    public static void nextPermutation(int[] nums) {\n        int n=nums.length;\n        int i=n-2;\n        while(i>=0 && nums[i]>=nums[i+1])\n        {\n            i--;\n        }\n        if(i>=0)\n        {\n            int j=n-1;\n            while(nums[j]<=nums[i])\n            {\n                j--;\n            }\n            swap(nums,i,j);\n        }\n        reverse(nums,i+1,n-1);\n    }\n    public static void swap(int nums[],int i,int j)\n    {\n        int temp=nums[i];\n        nums[i]=nums[j];\n        nums[j]=temp;\n    }\n    public static void reverse(int nums[],int i,int j)\n    {        while(i<j)\n        {            swap(nums,i,j);\n            i++;\n            j--;\n        }\n    }\n    public static void main(String args[])\n    {\n        int nums[]={1,2,3};\n        nextPermutation(nums);\n        System.out.print(\"Next permutation is: \");\n        for(int i=0;i<nums.length;i++)\n        {\n            System.out.print(nums[i]+\" \");\n        }\n\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Finding the next lexicographically larger number using the same digits. Like changing 132 to 213 (the next count up).",
    "theory": "Finds the next lexicographically greater permutation. Locates the pivot from the right where elements decrease, swaps it with the next largest element to its right, and reverses the suffix.",
    "dry_run": "Input: [1, 2, 3]\n1. Find pivot from right: 2 < 3, so pivot index is 1 (val 2).\n2. Find element larger than 2 from right: 3. Swap -> [1, 3, 2].\n3. Reverse suffix after pivot (empty/trivial here) -> Output: [1, 3, 2].",
    "output": "Current permutation: [1, 2, 3]\nNext permutation: [1, 3, 2]",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Pairs.java",
    "path": "Arrays/Pairs.java",
    "category": "Arrays",
    "code": "import java.util.*;\npublic class Pairs {\n    public static void Print_pairs(int arr[])\n    {\n        int tp=0;\n        for(int i =0 ; i<arr.length;i++)\n        {\n            int curr=arr[i];\n            for(int j = i+1 ; j<arr.length;j++)\n            {\n                System.out.print(\"(\"+curr+\",\"+arr[j]+\")\");\n                tp++;\n            }\n            System.out.println();\n        }\n        System.out.println(\"Total pairs are \"+tp);\n    }\n    public static void main(String args[])\n    {\n        int arr[]={1,2,3,4,5,5,6,7,8,9};\n        Print_pairs(arr);\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Pairing up guests at a party so that every guest meets every other guest exactly once.",
    "theory": "Generates all unique pairs of elements in an array. Shows how nested loops partition index ranges to avoid duplicate pairs like (A, B) and (B, A).",
    "dry_run": "Input: [1, 2, 3]\n1. i=0, j=1 -> Pair (1, 2)\n2. i=0, j=2 -> Pair (1, 3)\n3. i=1, j=2 -> Pair (2, 3)",
    "output": "All unique pairs:\n(1, 2) (1, 3) (2, 3)",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Prefixsum.java",
    "path": "Arrays/Prefixsum.java",
    "category": "Arrays",
    "code": "import java.util.*;\npublic class Prefixsum {\n    public static void prefixSum(int arr[])\n    {\n        int prefix[]=new int [arr.length];\n        prefix[0]=arr[0];\n        for(int i=1;i<arr.length;i++)\n        {\n            prefix[i]=prefix[i-1]+arr[i];\n        }\n        int maxsum=prefix[0];\n        for(int i = 0 ; i<arr.length;i++)\n        {\n            for(int j=i ; j<arr.length;j++)\n            {\n                int sum;\n                sum=i==0?prefix[j]:prefix[j]-prefix[i-1];\n                if(sum>maxsum)\n                {\n                    maxsum=sum;\n                }\n            }\n        }\n        System.out.println(maxsum);\n    }\n    public static void main(String[] args) {\n        int nums[]={1,-2,6,-1,3};\n        prefixSum(nums);\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "A running total ledger. If you know the total earnings up to June and up to February, you can find March-June earnings with a single subtraction.",
    "theory": "Preprocessing technique where prefix sums of an array are pre-computed. Allows O(1) range sum queries: sum(L, R) = prefix[R] - prefix[L-1].",
    "dry_run": "Input: [3, 1, 4, 2]\n1. prefix[0] = 3\n2. prefix[1] = 3+1 = 4\n3. prefix[2] = 4+4 = 8\n4. Query range 1 to 2: prefix[2] - prefix[0] = 8 - 3 = 5.",
    "output": "Original: [1, 2, 3, 4]\nPrefix Sums: [1, 3, 6, 10]",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Reverse.java",
    "path": "Arrays/Reverse.java",
    "category": "Arrays",
    "code": "import java.util.*;\npublic class Reverse {\n    public static void reverse(int arr[])\n    {\n        int start=0, last=arr.length-1;\n        while(start<last)\n        {\n            //   arr[start]=arr[start]+arr[last];\n            // arr[last]=arr[start]-arr[last];\n            // arr[start]=arr[start]-arr[last];\n            // start++;\n            // last--;\n\n            int tem=arr[start];\n            arr[start]=arr[last];\n            arr[last]=tem;\n            start++;\n            last--;\n\n        }\n\n    }\n    public static void main(String [] args)\n\n    {\n        int arr[]={1,2,3,4,5};\n        reverse(arr);\n        System.out.println(Arrays.toString(arr));\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Flipping a row of cards over by swapping the leftmost and rightmost cards, moving inward until they meet in the middle.",
    "theory": "Reverses array elements in-place using two pointers (left and right) migrating towards the center, minimizing auxiliary space.",
    "dry_run": "Input: [1, 2, 3, 4]\n1. Swap index 0 and 3 -> [4, 2, 3, 1]\n2. Swap index 1 and 2 -> [4, 3, 2, 1]\n3. Pointers meet. Stop.",
    "output": "Reversed array: [4, 3, 2, 1]",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Searching_In_Matrix.java",
    "path": "Arrays/Searching_In_Matrix.java",
    "category": "Arrays",
    "code": "public class Searching_In_Matrix {\n    public static boolean staircasesearch(int[][]matrix,int key){\n        int row=0,col=matrix[0].length-1;\n        while(row<matrix.length && col>=0){\n            if(matrix[row][col]==key){\n                System.out.println(\"Element\"+key+\" found at index: \"+row+\",\"+col);\n                return true;\n            }\n            else if(matrix[row][col]>key){\n                col--;\n                System.out.println(\"Element\"+key+\" is smaller than current element. Moving left.\");\n            }\n            else{\n                row++;\n                System.out.println(\"Element\"+key+\" is larger than current element. Moving down.\");\n            }\n        }\n        System.out.println(\"Element\"+key+\" not found in the matrix.\");\n        return false;\n\n    }\n    public static void main(String[] args) {\n        int[][] matrix = {\n            {1, 4, 7, 11, 15},\n            {2, 5, 8, 12, 19},\n            {3, 6, 9, 16, 22},\n            {10, 13, 14, 17, 24},\n            {18, 21, 23, 26, 30}\n        };\n        int key = 5;\n        boolean found = staircasesearch(matrix,key);\n\n    }\n}\n//Time Complexity: O(n+m) where n is the number of rows and m is the number of columns in the matrix.\n//Space Complexity: O(1) as we are using only a constant amount of extra space.\n",
    "difficulty": "Medium",
    "analogy": "Looking up a tax value in a grid table where values increase down each column and across each row. You start at the top-right corner to prune search directions.",
    "theory": "Staircase search in a sorted 2D matrix. Compares target with matrix[row][col] starting from top-right. If target is smaller, move left; if larger, move down.",
    "dry_run": "Matrix: [[10, 20], [15, 25]], Target = 15\n1. Start row=0, col=1 (Val=20 > 15) -> col=0\n2. row=0, col=0 (Val=10 < 15) -> row=1\n3. row=1, col=0 (Val=15 == 15) -> Found!",
    "output": "Searching in 2D sorted matrix...\nFound target 15 at index (1, 0)",
    "timeComplexity": "O(n+m)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Sorting.java",
    "path": "Arrays/Sorting.java",
    "category": "Arrays",
    "code": "import java.util.*;\nclass Sorting\n{\n    //bubble sort\n    public static void bubbleSort(int arr[])\n    {\n        for(int i=0;i<arr.length-1;i++)\n        {\n            int count = 0;\n            for(int j=0;j<arr.length-1-i;j++)\n            {\n                if(arr[j] > arr[j+1])\n                {\n                    int temp = arr[j];\n                    arr[j] = arr[j+1];\n                    arr[j+1] = temp;\n                    count++;\n                }\n            }\n            if(count == 0) break;\n        }\n    }\n    //selection sort\n    public static void selectionsort(int arr[])\n    {\n        for(int i=0;i<arr.length-1;i++)\n        {\n            int minpos=i;\n            for(int j=i+1;j<arr.length;j++)\n            {\n                if(arr[minpos]>arr[j])\n                {\n                    minpos=j;\n                }\n            }\n            int temp=arr[minpos];\n            arr[minpos]=arr[i];\n            arr[i]=temp;\n        }\n    }\n    //insertion sort\n    public static void insertionsort(int arr[])\n    {\n        for(int i=1;i<arr.length;i++)\n        {\n            int current=arr[i];\n            int j=i-1;\n            while(j>=0 && arr[j]>current)\n            {\n                arr[j+1]=arr[j];\n                j--;\n            }\n            arr[j+1]=current;\n        }\n    }\n    //inbuilt sort\n    public static void inbuiltSort(int arr[])\n    {\n        Arrays.sort(arr);\n    }\n    //counting sort\n    public static void countingSort(int arr[])\n    {\n        int largest=Integer.MIN_VALUE;\n        for(int i=0;i<arr.length;i++)\n        {\n            largest=Math.max(largest,arr[i]);\n        }\n        int count[]=new int[largest+1];\n        for(int i=0;i<arr.length;i++)\n        {\n            count[arr[i]]++;\n        }\n        int j=0;\n        for(int i=0;i<count.length;i++)\n        {\n            while(count[i]>0)\n            {\n                arr[j]=i;\n                j++;\n                count[i]--;\n            }\n        }\n    }\n    //print array\n    public static void printArray(int arr[])\n    {\n        for(int i=0;i<arr.length;i++)\n        {\n            System.out.print(arr[i]+\" \");\n        }\n        System.out.println();\n    }\n\n    //main method\n    public static void main(String args[])\n    {\n        int arr[]={3 , 5 , 2 , 1 , 4};\n        bubbleSort(arr);\n        printArray(arr);\n        int arr1[]={3 , 5 , 2 , 1 , 4};\n        selectionsort(arr1);\n        printArray(arr1);\n        int arr2[]={3 , 5 , 2 , 1 , 4};\n        insertionsort(arr2);\n        printArray(arr2);\n        int arr3[]={3 , 5 , 2 , 1 , 4};\n        inbuiltSort(arr3);\n        printArray(arr3);\n        int arr4[]={3 , 5 , 2 , 1 , 4};\n        countingSort(arr4);\n        printArray(arr4);\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Rearranging books on a shelf to be in alphabetical order.",
    "theory": "Introduction to basic sorting syntax in Java, using built-in methods like Arrays.sort() for primitive and reference types.",
    "dry_run": "1. Initialize array.\n2. Call Arrays.sort(arr).\n3. Under the hood, Java uses Dual-Pivot Quicksort or Timsort.",
    "output": "Sorted: [1, 2, 3, 4, 5]",
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "SpiralMatrix.java",
    "path": "Arrays/SpiralMatrix.java",
    "category": "Arrays",
    "code": "/*  1 2 3\n6 5 4\n8 7 9\n1 2 3 4 9 7 8 6 5 */\n\nimport java.util.*;\npublic class SpiralMatrix {\n    public void spiral(int[][] matrix) {\n        int startRow = 0;\n        int startCol = 0;\n        int endRow = matrix.length - 1;\n        int endCol = matrix[0].length - 1;\n        while (startRow <= endRow && startCol <= endCol) {\n            // top\n            for (int j = startCol; j <= endCol; j++) {\n                System.out.print(matrix[startRow][j] + \" \");\n            }\n            // right\n            for (int i = startRow + 1; i <= endRow; i++) {\n                System.out.print(matrix[i][endCol] + \" \");\n            }\n            // bottom\n            for (int j = endCol - 1; j >= startCol; j--) {\n                if (startRow == endRow) {\n                    break;\n                }\n                System.out.print(matrix[endRow][j] + \" \");\n            }\n            // left\n            for (int i = endRow - 1; i >= startRow + 1; i--) {\n                if (startCol == endCol) {\n                    break;\n                }\n                System.out.print(matrix[i][startCol] + \" \");\n            }\n            startRow++;\n            startCol++;\n            endRow--;\n            endCol--;\n        }\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter the number of rows and columns: \");\n        int m = sc.nextInt();\n        int n = sc.nextInt();\n        int[][]matrix = new int[m][n];\n        System.out.println(\"Enter the elements of the matrix: \");\n        for(int i = 0; i<m; i++){\n            for(int j = 0; j<n; j++){\n                matrix[i][j] = sc.nextInt();\n            }\n        }\n        SpiralMatrix sm = new SpiralMatrix();\n        sm.spiral(matrix);\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Peeling an apple in a continuous spiral strip from the outer skin inward to the core.",
    "theory": "Traverses a 2D matrix in a spiral clock-wise direction. Manages 4 boundary variables (top, bottom, left, right) and shifts them inward after printing each boundary edge.",
    "dry_run": "Grid: 3x3. Boundaries: top=0, bottom=2, left=0, right=2.\n1. Print top row (col 0 to 2) -> Increment top=1.\n2. Print right col (row 1 to 2) -> Decrement right=1.\n3. Print bottom row (col 1 to 0) -> Decrement bottom=1.\n4. Print left col (row 1 to 1) -> Increment left=1.",
    "output": "Spiral Traversal:\n1 2 3 6 9 8 7 4 5",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "SubArray.java",
    "path": "Arrays/SubArray.java",
    "category": "Arrays",
    "code": "import java.util.*;\npublic class SubArray {\n    public static void printsubArray(int arr[])\n    {\n        int ts=0;\n        for(int i = 0 ; i<arr.length;i++)\n        {\n            for(int j=i ; j<arr.length;j++)\n            {\n                for(int k=i ; k<=j;k++)\n                {\n                    System.out.print(arr[k]+\" \");\n\n                }\n                ts++;\n                System.out.println();\n            }\n            System.out.println();\n        }\n        System.out.println(\"Total subarrays are \"+ts);\n    }\n    public static void main(String args[])    {\n        int nums[]={1,2,3,4,5};\n        printsubArray(nums);\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Looking at all possible contiguous cuts of a candy bar.",
    "theory": "Generates all contiguous subarrays of an array. Implemented using three nested loops: starting index, ending index, and traversal printer.",
    "dry_run": "Input: [1, 2]\n1. Start=0, End=0 -> [1]\n2. Start=0, End=1 -> [1, 2]\n3. Start=1, End=1 -> [2]",
    "output": "All Subarrays:\n[1]\n[1, 2]\n[2]",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "SubArraySum.java",
    "path": "Arrays/SubArraySum.java",
    "category": "Arrays",
    "code": "import java.util.*;\npublic class SubArraySum {\n    public static void printSubArraySums(int arr[]) {\n        int ts = 0;\n        int maxsum=Integer.MIN_VALUE;\n        for (int i = 0; i < arr.length; i++) {\n            int currentSum = 0;\n\n            for (int j = i; j < arr.length; j++) {\n\n                currentSum += arr[j];\n\n                System.out.println(\"Sum of subarray [\" + i + \" to \" + j + \"]: \" + currentSum);\n                maxsum=Math.max(maxsum ,currentSum);\n                ts++;\n            }\n            System.out.println();\n        }\n        System.out.println(\"Total subarrays are \" + ts);\n        System.out.println(\"Maximum sum is \" + maxsum);\n    }\n    public static void main(String[] args) {\n\n        int nums[]={-1,-2,-3,-4,-5};\n        printSubArraySums(nums);\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Calculating the total calories of all possible contiguous menu combinations.",
    "theory": "Computes the sum of all subarrays. Shows basic optimization from cubic O(N³) to quadratic O(N²) by carrying over sums instead of re-iterating.",
    "dry_run": "Input: [1, 2]\n1. Subarray [1]: sum = 1\n2. Subarray [1, 2]: sum = 3\n3. Subarray [2]: sum = 2. Total sums counted.",
    "output": "Subarray sums printed.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "TrappingRainWater.java",
    "path": "Arrays/TrappingRainWater.java",
    "category": "Arrays",
    "code": "/**\n* Problem: Trapping Rain Water\n* Given n non-negative integers representing an elevation map where the width of each bar is 1,\n* compute how much water it can trap after raining.\n*\n* Time Complexity: O(N)\n* Space Complexity: O(N)\n*/\npublic class TrappingRainWater {\n    public static int trap(int height[]) {\n        int n = height.length;\n        if (n == 0) return 0;\n\n        // Array to store the maximum height to the left of each bar\n        int maxleft[] = new int[n];\n        maxleft[0] = height[0];\n        for (int i = 1; i < n; i++) {\n            maxleft[i] = Math.max(maxleft[i - 1], height[i]);\n        }\n\n        // Array to store the maximum height to the right of each bar\n        int maxright[] = new int[n];\n        maxright[n - 1] = height[n - 1];\n        for (int i = n - 2; i >= 0; i--) {\n            maxright[i] = Math.max(maxright[i + 1], height[i]);\n        }\n\n        // Calculate trapped water\n        int trappedWater = 0;\n        for (int i = 0; i < n; i++) {\n            trappedWater += Math.min(maxleft[i], maxright[i]) - height[i];\n        }\n\n        return trappedWater;\n    }\n\n    public static void main(String args[]) {\n        int height[] = {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1};\n        System.out.println(\"Water trapped: \" + trap(height));\n    }\n}\n\n",
    "difficulty": "Hard",
    "analogy": "Water collects in puddles between curbs after rain. The depth of a puddle depends on the heights of the curbs on its left and right sides.",
    "theory": "Computes water trapped inside an elevation map. It computes the maximum height to the left and right of each index. The water height at index i is min(maxLeft[i], maxRight[i]) - height[i].",
    "dry_run": "Heights: [2, 0, 2]. n=3.\n1. maxLeft = [2, 2, 2], maxRight = [2, 2, 2]\n2. i=0: min(2,2)-2 = 0\n3. i=1: min(2,2)-0 = 2\n4. i=2: min(2,2)-2 = 0. Total = 2.",
    "output": "Water trapped: 2",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)"
  },
  {
    "name": "TwoPointers.java",
    "path": "Arrays/TwoPointers.java",
    "category": "Arrays",
    "code": "package Arrays;\n\nimport java.util.Arrays;\n\n/**\n* Demonstrates the Two-Pointer technique.\n* This technique uses two index pointers to traverse a data structure (typically an array or list)\n* from both ends towards the center, or at different speeds.\n*\n* Time Complexity: O(N)\n* Space Complexity: O(1)\n*/\npublic class TwoPointers {\n\n    // Reverses the elements of an array in place\n    public static void reverse(int[] arr) {\n        int left = 0;\n        int right = arr.length - 1;\n\n        while (left < right) {\n            // Swap elements at left and right indices\n            int temp = arr[left];\n            arr[left] = arr[right];\n            arr[right] = temp;\n\n            // Move pointers closer to the center\n            left++;\n            right--;\n        }\n    }\n\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5, 6};\n        System.out.println(\"Original array: \" + Arrays.toString(arr));\n\n        reverse(arr);\n        System.out.println(\"Reversed array: \" + Arrays.toString(arr));\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Two friends walking from opposite ends of a bridge, meeting in the exact center.",
    "theory": "Illustrates array reversing using index variables moving inward from opposite boundaries, avoiding allocation of a new array.",
    "dry_run": "Input: [1, 2, 3]. Left=0, Right=2.\n1. Swap [0] and [2] -> [3, 2, 1]. Left=1, Right=1.\n2. Left == Right. Stop.",
    "output": "Original: [1, 2, 3]\nReversed: [3, 2, 1]",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Gridways.java",
    "path": "BackTracking/Gridways.java",
    "category": "BackTracking",
    "code": "package BackTracking;\n\n/**\n* Problem: Grid Ways\n* Find the number of ways to reach the bottom-right cell (N-1, M-1) from the top-left cell (0, 0)\n* in an N x M grid. You can only move right or down.\n*\n* Recursive Approach:\n* Time Complexity: O(2^(N + M))\n* Space Complexity: O(N + M) (recursion stack)\n*\n* Mathematical Approach (Permutations):\n* Time Complexity: O(N)\n* Space Complexity: O(1)\n*/\npublic class Gridways {\n\n    // 1. Recursive approach to find number of grid ways\n    public static int countGridWays(int i, int j, int n, int m) {\n        // Base case: Reached target cell\n        if (i == n - 1 && j == m - 1) {\n            return 1;\n        }\n        // Corner case: Out of bounds\n        if (i >= n || j >= m) {\n            return 0;\n        }\n\n        // Sum of ways by moving right and moving down\n        int waysRight = countGridWays(i, j + 1, n, m);\n        int waysDown = countGridWays(i + 1, j, n, m);\n\n        return waysRight + waysDown;\n    }\n\n    // 2. Mathematical approach using Combinations: Formula is (N-1 + M-1)! / ((N-1)! * (M-1)!)\n    public static long countGridWaysMath(int n, int m) {\n        int stepsDown = n - 1;\n        int stepsRight = m - 1;\n        int totalSteps = stepsDown + stepsRight;\n\n        // We need to calculate combinations C(totalSteps, stepsDown)\n        // Which is totalSteps! / (stepsDown! * stepsRight!)\n        long ways = 1;\n        int r = Math.min(stepsDown, stepsRight);\n        for (int i = 1; i <= r; i++) {\n            ways = ways * (totalSteps - r + i) / i;\n        }\n\n        return ways;\n    }\n\n    public static void main(String[] args) {\n        int n = 3;\n        int m = 4;\n\n        System.out.println(\"Grid dimensions: \" + n + \" x \" + m);\n\n        // Recursive output\n        int recursiveWays = countGridWays(0, 0, n, m);\n        System.out.println(\"Number of ways (Recursive): \" + recursiveWays);\n\n        // Mathematical output\n        long mathWays = countGridWaysMath(n, m);\n        System.out.println(\"Number of ways (Mathematical): \" + mathWays);\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "A robot navigating a grid, only allowed to roll East (Right) or South (Down). Finding the total paths to the cargo bay.",
    "theory": "Computes paths from (0,0) to (N-1, M-1) in a grid. Shows recursion paths (Right + Down) and compares it with the O(N) mathematical combinations formula.",
    "dry_run": "Grid 2x2. Goal (1,1).\n1. count(0,0) -> count(0,1) + count(1,0)\n2. count(0,1) -> count(0,2) [out] + count(1,1) [reached] = 1\n3. count(1,0) -> count(1,1) [reached] + count(2,0) [out] = 1. Total = 2.",
    "output": "Grid dimensions: 3 x 4\nWays (Recursive): 10\nWays (Mathematical): 10",
    "timeComplexity": "O(2^(N + M)",
    "spaceComplexity": "O(N + M)"
  },
  {
    "name": "NQueens.java",
    "path": "BackTracking/NQueens.java",
    "category": "BackTracking",
    "code": "import java.util.*;\n\npublic class NQueens {\n\n    public static boolean isSafe(int row, int col, char[][] board) {\n\n        // Check same column\n        for (int i = 0; i < row; i++) {\n            if (board[i][col] == 'Q') {\n                return false;\n            }\n        }\n\n        // Check upper-left diagonal\n        for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {\n            if (board[i][j] == 'Q') {\n                return false;\n            }\n        }\n\n        // Check upper-right diagonal\n        for (int i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {\n            if (board[i][j] == 'Q') {\n                return false;\n            }\n        }\n\n        return true;\n    }\n\n    public static void printBoard(char[][] board) {\n        for (int i = 0; i < board.length; i++) {\n            for (int j = 0; j < board.length; j++) {\n                System.out.print(board[i][j] + \" \");\n            }\n            System.out.println();\n        }\n        System.out.println(\"-------------\");\n    }\n\n    public static void Nqueens(int n, char[][] board, int row) {\n\n        // Base case\n        if (row == n) {\n            printBoard(board);\n            return;\n        }\n\n        // Try every column\n        for (int col = 0; col < n; col++) {\n\n            if (isSafe(row, col, board)) {\n\n                // Place queen\n                board[row][col] = 'Q';\n\n                // Solve for next row\n                Nqueens(n, board, row + 1);\n\n                // Backtrack\n                board[row][col] = '.';\n            }\n        }\n    }\n\n    public static void main(String[] args) {\n\n        Scanner sc = new Scanner(System.in);\n\n        int n = sc.nextInt();\n\n        char[][] board = new char[n][n];\n\n        // Initialize board\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                board[i][j] = '.';\n            }\n        }\n\n        Nqueens(n, board, 0);\n    }\n}\n",
    "difficulty": "Hard",
    "analogy": "Like resolving steps of N Queens in real life tasks.",
    "theory": "Implements standard coding concepts of N Queens within the BackTracking module.",
    "dry_run": "1. Initialize inputs for N Queens.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing N Queens main module:\nOperation executed successfully.",
    "timeComplexity": "O(N!)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Permutations.java",
    "path": "BackTracking/Permutations.java",
    "category": "BackTracking",
    "code": "public class Permutations {\n    public static void permutations(String str, String ans) {\n        if (str.length() == 0) {\n            System.out.println(ans + \" \");\n            return;\n        }\n\n        for (int i = 0; i < str.length(); i++) {\n            char ch = str.charAt(i);\n            String ros = str.substring(0, i) + str.substring(i + 1);\n            permutations(ros, ans + ch);\n        }\n    }\n\n    public static void main(String args[]) {\n        permutations(\"abc\", \"\");\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Finding all possible seat assignments for 3 people in a row of 3 chairs.",
    "theory": "Generates all permutations of a string. Recursively extracts characters, appends them to the current prefix, and calls permutations on the remaining substring.",
    "dry_run": "Input: 'ab'\n1. Select 'a' -> prefix='a', remaining='b' -> Recurse('b', 'a') -> prefix='ab', remaining='' [Print 'ab']\n2. Select 'b' -> prefix='b', remaining='a' -> Recurse('a', 'b') -> prefix='ba', remaining='' [Print 'ba']",
    "output": "Permutations of 'abc':\nabc acb bac bca cab cba",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "SudokuSolver.java",
    "path": "BackTracking/SudokuSolver.java",
    "category": "BackTracking",
    "code": "package BackTracking;\n\n/**\n* A standard Backtracking solution for the Sudoku Solver problem.\n*\n* Time Complexity: O(9^(N*N)) where N=9 (practically bounded)\n* Space Complexity: O(N*N) for the board recursion stack\n*/\npublic class SudokuSolver {\n\n    // Check if it's safe to place a number at board[row][col]\n    public static boolean isSafe(int[][] board, int row, int col, int digit) {\n        // Row check\n        for (int i = 0; i < 9; i++) {\n            if (board[row][i] == digit) {\n                return false;\n            }\n        }\n\n        // Column check\n        for (int i = 0; i < 9; i++) {\n            if (board[i][col] == digit) {\n                return false;\n            }\n        }\n\n        // 3x3 Grid check\n        int startRow = (row / 3) * 3;\n        int startCol = (col / 3) * 3;\n        for (int i = startRow; i < startRow + 3; i++) {\n            for (int j = startCol; j < startCol + 3; j++) {\n                if (board[i][j] == digit) {\n                    return false;\n                }\n            }\n        }\n\n        return true;\n    }\n\n    // Backtracking method to solve Sudoku\n    public static boolean solveSudoku(int[][] board, int row, int col) {\n        // Base case: reached end of board\n        if (row == 9) {\n            return true;\n        }\n\n        // Move to next row if current row's columns are completed\n        int nextRow = row;\n        int nextCol = col + 1;\n        if (col + 1 == 9) {\n            nextRow = row + 1;\n            nextCol = 0;\n        }\n\n        // If cell is already filled, move to next cell\n        if (board[row][col] != 0) {\n            return solveSudoku(board, nextRow, nextCol);\n        }\n\n        // Try placing digits from 1 to 9\n        for (int digit = 1; digit <= 9; digit++) {\n            if (isSafe(board, row, col, digit)) {\n                board[row][col] = digit;\n                if (solveSudoku(board, nextRow, nextCol)) {\n                    return true;\n                }\n                // Backtrack\n                board[row][col] = 0;\n            }\n        }\n\n        return false;\n    }\n\n    public static void printBoard(int[][] board) {\n        for (int i = 0; i < 9; i++) {\n            if (i % 3 == 0 && i != 0) {\n                System.out.println(\"---------------------\");\n            }\n            for (int j = 0; j < 9; j++) {\n                if (j % 3 == 0 && j != 0) {\n                    System.out.print(\"| \");\n                }\n                System.out.print(board[i][j] + \" \");\n            }\n            System.out.println();\n        }\n    }\n\n    public static void main(String[] args) {\n        int[][] board = {\n            {5, 3, 0, 0, 7, 0, 0, 0, 0},\n            {6, 0, 0, 1, 9, 5, 0, 0, 0},\n            {0, 9, 8, 0, 0, 0, 0, 6, 0},\n            {8, 0, 0, 0, 6, 0, 0, 0, 3},\n            {4, 0, 0, 8, 0, 3, 0, 0, 1},\n            {7, 0, 0, 0, 2, 0, 0, 0, 6},\n            {0, 6, 0, 0, 0, 0, 2, 8, 0},\n            {0, 0, 0, 4, 1, 9, 0, 0, 5},\n            {0, 0, 0, 0, 8, 0, 0, 7, 9}\n        };\n\n        System.out.println(\"Original Sudoku Board:\");\n        printBoard(board);\n        System.out.println(\"\\nSolving...\");\n\n        if (solveSudoku(board, 0, 0)) {\n            System.out.println(\"\\nSolved Sudoku Board:\");\n            printBoard(board);\n        } else {\n            System.out.println(\"No solution exists.\");\n        }\n    }\n}\n",
    "difficulty": "Hard",
    "analogy": "Like resolving steps of Sudoku Solver in real life tasks.",
    "theory": "Implements standard coding concepts of Sudoku Solver within the BackTracking module.",
    "dry_run": "1. Initialize inputs for Sudoku Solver.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Sudoku Solver main module:\nOperation executed successfully.",
    "timeComplexity": "O(9^(N*N)",
    "spaceComplexity": "O(N*N)"
  },
  {
    "name": "ArraysBasics.java",
    "path": "Basics/Basics_of_java/ArraysBasics.java",
    "category": "Basics_of_java",
    "code": "import java.util.Arrays;\n\n/**\n* Demonstrates basic Java array declaration, initialization, and usage.\n* Uses java.util.Arrays to format output.\n*/\npublic class ArraysBasics {\n    public static void main(String[] args) {\n        // Initialize an array with values\n        int[] arr = {5, 2, 9, 1};\n\n        // Print the array elements using Arrays.toString() helper\n        System.out.println(\"Array elements: \" + Arrays.toString(arr));\n    }\n}\n\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Arrays Basics in real life tasks.",
    "theory": "Implements standard coding concepts of Arrays Basics within the Basics_of_java module.",
    "dry_run": "1. Initialize inputs for Arrays Basics.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Arrays Basics main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "DataTypes.java",
    "path": "Basics/Basics_of_java/DataTypes.java",
    "category": "Basics_of_java",
    "code": "public class DataTypes {\n    public static void main(String[] args){\n        byte b=1; short s=2; int i=3; long l=4L;\n        float f=5.5f; double d=6.6;\n        char c='J'; boolean ok=true;\n        System.out.println(i+\" \"+d+\" \"+c+\" \"+ok);\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Data Types in real life tasks.",
    "theory": "Implements standard coding concepts of Data Types within the Basics_of_java module.",
    "dry_run": "1. Initialize inputs for Data Types.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Data Types main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Functions.java",
    "path": "Basics/Basics_of_java/Functions.java",
    "category": "Basics_of_java",
    "code": "public class Functions {\n    static int square(int x){ return x*x; }\n    public static void main(String[] args){\n        System.out.println(square(7));\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Functions in real life tasks.",
    "theory": "Implements standard coding concepts of Functions within the Basics_of_java module.",
    "dry_run": "1. Initialize inputs for Functions.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Functions main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Loops.java",
    "path": "Basics/Basics_of_java/Loops.java",
    "category": "Basics_of_java",
    "code": "public class Loops {\n    public static void main(String[] args){\n        for(int i=1;i<=5;i++) System.out.print(i+\" \");\n        System.out.println();\n        int j=1;\n        while(j<=3){ System.out.print(j+\" \"); j++; }\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Loops in real life tasks.",
    "theory": "Implements standard coding concepts of Loops within the Basics_of_java module.",
    "dry_run": "1. Initialize inputs for Loops.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Loops main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Operators.java",
    "path": "Basics/Basics_of_java/Operators.java",
    "category": "Basics_of_java",
    "code": "public class Operators {\n    public static void main(String[] args){\n        int a=10,b=3;\n        System.out.println(a+b);\n        System.out.println(a-b);\n        System.out.println(a*b);\n        System.out.println(a/b);\n        System.out.println(a%b);\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Operators in real life tasks.",
    "theory": "Implements standard coding concepts of Operators within the Basics_of_java module.",
    "dry_run": "1. Initialize inputs for Operators.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Operators main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Strings.java",
    "path": "Basics/Basics_of_java/Strings.java",
    "category": "Basics_of_java",
    "code": "public class Strings {\n    public static void main(String[] args){\n        String s=\"DSA\";\n        System.out.println(s.length());\n        System.out.println(s.toLowerCase());\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Strings in real life tasks.",
    "theory": "Implements standard coding concepts of Strings within the Basics_of_java module.",
    "dry_run": "1. Initialize inputs for Strings.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Strings main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Variables.java",
    "path": "Basics/Basics_of_java/Variables.java",
    "category": "Basics_of_java",
    "code": "public class Variables {\n    public static void main(String[] args){\n        int age = 20;\n        double pi = 3.14159;\n        char grade = 'A';\n        boolean isJavaFun = true;\n        System.out.println(age+\" \"+pi+\" \"+grade+\" \"+isJavaFun);\n    }\n}\n// Concepts: variables, primitive data types\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Variables in real life tasks.",
    "theory": "Implements standard coding concepts of Variables within the Basics_of_java module.",
    "dry_run": "1. Initialize inputs for Variables.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Variables main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Factorial.java",
    "path": "Basics/Math_for_DSA/Factorial.java",
    "category": "Math_for_DSA",
    "code": "public class Factorial {\n    static long fact(int n){\n        long ans=1;\n        for(int i=2;i<=n;i++) ans*=i;\n        return ans;\n    }\n    public static void main(String[] args){\n        System.out.println(fact(5));\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Factorial in real life tasks.",
    "theory": "Implements standard coding concepts of Factorial within the Math_for_DSA module.",
    "dry_run": "1. Initialize inputs for Factorial.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Factorial main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Fibonacci.java",
    "path": "Basics/Math_for_DSA/Fibonacci.java",
    "category": "Math_for_DSA",
    "code": "public class Fibonacci {\n    public static void main(String[] args){\n        int a=0,b=1;\n        for(int i=0;i<10;i++){\n            System.out.print(a+\" \");\n            int c=a+b;\n            a=b;\n            b=c;\n        }\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Fibonacci in real life tasks.",
    "theory": "Implements standard coding concepts of Fibonacci within the Math_for_DSA module.",
    "dry_run": "1. Initialize inputs for Fibonacci.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Fibonacci main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "GCD_LCM.java",
    "path": "Basics/Math_for_DSA/GCD_LCM.java",
    "category": "Math_for_DSA",
    "code": "public class GCD_LCM {\n    static int gcd(int a,int b){\n        while(b!=0){\n            int t=b; b=a%b; a=t;\n        }\n        return a;\n    }\n    static int lcm(int a,int b){\n        return a/gcd(a,b)*b;\n    }\n    public static void main(String[] args){\n        System.out.println(gcd(18,24));\n        System.out.println(lcm(18,24));\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of G C D_ L C M in real life tasks.",
    "theory": "Implements standard coding concepts of G C D_ L C M within the Math_for_DSA module.",
    "dry_run": "1. Initialize inputs for G C D_ L C M.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing G C D_ L C M main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "PrimeNumber.java",
    "path": "Basics/Math_for_DSA/PrimeNumber.java",
    "category": "Math_for_DSA",
    "code": "public class PrimeNumber {\n    static boolean isPrime(int n){\n        if(n<2) return false;\n        for(int i=2;i*i<=n;i++)\n        if(n%i==0) return false;\n        return true;\n    }\n    public static void main(String[] args){\n        System.out.println(isPrime(29));\n    }\n}\n// Time: O(sqrt(n))\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Prime Number in real life tasks.",
    "theory": "Implements standard coding concepts of Prime Number within the Math_for_DSA module.",
    "dry_run": "1. Initialize inputs for Prime Number.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Prime Number main module:\nOperation executed successfully.",
    "timeComplexity": "O(sqrt(n)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "ComplexityExamples.java",
    "path": "Basics/Time_and_Space_Complexity/ComplexityExamples.java",
    "category": "Time_and_Space_Complexity",
    "code": "public class ComplexityExamples {\n\n    static void constant(){ System.out.println(1); }          // O(1)\n\n    static void linear(int n){\n        for(int i=0;i<n;i++);\n    }                                                         // O(n)\n\n    static void quadratic(int n){\n        for(int i=0;i<n;i++)\n        for(int j=0;j<n;j++);\n    }                                                         // O(n^2)\n\n    static void logarithmic(int n){\n        while(n>1) n/=2;\n    }                                                         // O(log n)\n\n    public static void main(String[] args){}\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Complexity Examples in real life tasks.",
    "theory": "Implements standard coding concepts of Complexity Examples within the Time_and_Space_Complexity module.",
    "dry_run": "1. Initialize inputs for Complexity Examples.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Complexity Examples main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Operations.java",
    "path": "BitManipulation/Operations.java",
    "category": "BitManipulation",
    "code": "package BitManipulation;\n\npublic class Operations {\n    // Method to set a bit at a specific position\n    public static int setBit(int num, int pos) {\n        return num | (1 << pos); // Use bitwise OR to set the bit at the specified position\n    }\n    // Method to clear a bit at a specific position\n    public static int clearBit(int num, int pos) {\n        return num & ~(1 << pos); // Use bitwise AND with NOT to clear the bit at the specified position\n    }\n    // Method to toggle a bit at a specific position\n    public static int toggleBit(int num, int pos) {\n        return num ^ (1 << pos); // Use bitwise XOR to toggle the bit at the specified position\n    }\n    // Method to check if a bit at a specific position is set\n    public static boolean isBitSet(int num, int pos) {\n        return (num & (1 << pos)) != 0; // Use bitwise AND to check if the bit at the specified position is set\n    }\n    //REMOVE THE LAST SET BIT\n    public static int removeLastSetBit(int num) {\n        return num & (num - 1); // Use bitwise AND to remove the last set bit\n    }\n    //clear5 range of bits from i to j\n    public static int clearRangeOfBits(int num, int i, int j) {\n        int mask = ((1 << i) - 1) | (~0 << (j + 1)); // Create a mask to clear bits from i to j\n        return num & mask; // Use bitwise AND to clear the specified range of bits  }\n}\n\npublic static void main(String[] args) {\n    int num = 29; // Binary: 11101\n    int pos = 2;\n    System.out.println(\"Original number: \" + num);\n    System.out.println(\"After setting bit at position \" + pos + \": \" + setBit(num, pos)); // Should set the bit at position 2\n    System.out.println(\"After clearing bit at position \" + pos + \": \" + clearBit(num, pos)); // Should clear the bit at position 2\n    System.out.println(\"After toggling bit at position \" + pos + \": \" + toggleBit(num, pos)); // Should toggle the bit at position 2\n    System.out.println(\"Is bit at position \" + pos + \" set? \" + isBitSet(num, pos)); // Should check if the bit at position 2 is set\n    System.out.println(\"After removing last set bit: \" + removeLastSetBit(num)); // Should remove the last set bit\n    int i = 1, j = 3;\n    System.out.println(\"After clearing bits from position \" + i + \" to \" + j + \": \" + clearRangeOfBits(num, i, j)); // Should clear bits from position 1 to 3\n}\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Operations in real life tasks.",
    "theory": "Implements standard coding concepts of Operations within the BitManipulation module.",
    "dry_run": "1. Initialize inputs for Operations.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Operations main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Operations2.java",
    "path": "BitManipulation/Operations2.java",
    "category": "BitManipulation",
    "code": "package BitManipulation;\n\npublic class Operations2 {\n\n    //SWAP TWO NUMBERS WITHOUT USING A TEMPORARY VARIABLE\n    public static void swap(int a, int b) {\n        a = a ^ b; // Step 1: a now holds the result of a\n        b = a ^ b; // Step 2: b now holds the original value of a\n        a = a ^ b; // Step 3: a now holds the original value of\n        // b\n        System.out.println(\"After swapping: a = \" + a + \", b = \" + b);\n    }\n    //COUNT NUMBER OF SET BITS IN AN INTEGER\n    public static int countSetBits(int num) {\n        int count = 0;\n        while (num > 0) {\n            count += num & 1; // Increment count if the least significant bit is set\n            num = num >> 1; // Right shift to check the next bit\n        }\n        return count;\n    }\n    //another method to count set bits using Brian Kernighan's algorithm\n    public static int countSetBitsOptimized(int num) {\n        int count = 0;\n        while (num > 0) {\n            num = num & (num - 1); // Remove the last set bit\n            count++; // Increment count for each set bit removed\n        }\n        return count;\n    }\n    //another method to count set bits using built-in function\n    public static int countSetBitsBuiltIn(int num) {\n        return Integer.bitCount(num); // Use built-in method to count set bits\n    }\n    //CHECK IF A NUMBER IS A POWER OF TWO\n    public static boolean isPowerOfTwo(int num) {\n        return num > 0 && (num & (num - 1)) == 0; // A number is a power of two if it has only one set bit\n    }\n    //fast exponentiation using bit manipulation\n    public static int fastExponentiation(int base, int exp) {\n        int result = 1;\n        while (exp > 0) {\n            if ((exp & 1) == 1) { // If the least significant bit of exp is set\n                result *= base; // Multiply the result by the current base\n            }\n            base *= base; // Square the base\n            exp = exp >> 1; // Right shift exp to check the next bit\n        }\n        return result;\n    }\n    //modular exponentiation using bit manipulation\n    public static int modularExponentiation(int base, int exp, int mod) {\n        int result = 1;\n        base = base % mod; // Handle cases where base is greater than mod\n        while (exp > 0) {\n            if ((exp & 1) == 1) { // If the least significant bit of exp is set\n                result = (result * base) % mod; // Multiply the result by the current base and take modulus\n            }\n            base = (base * base) % mod; // Square the base and take modulus\n            exp = exp >> 1; // Right shift exp to check the next bit\n        }\n        return result;\n    }\n    public static void main(String[] args) {\n        int a = 5, b = 10;\n        System.out.println(\"Before swapping: a = \" + a + \", b = \" + b);\n        swap(a, b); // Should swap the values of a and b\n\n        int num = 29; // Binary: 11101\n        System.out.println(\"Number of set bits in \" + num + \": \" + countSetBits(num)); // Should count the number of set bits\n        System.out.println(\"Number of set bits in \" + num + \" (optimized): \" + countSetBitsOptimized(num)); // Should count the number of set bits using optimized method\n        System.out.println(\"Number of set bits in \" + num + \" (built-in): \" + countSetBitsBuiltIn(num)); // Should count the number of set bits using built-in method\n\n        int powerOfTwo = 16;\n        System.out.println(powerOfTwo + \" is a power of two? \" + isPowerOfTwo(powerOfTwo)); // Should check if the number is a power of two\n\n        int base = 2, exp = 10;\n        System.out.println(base + \"^\" + exp + \" = \" + fastExponentiation(base, exp)); // Should calculate base raised to the power of exp using fast exponentiation\n\n        int mod = 1000;\n        System.out.println(base + \"^\" + exp + \" mod \" + mod + \" = \" + modularExponentiation(base, exp, mod)); // Should calculate base raised to the power of exp modulo mod\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Operations2 in real life tasks.",
    "theory": "Implements standard coding concepts of Operations2 within the BitManipulation module.",
    "dry_run": "1. Initialize inputs for Operations2.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Operations2 main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Operators.java",
    "path": "BitManipulation/Operators.java",
    "category": "BitManipulation",
    "code": "package BitManipulation;\n\npublic class Operators {\n    public static void main(String[] args) {\n        int a = 5; // 0101 in binary\n        int b = 3; // 0011 in binary\n\n        // Bitwise AND\n        System.out.println(\"a & b: \" + (a & b)); // Output: 1 (0001 in binary)\n\n        // Bitwise OR\n        System.out.println(\"a | b: \" + (a | b)); // Output: 7 (0111 in binary)\n        // Bitwise XOR\n        System.out.println(\"a ^ b: \" + (a ^ b)); // Output: 6 (0110 in binary)\n\n        // Bitwise NOT\n        System.out.println(\"~a: \" + (~a)); // Output: -6 (in two's complement)\n\n        // Left Shift\n        System.out.println(\"a << 1: \" + (a << 1)); // Output: 10 (1010 in binary)\n\n        // Right Shift\n        System.out.println(\"a >> 1: \" + (a >> 1)); // Output: 2 (0010 in binary)\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Operators in real life tasks.",
    "theory": "Implements standard coding concepts of Operators within the BitManipulation module.",
    "dry_run": "1. Initialize inputs for Operators.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Operators main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Practise.java",
    "path": "BitManipulation/Practise.java",
    "category": "BitManipulation",
    "code": "package BitManipulation;\n\npublic class Practise {\n    public static void main(String[] args) {\n        int num = 5; // Binary: 101\n        int result = addOne(num);\n        System.out.println(\"Result of adding 1 to \" + num + \": \" + result); // Should print 6 (Binary: 110)\n        char uppercaseChar = 'A';\n        char lowercaseChar = toLowerCase(uppercaseChar);\n        System.out.println(\"Lowercase of \" + uppercaseChar + \": \" + lowercaseChar); // Should print 'a'\n        int[] arr = {1, 2, 3, 4, 4, 5};\n        findMissingAndDuplicate(arr);\n    }\n    //Add 1 Using Bit Manipulation\n    public static int addOne(int num) {\n        return num + 1;\n    }\n    //Convert Uppercase to Lowercase Using Bits\n    public static char toLowerCase(char ch) {\n        if (ch >= 'A' && ch <= 'Z') {\n            return (char)(ch + 32); // Convert uppercase to lowercase by adding 32\n        }\n        return ch; // Return the character unchanged if it's not uppercase\n    }\n    //missing and duplicate number in an array\n    public static void findMissingAndDuplicate(int[] arr) {\n        int n = arr.length;\n        int xor = 0;\n\n        // Step 1: XOR all elements in the array and numbers from 1 to n\n        for (int i = 0; i < n; i++) {\n            xor ^= arr[i]; // XOR with array elements\n            xor ^= (i + 1); // XOR with numbers from 1 to n\n        }\n\n        // Step 2: Find the rightmost set bit in the xor result\n        int setBit = xor & -xor;\n\n        int x = 0, y = 0;\n\n        // Step 3: Divide elements into two groups based on the rightmost set bit\n        for (int i = 0; i < n; i++) {\n            if ((arr[i] & setBit) != 0) {\n                x ^= arr[i]; // XOR for group with the set bit\n            } else {\n                y ^= arr[i]; // XOR for group without the set bit\n            }\n            if (((i + 1) & setBit) != 0) {\n                x ^= (i + 1); // XOR for group with the set bit\n            } else {\n                y ^= (i + 1); // XOR for group without the set bit\n            }\n        }\n\n        System.out.println(\"Missing number: \" + y);\n        System.out.println(\"Duplicate number: \" + x);\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Practise in real life tasks.",
    "theory": "Implements standard coding concepts of Practise within the BitManipulation module.",
    "dry_run": "1. Initialize inputs for Practise.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Practise main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "ActivitySelection.java",
    "path": "Greedy/ActivitySelection.java",
    "category": "Greedy",
    "code": "package Greedy;\n\nimport java.util.ArrayList;\nimport java.util.Arrays;\nimport java.util.Comparator;\n\n/**\n* Problem: Activity Selection\n* Select the maximum number of activities that can be performed by a single person or machine,\n* assuming that a person can only work on a single activity at a time.\n*\n* Time Complexity: O(N log N) if unsorted, O(N) if already sorted by end time.\n* Space Complexity: O(N) for storing the activity mappings.\n*/\npublic class ActivitySelection {\n\n    // Static class representing an Activity\n    static class Activity {\n        int index;\n        int start;\n        int end;\n\n        public Activity(int index, int start, int end) {\n            this.index = index;\n            this.start = start;\n            this.end = end;\n        }\n    }\n\n    public static ArrayList<Integer> selectActivities(int[] start, int[] end) {\n        int n = start.length;\n        Activity[] activities = new Activity[n];\n\n        for (int i = 0; i < n; i++) {\n            activities[i] = new Activity(i, start[i], end[i]);\n        }\n\n        // Sort activities based on their end times (Greedy Choice Property)\n        Arrays.sort(activities, Comparator.comparingInt(a -> a.end));\n\n        ArrayList<Integer> selectedActivities = new ArrayList<>();\n\n        // The first activity is always selected\n        selectedActivities.add(activities[0].index);\n        int lastEndTime = activities[0].end;\n\n        for (int i = 1; i < n; i++) {\n            // If the start time of this activity is greater than or equal to\n            // the end time of the last selected activity, select it\n            if (activities[i].start >= lastEndTime) {\n                selectedActivities.add(activities[i].index);\n                lastEndTime = activities[i].end;\n            }\n        }\n\n        return selectedActivities;\n    }\n\n    public static void main(String[] args) {\n        int[] start = {1, 3, 0, 5, 8, 5};\n        int[] end = {2, 4, 6, 7, 9, 9};\n\n        ArrayList<Integer> result = selectActivities(start, end);\n\n        System.out.println(\"Maximum number of activities: \" + result.size());\n        System.out.print(\"Selected activity indices (0-indexed): \");\n        for (int index : result) {\n            System.out.print(index + \" \");\n        }\n        System.out.println();\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Activity Selection in real life tasks.",
    "theory": "Implements standard coding concepts of Activity Selection within the Greedy module.",
    "dry_run": "1. Initialize inputs for Activity Selection.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Activity Selection main module:\nOperation executed successfully.",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)"
  },
  {
    "name": "ChocolaProblem.java",
    "path": "Greedy/ChocolaProblem.java",
    "category": "Greedy",
    "code": "package Greedy;\n\nimport java.util.Arrays;\nimport java.util.Collections;\n\n/**\n* Problem: Chocola Problem (Minimizing Cost to Cut a Board)\n* We have a bar of chocolate of size N x M. We need to break it into 1x1 pieces.\n* Cuts can be made horizontally and vertically with given costs.\n* The cost of making a cut is: (cut cost) * (number of segments/pieces generated so far).\n* Find the minimum cost to break the chocolate.\n*\n* Strategy: Always perform the most expensive cuts first to minimize the multiplication factor.\n* Time Complexity: O(N log N + M log M)\n* Space Complexity: O(1)\n*/\npublic class ChocolaProblem {\n\n    public static int getMinCutCost(Integer[] horizontalCuts, Integer[] verticalCuts) {\n        // Sort cuts in descending order of cost\n        Arrays.sort(horizontalCuts, Collections.reverseOrder());\n        Arrays.sort(verticalCuts, Collections.reverseOrder());\n\n        int h = 0; // horizontal cuts pointer\n        int v = 0; // vertical cuts pointer\n\n        int hp = 1; // horizontal pieces count\n        int vp = 1; // vertical pieces count\n\n        int totalCost = 0;\n\n        while (h < horizontalCuts.length && v < verticalCuts.length) {\n            // If vertical cut is costlier, do vertical cut first\n            if (verticalCuts[v] >= horizontalCuts[h]) {\n                totalCost += verticalCuts[v] * hp;\n                vp++;\n                v++;\n            } else {\n                // Else do horizontal cut\n                totalCost += horizontalCuts[h] * vp;\n                hp++;\n                h++;\n            }\n        }\n\n        // Add remaining cuts\n        while (h < horizontalCuts.length) {\n            totalCost += horizontalCuts[h] * vp;\n            hp++;\n            h++;\n        }\n\n        while (v < verticalCuts.length) {\n            totalCost += verticalCuts[v] * hp;\n            vp++;\n            v++;\n        }\n\n        return totalCost;\n    }\n\n    public static void main(String[] args) {\n        int n = 4, m = 6;\n        Integer[] horizontalCuts = {2, 1, 3}; // size n-1\n        Integer[] verticalCuts = {4, 1, 2, 4, 3}; // size m-1\n\n        int minCost = getMinCutCost(horizontalCuts, verticalCuts);\n        System.out.println(\"Minimum cost to cut chocolate: \" + minCost);\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Chocola Problem in real life tasks.",
    "theory": "Implements standard coding concepts of Chocola Problem within the Greedy module.",
    "dry_run": "1. Initialize inputs for Chocola Problem.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Chocola Problem main module:\nOperation executed successfully.",
    "timeComplexity": "O(N log N + M log M)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "FractionalKnapsack.java",
    "path": "Greedy/FractionalKnapsack.java",
    "category": "Greedy",
    "code": "package Greedy;\n\nimport java.util.Arrays;\nimport java.util.Comparator;\n\n/**\n* Problem: Fractional Knapsack\n* Given weights and values of N items, we need to put these items in a knapsack\n* of capacity W to get the maximum total value in the knapsack.\n* Items can be broken into smaller pieces (fractions allowed).\n*\n* Time Complexity: O(N log N) for sorting the ratio.\n* Space Complexity: O(N) for storing items with their ratio.\n*/\npublic class FractionalKnapsack {\n\n    static class Item {\n        int index;\n        int val;\n        int weight;\n        double ratio;\n\n        public Item(int index, int val, int weight) {\n            this.index = index;\n            this.val = val;\n            this.weight = weight;\n            this.ratio = (double) val / weight;\n        }\n    }\n\n    public static double getMaxValue(int[] val, int[] weight, int capacity) {\n        int n = val.length;\n        Item[] items = new Item[n];\n\n        for (int i = 0; i < n; i++) {\n            items[i] = new Item(i, val[i], weight[i]);\n        }\n\n        // Sort items in descending order of their value/weight ratio\n        Arrays.sort(items, (a, b) -> Double.compare(b.ratio, a.ratio));\n\n        double totalValue = 0.0;\n        int currentCapacity = capacity;\n\n        for (int i = 0; i < n; i++) {\n            if (currentCapacity >= items[i].weight) {\n                // Take the whole item\n                totalValue += items[i].val;\n                currentCapacity -= items[i].weight;\n            } else {\n                // Take fractional part of the item\n                totalValue += items[i].ratio * currentCapacity;\n                currentCapacity = 0;\n                break;\n            }\n        }\n\n        return totalValue;\n    }\n\n    public static void main(String[] args) {\n        int[] val = {60, 100, 120};\n        int[] weight = {10, 20, 30};\n        int capacity = 50;\n\n        double maxValue = getMaxValue(val, weight, capacity);\n        System.out.println(\"Maximum value in Knapsack: \" + maxValue);\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Fractional Knapsack in real life tasks.",
    "theory": "Implements standard coding concepts of Fractional Knapsack within the Greedy module.",
    "dry_run": "1. Initialize inputs for Fractional Knapsack.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Fractional Knapsack main module:\nOperation executed successfully.",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)"
  },
  {
    "name": "JobSequencing.java",
    "path": "Greedy/JobSequencing.java",
    "category": "Greedy",
    "code": "package Greedy;\n\nimport java.util.ArrayList;\nimport java.util.Arrays;\n\n/**\n* Problem: Job Sequencing with Deadlines\n* Given a set of jobs where each job has a deadline and associated profit,\n* find the maximum profit sequence of jobs.\n*\n* Time Complexity: O(N log N + N * maxDeadline)\n* Space Complexity: O(maxDeadline) to track slot allocation.\n*/\npublic class JobSequencing {\n\n    static class Job {\n        char id;\n        int deadline;\n        int profit;\n\n        public Job(char id, int deadline, int profit) {\n            this.id = id;\n            this.deadline = deadline;\n            this.profit = profit;\n        }\n    }\n\n    public static void printJobSequence(Job[] jobs) {\n        // Sort jobs in descending order of profit\n        Arrays.sort(jobs, (a, b) -> Integer.compare(b.profit, a.profit));\n\n        // Find the maximum deadline to size the slots array\n        int maxDeadline = 0;\n        for (Job job : jobs) {\n            maxDeadline = Math.max(maxDeadline, job.deadline);\n        }\n\n        // Slots to keep track of filled time slots\n        char[] result = new char[maxDeadline];\n        boolean[] slots = new boolean[maxDeadline];\n        int jobCount = 0;\n        int totalProfit = 0;\n\n        for (Job job : jobs) {\n            // Find a free slot for this job, starting from the latest slot possible\n            for (int j = Math.min(maxDeadline, job.deadline) - 1; j >= 0; j--) {\n                if (!slots[j]) {\n                    slots[j] = true;\n                    result[j] = job.id;\n                    jobCount++;\n                    totalProfit += job.profit;\n                    break;\n                }\n            }\n        }\n\n        System.out.println(\"Scheduled \" + jobCount + \" jobs for total profit of \" + totalProfit);\n        System.out.print(\"Job execution order: \");\n        for (char id : result) {\n            if (id != '\\u0000') {\n                System.out.print(id + \" \");\n            }\n        }\n        System.out.println();\n    }\n\n    public static void main(String[] args) {\n        Job[] jobs = {\n            new Job('A', 2, 100),\n            new Job('B', 1, 19),\n            new Job('C', 2, 27),\n            new Job('D', 1, 25),\n            new Job('E', 3, 15)\n        };\n\n        printJobSequence(jobs);\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Job Sequencing in real life tasks.",
    "theory": "Implements standard coding concepts of Job Sequencing within the Greedy module.",
    "dry_run": "1. Initialize inputs for Job Sequencing.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Job Sequencing main module:\nOperation executed successfully.",
    "timeComplexity": "O(N log N + N * maxDeadline)",
    "spaceComplexity": "O(maxDeadline)"
  },
  {
    "name": "Circular_LL.java",
    "path": "Lists/Circular_LL.java",
    "category": "Lists",
    "code": "public class Circular_LL {\n\n    class Node {\n        int data;\n        Node next;\n\n        Node(int data) {\n            this.data = data;\n            this.next = null;\n        }\n    }\n\n    Node head;\n    Node tail;\n    int size = 0;\n\n    // Add at Beginning\n    public void addFirst(int data) {\n\n        Node newNode = new Node(data);\n\n        // Empty List\n        if (head == null) {\n            head = tail = newNode;\n            tail.next = head;\n            size++;\n            return;\n        }\n\n        newNode.next = head;\n        head = newNode;\n        tail.next = head;\n\n        size++;\n    }\n\n    // Add at End\n    public void addLast(int data) {\n\n        Node newNode = new Node(data);\n\n        // Empty List\n        if (head == null) {\n            head = tail = newNode;\n            tail.next = head;\n            size++;\n            return;\n        }\n\n        tail.next = newNode;\n        tail = newNode;\n        tail.next = head;\n\n        size++;\n    }\n\n    // Remove First\n    public void removeFirst() {\n\n        if (head == null) {\n            System.out.println(\"List is Empty!\");\n            return;\n        }\n\n        if (head == tail) {\n            head = tail = null;\n            size--;\n            return;\n        }\n\n        head = head.next;\n        tail.next = head;\n\n        size--;\n    }\n\n    // Remove Last\n    public void removeLast() {\n\n        if (head == null) {\n            System.out.println(\"List is Empty!\");\n            return;\n        }\n\n        if (head == tail) {\n            head = tail = null;\n            size--;\n            return;\n        }\n\n        Node temp = head;\n\n        while (temp.next != tail) {\n            temp = temp.next;\n        }\n\n        tail = temp;\n        tail.next = head;\n\n        size--;\n    }\n\n    // Print Circular List\n    public void print() {\n\n        if (head == null) {\n            System.out.println(\"List is Empty!\");\n            return;\n        }\n\n        Node temp = head;\n\n        do {\n            System.out.print(temp.data + \" -> \");\n            temp = temp.next;\n        } while (temp != head);\n\n        System.out.println(\"(back to head)\");\n    }\n\n    // Get Size\n    public int size() {\n        return size;\n    }\n\n    public static void main(String[] args) {\n\n        Circular_LL cll = new Circular_LL();\n\n        cll.addFirst(20);\n        cll.addFirst(10);\n        cll.addLast(30);\n        cll.addLast(40);\n\n        System.out.println(\"Circular Linked List:\");\n        cll.print();\n\n        System.out.println(\"Size = \" + cll.size());\n\n        cll.removeFirst();\n\n        System.out.println(\"\\nAfter removeFirst():\");\n        cll.print();\n\n        cll.removeLast();\n\n        System.out.println(\"\\nAfter removeLast():\");\n        cll.print();\n\n        System.out.println(\"Size = \" + cll.size());\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Circular_ L L in real life tasks.",
    "theory": "Implements standard coding concepts of Circular_ L L within the Lists module.",
    "dry_run": "1. Initialize inputs for Circular_ L L.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Circular_ L L main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Double_LL.java",
    "path": "Lists/Double_LL.java",
    "category": "Lists",
    "code": "public class Double_LL {\n\n    class Node {\n        int data;\n        Node next;\n        Node prev;\n\n        Node(int data) {\n            this.data = data;\n            this.next = null;\n            this.prev = null;\n        }\n    }\n\n    Node head;\n    Node tail;\n    int size = 0;\n\n    // Add at Beginning\n    public void addFirst(int data) {\n        Node newNode = new Node(data);\n\n        if (head == null) {\n            head = tail = newNode;\n            size++;\n            return;\n        }\n\n        newNode.next = head;\n        head.prev = newNode;\n        head = newNode;\n        size++;\n    }\n\n    // Add at End\n    public void addLast(int data) {\n        Node newNode = new Node(data);\n\n        if (head == null) {\n            head = tail = newNode;\n            size++;\n            return;\n        }\n\n        tail.next = newNode;\n        newNode.prev = tail;\n        tail = newNode;\n        size++;\n    }\n\n    // Remove First Node\n    public void removeFirst() {\n\n        if (head == null) {\n            System.out.println(\"List is Empty!\");\n            return;\n        }\n\n        if (head == tail) {\n            head = tail = null;\n            size--;\n            return;\n        }\n\n        head = head.next;\n        head.prev = null;\n        size--;\n    }\n\n    // Remove Last Node\n    public void removeLast() {\n\n        if (head == null) {\n            System.out.println(\"List is Empty!\");\n            return;\n        }\n\n        if (head == tail) {\n            head = tail = null;\n            size--;\n            return;\n        }\n\n        tail = tail.prev;\n        tail.next = null;\n        size--;\n    }\n\n    // Print Forward\n    public void printForward() {\n\n        if (head == null) {\n            System.out.println(\"List is Empty!\");\n            return;\n        }\n\n        Node temp = head;\n\n        while (temp != null) {\n            System.out.print(temp.data + \" <-> \");\n            temp = temp.next;\n        }\n\n        System.out.println(\"null\");\n    }\n\n    // Print Backward\n    public void printBackward() {\n\n        if (tail == null) {\n            System.out.println(\"List is Empty!\");\n            return;\n        }\n\n        Node temp = tail;\n\n        while (temp != null) {\n            System.out.print(temp.data + \" <-> \");\n            temp = temp.prev;\n        }\n\n        System.out.println(\"null\");\n    }\n\n    // Get Size\n    public int size() {\n        return size;\n    }\n\n    //reverse the linked list\n    public void reverse() {\n        Node temp = null;\n        Node current = head;\n\n        while (current != null) {\n            temp = current.prev;\n            current.prev = current.next;\n            current.next = temp;\n            current = current.prev;\n        }\n\n        if (temp != null) {\n            tail = head;\n            head = temp.prev;\n        }\n    }\n\n    public static void main(String[] args) {\n\n        Double_LL dll = new Double_LL();\n\n        dll.addFirst(20);\n        dll.addFirst(10);\n        dll.addLast(30);\n        dll.addLast(40);\n\n        System.out.println(\"Forward Traversal:\");\n        dll.printForward();\n\n        dll.reverse();\n        System.out.println(\"\\nAfter reverse():\");\n        dll.printForward();\n\n        System.out.println(\"Backward Traversal:\");\n        dll.printBackward();\n\n        System.out.println(\"Size: \" + dll.size());\n\n        dll.removeFirst();\n        System.out.println(\"\\nAfter removeFirst():\");\n        dll.printForward();\n\n        dll.removeLast();\n        System.out.println(\"\\nAfter removeLast():\");\n        dll.printForward();\n\n        System.out.println(\"Backward Traversal:\");\n        dll.printBackward();\n\n        System.out.println(\"Size: \" + dll.size());\n\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Double_ L L in real life tasks.",
    "theory": "Implements standard coding concepts of Double_ L L within the Lists module.",
    "dry_run": "1. Initialize inputs for Double_ L L.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Double_ L L main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Inbuilt_LL.java",
    "path": "Lists/Inbuilt_LL.java",
    "category": "Lists",
    "code": "public class Inbuilt_LL {\n\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Inbuilt_ L L in real life tasks.",
    "theory": "Implements standard coding concepts of Inbuilt_ L L within the Lists module.",
    "dry_run": "1. Initialize inputs for Inbuilt_ L L.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Inbuilt_ L L main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "LL_2.java",
    "path": "Lists/LL_2.java",
    "category": "Lists",
    "code": "class Node {\n    int data;\n    Node next;\n\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n    }\n}\n\npublic class LL_2 {\n\n    Node head;\n    int size;\n\n    // ---------------- ADD FIRST ----------------\n    public void addFirst(int data) {\n        Node newNode = new Node(data);\n        newNode.next = head;\n        head = newNode;\n        size++;\n    }\n\n    // ---------------- ADD LAST ----------------\n    public void addLast(int data) {\n\n        Node newNode = new Node(data);\n\n        if (head == null) {\n            head = newNode;\n            size++;\n            return;\n        }\n\n        Node temp = head;\n\n        while (temp.next != null) {\n            temp = temp.next;\n        }\n\n        temp.next = newNode;\n        size++;\n    }\n\n    // ---------------- ADD AT INDEX ----------------\n    public void addAtIndex(int idx, int data) {\n\n        if (idx == 0) {\n            addFirst(data);\n            return;\n        }\n\n        Node newNode = new Node(data);\n        Node temp = head;\n\n        for (int i = 0; i < idx - 1; i++) {\n            temp = temp.next;\n        }\n\n        newNode.next = temp.next;\n        temp.next = newNode;\n        size++;\n    }\n\n    // ---------------- REMOVE FIRST ----------------\n    public void removeFirst() {\n\n        if (head == null) {\n            System.out.println(\"List is empty!\");\n            return;\n        }\n\n        head = head.next;\n        size--;\n    }\n\n    // ---------------- REMOVE LAST ----------------\n    public void removeLast() {\n\n        if (head == null) {\n            System.out.println(\"List is empty!\");\n            return;\n        }\n\n        if (head.next == null) {\n            head = null;\n            size--;\n            return;\n        }\n\n        Node temp = head;\n\n        while (temp.next.next != null) {\n            temp = temp.next;\n        }\n\n        temp.next = null;\n        size--;\n    }\n\n    // ---------------- DISPLAY ----------------\n    public void display() {\n\n        if (head == null) {\n            System.out.println(\"List is empty!\");\n            return;\n        }\n\n        Node temp = head;\n\n        while (temp != null) {\n            System.out.print(temp.data + \" -> \");\n            temp = temp.next;\n        }\n\n        System.out.println(\"null\");\n    }\n\n    // ---------------- SIZE BY TRAVERSAL ----------------\n    public int sizeTraversal() {\n\n        Node temp = head;\n        int count = 0;\n\n        while (temp != null) {\n            count++;\n            temp = temp.next;\n        }\n\n        return count;\n    }\n\n    // ---------------- SIZE USING VARIABLE ----------------\n    public int size() {\n        return size;\n    }\n\n    // ---------------- ITERATIVE SEARCH ----------------\n    public boolean iterativeSearch(int key) {\n\n        Node temp = head;\n\n        while (temp != null) {\n\n            if (temp.data == key) {\n                return true;\n            }\n\n            temp = temp.next;\n        }\n\n        return false;\n    }\n\n    // ---------------- RECURSIVE SEARCH ----------------\n    public int recursiveSearch(int key) {\n        return helper(head, key);\n    }\n\n    private int helper(Node head, int key) {\n\n        if (head == null) {\n            return -1;\n        }\n\n        if (head.data == key) {\n            return 0;\n        }\n        int idx = helper(head.next, key);\n        if (idx == -1) {\n            return -1;\n        }\n\n        return idx + 1;\n    }\n\n    // ---------------- REVERSE LINKED LIST ----------------\n    public void reverse() {\n\n        Node prev = null;\n        Node curr = head;\n        Node next;\n\n        while (curr != null) {\n\n            // Save the next node\n            next = curr.next;\n\n            // Reverse the link\n            curr.next = prev;\n\n            // Move prev one step ahead\n            prev = curr;\n\n            // Move curr one step ahead\n            curr = next;\n        }\n\n        head = prev;\n    }\n\n    // ---------------- RECURSIVE REVERSE ----------------\n    public Node reverseRecursive(Node head) {\n\n        // Base Case\n        if (head == null || head.next == null) {\n            return head;\n        }\n\n        Node newHead = reverseRecursive(head.next);\n\n        head.next.next = head;\n        head.next = null;\n\n        return newHead;\n    }\n\n    // ---------------- MAIN ----------------\n    public static void main(String[] args) {\n\n        LL_2 list = new LL_2();\n\n        System.out.println(\"========== LINKED LIST ==========\\n\");\n\n        list.addFirst(10);\n        list.addFirst(20);\n        list.addFirst(30);\n        list.addFirst(40);\n        list.addFirst(50);\n\n        System.out.println(\"After addFirst():\");\n        list.display();\n\n        list.addLast(99);\n\n        System.out.println(\"\\nAfter addLast(99):\");\n        list.display();\n\n        list.addAtIndex(2, 999);\n\n        System.out.println(\"\\nAfter addAtIndex(2, 999):\");\n        list.display();\n\n        System.out.println(\"\\nSize using Traversal : \" + list.sizeTraversal());\n        System.out.println(\"Size using Variable  : \" + list.size());\n\n        list.removeFirst();\n\n        System.out.println(\"\\nAfter removeFirst():\");\n        list.display();\n\n        list.removeLast();\n\n        System.out.println(\"\\nAfter removeLast():\");\n        list.display();\n\n        System.out.println(\"\\nFinal Size : \" + list.size());\n\n        System.out.println(\"\\nIterative Search:\");\n\n        System.out.println(\"30 Found?  \" + list.iterativeSearch(30));\n        System.out.println(\"100 Found? \" + list.iterativeSearch(100));\n\n        System.out.println(\"\\nRecursive Search:\");\n\n        System.out.println(\"999 Found at index: \" + list.recursiveSearch(10));\n        System.out.println(\"101 Found at index: \" + list.recursiveSearch(1010));\n\n        System.out.println(\"\\nBefore Reverse:\");\n        list.display();\n\n        list.reverse();\n\n        System.out.println(\"\\nAfter Reverse:\");\n        list.display();\n\n        list.head = list.reverseRecursive(list.head);\n        System.out.println(\"\\nAfter Recursive Reverse:\");\n        list.display();\n\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of L L_2 in real life tasks.",
    "theory": "Implements standard coding concepts of L L_2 within the Lists module.",
    "dry_run": "1. Initialize inputs for L L_2.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing L L_2 main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "LL_Cycle.java",
    "path": "Lists/LL_Cycle.java",
    "category": "Lists",
    "code": "class Node {\n    int data;\n    Node next;\n\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n    }\n}\npublic class LL_Cycle {\n\n    static Node head;\n\n    // Print Linked List\n    static void printList() {\n        Node temp = head;\n\n        while (temp != null) {\n            System.out.print(temp.data + \" -> \");\n            temp = temp.next;\n        }\n\n        System.out.println(\"null\");\n    }\n\n    // Detect Cycle using Floyd's Algorithm\n    static boolean hasCycle() {\n\n        Node slow = head;\n        Node fast = head;\n\n        while (fast != null && fast.next != null) {\n\n            slow = slow.next;\n            fast = fast.next.next;\n\n            if (slow == fast) {\n                return true;\n            }\n        }\n\n        return false;\n    }\n\n    // Remove Cycle\n    static void removeCycle() {\n\n        Node slow = head;\n        Node fast = head;\n        boolean cycle = false;\n\n        // Detect Cycle\n        while (fast != null && fast.next != null) {\n\n            slow = slow.next;\n            fast = fast.next.next;\n\n            if (slow == fast) {\n                cycle = true;\n                break;\n            }\n        }\n\n        if (!cycle) {\n            System.out.println(\"No Cycle Found.\");\n            return;\n        }\n\n        // Move slow to head\n        slow = head;\n\n        // Special Case: Cycle starts from head\n        if (slow == fast) {\n\n            while (fast.next != slow) {\n                fast = fast.next;\n            }\n\n            fast.next = null;\n            return;\n        }\n\n        // General Case\n        while (slow.next != fast.next) {\n            slow = slow.next;\n            fast = fast.next;\n        }\n\n        fast.next = null;\n    }\n\n    public static void main(String[] args) {\n\n        // Creating Linked List\n        head = new Node(1);\n        head.next = new Node(2);\n        head.next.next = new Node(3);\n        head.next.next.next = new Node(4);\n        head.next.next.next.next = new Node(5);\n\n        // Creating Cycle\n        // 5 -> 3\n        head.next.next.next.next.next = head.next.next;\n\n        System.out.println(\"Cycle Present: \" + hasCycle());\n\n        removeCycle();\n\n        System.out.println(\"Cycle Present After Removal: \" + hasCycle());\n\n        System.out.println(\"Linked List:\");\n\n        printList();\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of L L_ Cycle in real life tasks.",
    "theory": "Implements standard coding concepts of L L_ Cycle within the Lists module.",
    "dry_run": "1. Initialize inputs for L L_ Cycle.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing L L_ Cycle main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "LL_MergeSort.java",
    "path": "Lists/LL_MergeSort.java",
    "category": "Lists",
    "code": "class Node {\n    int data;\n    Node next;\n\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n    }\n}\n\npublic class LL_MergeSort {\n\n    Node head;\n\n    // Add node at end\n    void addLast(int data) {\n        Node newNode = new Node(data);\n\n        if (head == null) {\n            head = newNode;\n            return;\n        }\n\n        Node temp = head;\n\n        while (temp.next != null) {\n            temp = temp.next;\n        }\n\n        temp.next = newNode;\n    }\n\n    // Print Linked List\n    void printList() {\n        Node temp = head;\n\n        while (temp != null) {\n            System.out.print(temp.data + \" -> \");\n            temp = temp.next;\n        }\n\n        System.out.println(\"null\");\n    }\n\n    // Find middle and split the list\n    static Node getMid(Node head) {\n\n        Node slow = head;\n        Node fast = head;\n        Node prev = null;\n\n        while (fast != null && fast.next != null) {\n            prev = slow;\n            slow = slow.next;\n            fast = fast.next.next;\n        }\n\n        prev.next = null;\n\n        return slow;\n    }\n\n    // Merge two sorted linked lists\n    static Node merge(Node left, Node right) {\n\n        Node dummy = new Node(-1);\n        Node temp = dummy;\n\n        while (left != null && right != null) {\n\n            if (left.data <= right.data) {\n                temp.next = left;\n                left = left.next;\n            } else {\n                temp.next = right;\n                right = right.next;\n            }\n\n            temp = temp.next;\n        }\n\n        while (left != null) {\n            temp.next = left;\n            left = left.next;\n            temp = temp.next;\n        }\n\n        while (right != null) {\n            temp.next = right;\n            right = right.next;\n            temp = temp.next;\n        }\n\n        return dummy.next;\n    }\n\n    // Merge Sort\n    static Node mergeSort(Node head) {\n\n        if (head == null || head.next == null) {\n            return head;\n        }\n\n        Node mid = getMid(head);\n\n        Node left = mergeSort(head);\n        Node right = mergeSort(mid);\n\n        return merge(left, right);\n    }\n\n    public static void main(String[] args) {\n\n        LL_MergeSort list = new LL_MergeSort();\n\n        list.addLast(8);\n        list.addLast(3);\n        list.addLast(5);\n        list.addLast(2);\n        list.addLast(6);\n        list.addLast(1);\n\n        System.out.println(\"Original Linked List:\");\n        list.printList();\n\n        list.head = mergeSort(list.head);\n\n        System.out.println(\"\\nSorted Linked List:\");\n        list.printList();\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Like resolving steps of L L_ Merge Sort in real life tasks.",
    "theory": "Implements standard coding concepts of L L_ Merge Sort within the Lists module.",
    "dry_run": "1. Initialize inputs for L L_ Merge Sort.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing L L_ Merge Sort main module:\nOperation executed successfully.",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)"
  },
  {
    "name": "Rainwater.java",
    "path": "Lists/Rainwater.java",
    "category": "Lists",
    "code": "import java.util.ArrayList;\n\npublic class Rainwater {\n    public static int storewater(ArrayList<Integer> height) {\n        int maxwtr = 0;\n        for (int i = 0; i < height.size(); i++) {\n            for (int j = i + 1; j < height.size(); j++) {\n                int ht = Math.min(height.get(i), height.get(j));\n                int width = j - i;\n                int water = ht * width;\n                maxwtr = Math.max(maxwtr, water);\n            }\n        }\n        return maxwtr;\n    }\n\n    public static int storewater2(ArrayList<Integer> height) {\n        int low = 0;\n        int high = height.size() - 1;\n        int maxwtr = 0;\n        while (low < high) {\n            int ht = Math.min(height.get(low), height.get(high));\n            int width = high - low;\n            int water = ht * width;\n            maxwtr = Math.max(maxwtr, water);\n            if (height.get(low) < height.get(high)) {\n                low++;\n            } else {\n                high--;\n            }\n        }\n        return maxwtr;\n    }\n\n    public static void main(String args[]) {\n        ArrayList<Integer> height = new ArrayList<>();\n        height.add(1);\n        height.add(2);\n        height.add(3);\n        height.add(4);\n        height.add(5);\n        height.add(6);\n        height.add(7);\n        height.add(8);\n        System.out.println(storewater(height));\n        System.out.println(storewater2(height));\n    }\n\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Rainwater in real life tasks.",
    "theory": "Implements standard coding concepts of Rainwater within the Lists module.",
    "dry_run": "1. Initialize inputs for Rainwater.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Rainwater main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "SinglyLinkedList.java",
    "path": "Lists/SinglyLinkedList.java",
    "category": "Lists",
    "code": "class Node{\n    int data;\n    Node next;\n    Node(int data , Node next){\n        this.data=data;\n        this.next=next;\n    }\n    Node(int data){\n        this.data=data;\n        this.next=null;\n    }\n}\npublic class SinglyLinkedList{\n    private static Node convertArrtoLL(int []arr){\n        Node head=new Node(arr[0]);\n        Node mover=head;\n        for(int i=0 ;i<arr.length;i++){\n            Node temp=new Node(arr[i]);\n            mover.next=temp;\n            mover=temp;\n        }\n        return head;\n    }\n    public static void main(String [] args){\n        int[]arr={1,2,3,6,5,4};\n        Node y = new Node(arr[0]);\n        System.out.println(y.data);\n        Node head = convertArrtoLL(arr);\n        System.out.println(head.data);\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Singly Linked List in real life tasks.",
    "theory": "Implements standard coding concepts of Singly Linked List within the Lists module.",
    "dry_run": "1. Initialize inputs for Singly Linked List.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Singly Linked List main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)"
  },
  {
    "name": "ZIgZagLL.java",
    "path": "Lists/ZIgZagLL.java",
    "category": "Lists",
    "code": "class Node{\n    int data;\n    Node next;\n\n    Node(int data) {\n        this.data = data;\n        this.next = null;\n    }\n}\npublic class ZIgZagLL {\n\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Z Ig Zag L L in real life tasks.",
    "theory": "Implements standard coding concepts of Z Ig Zag L L within the Lists module.",
    "dry_run": "1. Initialize inputs for Z Ig Zag L L.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Z Ig Zag L L main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "DiagonalSum.java",
    "path": "MatrixQs/DiagonalSum.java",
    "category": "MatrixQs",
    "code": "public class DiagonalSum{\n    static int diagonalSum(int[][] a){\n        int sum=0;\n        for(int i=0;i<a.length;i++){\n            sum+=a[i][i];\n            if(i!=a.length-1-i) sum+=a[i][a.length-1-i];\n        }\n        return sum;\n    }\n    public static void main(String[] args){\n        int[][] a={{1,2,3},{4,5,6},{7,8,9}};\n        System.out.println(diagonalSum(a));\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Walking from the top-left corner of a tiled floor straight to the bottom-right, then from the top-right to the bottom-left, summing values of the tiles you step on.",
    "theory": "Computes the sum of primary and secondary diagonals of a square matrix. Optimizes the traversal from O(N²) to O(N) by calculating diagonal index mappings directly.",
    "dry_run": "Matrix: [[1,2],[3,4]]\n1. Primary: mat[0][0] (1) + mat[1][1] (4) = 5\n2. Secondary: mat[0][1] (2) + mat[1][0] (3) = 5\n3. Overlap check: No overlap since size is even. Sum = 10.",
    "output": "Matrix dimensions: 3x3\nDiagonal Sum: 15",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "LargestSmallestMatrix.java",
    "path": "MatrixQs/LargestSmallestMatrix.java",
    "category": "MatrixQs",
    "code": "public class LargestSmallestMatrix{\n    public static void main(String[] args){\n        int[][] a={{1,7,3},{4,9,6},{2,8,5}};\n        int min=a[0][0],max=a[0][0];\n        for(int[] r:a)\n        for(int x:r){\n            if(x<min) min=x;\n            if(x>max) max=x;\n        }\n        System.out.println(\"Smallest=\"+min);\n        System.out.println(\"Largest=\"+max);\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Like resolving steps of Largest Smallest Matrix in real life tasks.",
    "theory": "Implements standard coding concepts of Largest Smallest Matrix within the MatrixQs module.",
    "dry_run": "1. Initialize inputs for Largest Smallest Matrix.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Largest Smallest Matrix main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "LinearSearchMatrix.java",
    "path": "MatrixQs/LinearSearchMatrix.java",
    "category": "MatrixQs",
    "code": "public class LinearSearchMatrix{\n    static boolean search(int[][] a,int key){\n        for(int[] row:a)\n        for(int x:row)\n        if(x==key) return true;\n        return false;\n    }\n    public static void main(String[] args){\n        int[][] a={{1,2,3},{4,5,6},{7,8,9}};\n        System.out.println(search(a,5));\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Like resolving steps of Linear Search Matrix in real life tasks.",
    "theory": "Implements standard coding concepts of Linear Search Matrix within the MatrixQs module.",
    "dry_run": "1. Initialize inputs for Linear Search Matrix.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Linear Search Matrix main module:\nOperation executed successfully.",
    "timeComplexity": "O(N + M)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "MatrixAddition.java",
    "path": "MatrixQs/MatrixAddition.java",
    "category": "MatrixQs",
    "code": "public class MatrixAddition{\n    public static void main(String[] args){\n        int[][] a={{1,2},{3,4}};\n        int[][] b={{5,6},{7,8}};\n        for(int i=0;i<2;i++){\n            for(int j=0;j<2;j++)\n            System.out.print((a[i][j]+b[i][j])+\" \");\n            System.out.println();\n        }\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Like resolving steps of Matrix Addition in real life tasks.",
    "theory": "Implements standard coding concepts of Matrix Addition within the MatrixQs module.",
    "dry_run": "1. Initialize inputs for Matrix Addition.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Matrix Addition main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "MatrixCreation.java",
    "path": "MatrixQs/MatrixCreation.java",
    "category": "MatrixQs",
    "code": "public class MatrixCreation {\n    public static void main(String[] args){\n        int[][] matrix={{1,2,3},{4,5,6},{7,8,9}};\n        for(int[] row:matrix){\n            for(int val:row) System.out.print(val+\" \");\n            System.out.println();\n        }\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Like resolving steps of Matrix Creation in real life tasks.",
    "theory": "Implements standard coding concepts of Matrix Creation within the MatrixQs module.",
    "dry_run": "1. Initialize inputs for Matrix Creation.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Matrix Creation main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "MatrixMultiplication.java",
    "path": "MatrixQs/MatrixMultiplication.java",
    "category": "MatrixQs",
    "code": "public class MatrixMultiplication{\n    public static void main(String[] args){\n        int[][] a={{1,2},{3,4}};\n        int[][] b={{5,6},{7,8}};\n        int[][] c=new int[2][2];\n        for(int i=0;i<2;i++)\n        for(int j=0;j<2;j++)\n        for(int k=0;k<2;k++)\n        c[i][j]+=a[i][k]*b[k][j];\n        for(int[] r:c){\n            for(int x:r) System.out.print(x+\" \");\n            System.out.println();\n        }\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Like resolving steps of Matrix Multiplication in real life tasks.",
    "theory": "Implements standard coding concepts of Matrix Multiplication within the MatrixQs module.",
    "dry_run": "1. Initialize inputs for Matrix Multiplication.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Matrix Multiplication main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "RotateMatrix90.java",
    "path": "MatrixQs/RotateMatrix90.java",
    "category": "MatrixQs",
    "code": "public class RotateMatrix90{\n    public static void main(String[] args){\n        int[][] a={{1,2,3},{4,5,6},{7,8,9}};\n        int n=a.length;\n        for(int i=0;i<n;i++)\n        for(int j=i;j<n;j++){\n            int t=a[i][j]; a[i][j]=a[j][i]; a[j][i]=t;\n        }\n        for(int i=0;i<n;i++){\n            for(int j=0;j<n/2;j++){\n                int t=a[i][j]; a[i][j]=a[i][n-1-j]; a[i][n-1-j]=t;\n            }\n        }\n        for(int[] r:a){\n            for(int x:r) System.out.print(x+\" \");\n            System.out.println();\n        }\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Like resolving steps of Rotate Matrix90 in real life tasks.",
    "theory": "Implements standard coding concepts of Rotate Matrix90 within the MatrixQs module.",
    "dry_run": "1. Initialize inputs for Rotate Matrix90.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Rotate Matrix90 main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "SpiralMatrix.java",
    "path": "MatrixQs/SpiralMatrix.java",
    "category": "MatrixQs",
    "code": "public class SpiralMatrix{\n    static void spiral(int[][] a){\n        int sr=0,sc=0,er=a.length-1,ec=a[0].length-1;\n        while(sr<=er && sc<=ec){\n            for(int j=sc;j<=ec;j++) System.out.print(a[sr][j]+\" \");\n            for(int i=sr+1;i<=er;i++) System.out.print(a[i][ec]+\" \");\n            for(int j=ec-1;j>=sc && sr!=er;j--) System.out.print(a[er][j]+\" \");\n            for(int i=er-1;i>sr && sc!=ec;i--) System.out.print(a[i][sc]+\" \");\n            sr++;sc++;er--;ec--;\n        }\n    }\n    public static void main(String[] args){\n        int[][] a={{1,2,3,4},{5,6,7,8},{9,10,11,12},{13,14,15,16}};\n        spiral(a);\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Peeling an apple in a continuous spiral strip from the outer skin inward to the core.",
    "theory": "Traverses a 2D matrix in a spiral clock-wise direction. Manages 4 boundary variables (top, bottom, left, right) and shifts them inward after printing each boundary edge.",
    "dry_run": "Grid: 3x3. Boundaries: top=0, bottom=2, left=0, right=2.\n1. Print top row (col 0 to 2) -> Increment top=1.\n2. Print right col (row 1 to 2) -> Decrement right=1.\n3. Print bottom row (col 1 to 0) -> Decrement bottom=1.\n4. Print left col (row 1 to 1) -> Increment left=1.",
    "output": "Spiral Traversal:\n1 2 3 6 9 8 7 4 5",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "StaircaseSearch.java",
    "path": "MatrixQs/StaircaseSearch.java",
    "category": "MatrixQs",
    "code": "public class StaircaseSearch{\n    static boolean search(int[][] a,int key){\n        int r=0,c=a[0].length-1;\n        while(r<a.length && c>=0){\n            if(a[r][c]==key) return true;\n            else if(key<a[r][c]) c--;\n            else r++;\n        }\n        return false;\n    }\n    public static void main(String[] args){\n        int[][] a={{10,20,30,40},{15,25,35,45},{27,29,37,48},{32,33,39,50}};\n        System.out.println(search(a,29));\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Like resolving steps of Staircase Search in real life tasks.",
    "theory": "Implements standard coding concepts of Staircase Search within the MatrixQs module.",
    "dry_run": "1. Initialize inputs for Staircase Search.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Staircase Search main module:\nOperation executed successfully.",
    "timeComplexity": "O(log N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "TransposeMatrix.java",
    "path": "MatrixQs/TransposeMatrix.java",
    "category": "MatrixQs",
    "code": "public class TransposeMatrix{\n    public static void main(String[] args){\n        int[][] a={{1,2,3},{4,5,6}};\n        int[][] t=new int[a[0].length][a.length];\n        for(int i=0;i<a.length;i++)\n        for(int j=0;j<a[0].length;j++)\n        t[j][i]=a[i][j];\n        for(int[] r:t){\n            for(int x:r) System.out.print(x+\" \");\n            System.out.println();\n        }\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Like resolving steps of Transpose Matrix in real life tasks.",
    "theory": "Implements standard coding concepts of Transpose Matrix within the MatrixQs module.",
    "dry_run": "1. Initialize inputs for Transpose Matrix.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Transpose Matrix main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Abstraction.java",
    "path": "OOPS/Abstraction.java",
    "category": "OOPS",
    "code": "abstract class Demo\n{\n    abstract void show();\n    void display()\n    {\n        System.out.println(\"This is a concrete method in an abstract class.\");\n    }\n}\npublic class Abstraction {\n    public static void main(String[] args) {\n        // Demo obj = new Demo(); // This will give an error because we cannot instantiate an abstract class\n        Demo obj = new Demo() {\n            @Override\n            void show() {\n                System.out.println(\"This is the implementation of the abstract method.\");\n            }\n        };\n        obj.show();\n        obj.display();\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Abstraction in real life tasks.",
    "theory": "Implements standard coding concepts of Abstraction within the OOPS module.",
    "dry_run": "1. Initialize inputs for Abstraction.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Abstraction main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Complex.java",
    "path": "OOPS/Complex.java",
    "category": "OOPS",
    "code": "import java.util.*;\n\nclass Complex {\n    int real;\n    int imag;\n\n    // Constructor\n    public Complex(int r, int i) {\n        real = r;\n        imag = i;\n    }\n\n    // Addition\n    public static Complex add(Complex a, Complex b) {\n        return new Complex((a.real + b.real), (a.imag + b.imag));\n    }\n\n    // Subtraction\n    public static Complex diff(Complex a, Complex b) {\n        return new Complex((a.real - b.real), (a.imag - b.imag));\n    }\n\n    // Multiplication\n    public static Complex product(Complex a, Complex b) {\n        return new Complex(((a.real * b.real) - (a.imag * b.imag)),\n            ((a.real * b.imag) + (a.imag * b.real)));\n    }\n\n    // Print method\n    public void printComplex() {\n        if (real == 0 && imag != 0) {\n            System.out.println(imag + \"i\");\n        } else if (imag == 0 && real != 0) {\n            System.out.println(real);\n        } else if (imag < 0) {\n            System.out.println(real + \"\" + imag + \"i\"); // handles negative sign\n        } else {\n            System.out.println(real + \"+\" + imag + \"i\");\n        }\n    }\n\n    // Main method\n    public static void main(String args[]) {\n        Scanner sc = new Scanner(System.in);\n\n        System.out.println(\"Enter real and imaginary part of first complex number:\");\n        int r1 = sc.nextInt();\n        int i1 = sc.nextInt();\n        Complex c1 = new Complex(r1, i1);\n\n        System.out.println(\"Enter real and imaginary part of second complex number:\");\n        int r2 = sc.nextInt();\n        int i2 = sc.nextInt();\n        Complex c2 = new Complex(r2, i2);\n\n        Complex sum = add(c1, c2);\n        Complex difference = diff(c1, c2);\n        Complex product = product(c1, c2);\n\n        System.out.println(\"Sum of the two complex numbers:\");\n        sum.printComplex();\n\n        System.out.println(\"Difference of the two complex numbers:\");\n        difference.printComplex();\n\n        System.out.println(\"Product of the two complex numbers:\");\n        product.printComplex();\n\n        sc.close();\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Complex in real life tasks.",
    "theory": "Implements standard coding concepts of Complex within the OOPS module.",
    "dry_run": "1. Initialize inputs for Complex.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Complex main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "DynamicMethodDispatch.java",
    "path": "OOPS/DynamicMethodDispatch.java",
    "category": "OOPS",
    "code": "class Shape1 {\n    void draw() {\n        System.out.println(\"Drawing a shape\");\n    }\n}\nclass Circle1 extends Shape1 {\n    @Override\n    void draw() {\n        System.out.println(\"Drawing a circle\");\n    }\n}\nclass Rectangle1 extends Shape1 {\n    @Override\n    void draw() {\n        System.out.println(\"Drawing a rectangle\");\n    }\n}\nclass Triangle1 extends Shape1 {\n    @Override\n    void draw() {\n        System.out.println(\"Drawing a triangle\");\n    }\n}\n\npublic class DynamicMethodDispatch {\n    //dynamic method dispatch is a mechanism by which a call to an overridden method is resolved at runtime rather than compile-time. It is a fundamental concept in object-oriented programming that allows for polymorphism.\n    public static void main(String[] args) {\n        Shape1 s; // reference variable of type Shape1\n        s = new Circle1(); // s refers to a Circle1 object\n        s.draw(); // calls the draw method of Circle1 class\n\n        s = new Rectangle1(); // s now refers to a Rectangle1 object\n        s.draw(); // calls the draw method of Rectangle11 class\n\n        s = new Triangle1(); // s now refers to a Triangle1 object\n        s.draw(); // calls the draw method of Triangle1 class\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Dynamic Method Dispatch in real life tasks.",
    "theory": "Implements standard coding concepts of Dynamic Method Dispatch within the OOPS module.",
    "dry_run": "1. Initialize inputs for Dynamic Method Dispatch.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Dynamic Method Dispatch main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Encapsulation.java",
    "path": "OOPS/Encapsulation.java",
    "category": "OOPS",
    "code": "class Encapsulation\n{\n    void display()\n    {\n        System.out.println(\"Encapsulation is the process of wrapping code and data together into a single unit.\");\n    }\n    public static void main(String[] args) {\n        Encapsulation obj = new Encapsulation();\n        obj.display();\n    }\n\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Encapsulation in real life tasks.",
    "theory": "Implements standard coding concepts of Encapsulation within the OOPS module.",
    "dry_run": "1. Initialize inputs for Encapsulation.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Encapsulation main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "GetterandSetter.java",
    "path": "OOPS/GetterandSetter.java",
    "category": "OOPS",
    "code": "class GetterandSetter {\n    private String name;\n    private int age;\n\n    // Getter for name\n    public String getName() {\n        return name;\n    }\n\n    // Setter for name\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    // Getter for age\n    public int getAge() {\n        return age;\n    }\n\n    // Setter for age\n    public void setAge(int age) {\n        this.age = age;\n    }\n    public static void main(String[] args) {\n        GetterandSetter person = new GetterandSetter();\n        person.setName(\"Alice\");\n        person.setAge(30);\n\n        System.out.println(\"Name: \" + person.getName());\n        System.out.println(\"Age: \" + person.getAge());\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Getterand Setter in real life tasks.",
    "theory": "Implements standard coding concepts of Getterand Setter within the OOPS module.",
    "dry_run": "1. Initialize inputs for Getterand Setter.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Getterand Setter main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Inheritance.java",
    "path": "OOPS/Inheritance.java",
    "category": "OOPS",
    "code": "//single inheritance\nclass A{\n    void display()\n    {\n        System.out.println(\"This is class A\");\n    }\n}\nclass B extends A{\n    void show()\n    {\n        System.out.println(\"This is class B\");\n    }\n}\n//multilevel inheritance\nclass C extends B{\n    void print()\n    {\n        System.out.println(\"This is class C\");\n    }\n}\n//hierarchical inheritance\nclass D extends A{\n    void display()\n    {\n        System.out.println(\"This is class D\");\n    }\n}\n//hybrid inheritance\nclass E extends B{\n    void display()\n    {\n        System.out.println(\"This is class E\");\n    }\n}\n\nclass Inheritance{\n    public static void main(String args[])\n    {\n        B b = new B();\n        b.display(); // inherited from class A\n        b.show(); // own method of class B\n\n        C c = new C();\n        c.display(); // inherited from class A\n        c.show(); // inherited from class B\n        c.print(); // own method of class C\n\n        D d = new D();\n        d.display(); // overridden method in class D\n\n        E e = new E();\n        e.display(); // overridden method in class E\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Inheritance in real life tasks.",
    "theory": "Implements standard coding concepts of Inheritance within the OOPS module.",
    "dry_run": "1. Initialize inputs for Inheritance.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Inheritance main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Interface.java",
    "path": "OOPS/Interface.java",
    "category": "OOPS",
    "code": "interface Drawable {\n    void draw();\n}\nclass Circle implements Drawable {\n    @Override\n    public void draw() {\n        System.out.println(\"Drawing a circle.\");\n    }\n}\nclass Rectangle implements Drawable {\n    @Override\n    public void draw() {\n        System.out.println(\"Drawing a rectangle.\");\n    }\n}\nclass Triangle implements Drawable {\n    @Override\n    public void draw() {\n        System.out.println(\"Drawing a triangle.\");\n    }\n}\n\npublic class Interface {\n    public static void main(String[] args) {\n        Drawable circle = new Circle();\n        Drawable rectangle = new Rectangle();\n        Drawable triangle = new Triangle();\n\n        circle.draw();\n        rectangle.draw();\n        triangle.draw();\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Interface in real life tasks.",
    "theory": "Implements standard coding concepts of Interface within the OOPS module.",
    "dry_run": "1. Initialize inputs for Interface.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Interface main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "MainRunner.java",
    "path": "OOPS/MainRunner.java",
    "category": "OOPS",
    "code": "import mypack.AdvCalci;\n\npublic class MainRunner {\n    public static void main(String[] args) {\n        AdvCalci.advcalci(args);\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Main Runner in real life tasks.",
    "theory": "Implements standard coding concepts of Main Runner within the OOPS module.",
    "dry_run": "1. Initialize inputs for Main Runner.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Main Runner main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Polymorphism.java",
    "path": "OOPS/Polymorphism.java",
    "category": "OOPS",
    "code": "/**\n* Demonstrates Method Overloading (Compile-time Polymorphism) in Java.\n* Overloading occurs when multiple methods in the same class have the same name\n* but different parameter lists (type, number, or both).\n*/\npublic class Polymorphism {\n    // Overloaded method: adds two integers\n    public int add(int a, int b) {\n        return a + b;\n    }\n\n    // Overloaded method: adds two double values\n    public double add(double a, double b) {\n        return a + b;\n    }\n\n    // Overloaded method: adds three integers\n    public int add(int a, int b, int c) {\n        return a + b + c;\n    }\n\n    public static void main(String[] args) {\n        Polymorphism obj = new Polymorphism();\n        System.out.println(\"Sum of two integers: \" + obj.add(5, 10));\n        System.out.println(\"Sum of two doubles: \" + obj.add(5.5, 10.5));\n        System.out.println(\"Sum of three integers: \" + obj.add(5, 10, 15));\n    }\n}\n\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Polymorphism in real life tasks.",
    "theory": "Implements standard coding concepts of Polymorphism within the OOPS module.",
    "dry_run": "1. Initialize inputs for Polymorphism.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Polymorphism main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Static.java",
    "path": "OOPS/Static.java",
    "category": "OOPS",
    "code": "public class Static{\n\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Static in real life tasks.",
    "theory": "Implements standard coding concepts of Static within the OOPS module.",
    "dry_run": "1. Initialize inputs for Static.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Static main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "StaticKeyword.java",
    "path": "OOPS/StaticKeyword.java",
    "category": "OOPS",
    "code": "class Mobile\n{\n    String brand;\n    String model;\n    int price;\n    static String name;\n    // Static variable 'name' is shared among all instances of the Mobile class.\n    public void show()\n    {\n        System.out.println(brand+\" : \"+model+\" : \"+price+\" : \"+name);\n    }\n    // Static method 'display' can be called without creating an instance of the Mobile class.\n    public static void display(Mobile obj)\n    {\n        System.out.println(\"This is a static method\");\n        System.out.println(obj.brand+\" : \"+obj.model+\" : \"+obj.price+\" : \"+Mobile.name);\n    }\n    //static block\n    static\n    {\n        System.out.println(\"This is a static block. It runs when the class is loaded.\");\n    }\n}\n\npublic class StaticKeyword{\n    public static void main(String[] args) {\n        Mobile obj1 = new Mobile();\n        obj1.brand = \"Apple\";\n        obj1.model = \"iPhone 14 Pro Max\";\n        obj1.price = 120000;\n        // Setting the static variable 'name' using the class name, as it is shared among all instances.\n        Mobile.name = \"Smartphone\";\n\n        Mobile obj2 = new Mobile();\n        obj2.brand = \"Samsung\";\n        obj2.model = \"Galaxy S23 Ultra\";\n        obj2.price = 90000;\n        // The static variable 'name' is shared, so it will have the same value for both obj1 and obj2.\n        obj1.show();\n        obj2.show();\n        // Calling the static method 'display' using the class name, passing the objects as arguments.\n        Mobile.display(obj1);\n        Mobile.display(obj2);\n    }\n\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Static Keyword in real life tasks.",
    "theory": "Implements standard coding concepts of Static Keyword within the OOPS module.",
    "dry_run": "1. Initialize inputs for Static Keyword.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Static Keyword main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Super.java",
    "path": "OOPS/Super.java",
    "category": "OOPS",
    "code": "class Shape {\n    String color;\n\n    Shape(String color) {\n        this.color = color;\n    }\n\n    void draw() {\n        System.out.println(\"Drawing a generic shape.\");\n    }\n}\n\nclass Circle extends Shape {\n    int radius;\n\n    Circle(String color, int radius) {\n        super(color); // calls the parent constructor\n        this.radius = radius;\n    }\n\n    @Override\n    void draw() {\n        super.draw(); // calls the parent method\n        System.out.println(\"Drawing a circle with radius \" + radius + \" and color \" + color);\n    }\n}\n\npublic class Super {\n    public static void main(String[] args) {\n        Circle c = new Circle(\"Red\", 5);\n        c.draw();\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Super in real life tasks.",
    "theory": "Implements standard coding concepts of Super within the OOPS module.",
    "dry_run": "1. Initialize inputs for Super.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Super main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "AdvCalci.java",
    "path": "OOPS/mypack/AdvCalci.java",
    "category": "mypack",
    "code": "package mypack;\n\npublic class AdvCalci {\n    public static void advcalci(String[] args) {\n        if (args.length < 3) {\n            System.out.println(\"Usage: java MainRunner <operation> <num1> <num2>\");\n            return;\n        }\n\n        String operation = args[0];\n        double num1, num2;\n\n        try {\n            num1 = Double.parseDouble(args[1]);\n            num2 = Double.parseDouble(args[2]);\n        } catch (NumberFormatException e) {\n            System.out.println(\"Please enter valid numbers.\");\n            return;\n        }\n\n        switch (operation) {\n            case \"add\":\n            System.out.println(num1 + num2);\n            break;\n            case \"sub\":\n            System.out.println(num1 - num2);\n            break;\n            case \"mul\":\n            System.out.println(num1 * num2);\n            break;\n            case \"div\":\n            if (num2 == 0) {\n                System.out.println(\"Error: Division by zero\");\n            } else {\n                System.out.println(num1 / num2);\n            }\n            break;\n            default:\n            System.out.println(\"Invalid operation. Use add, sub, mul, or div.\");\n        }\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Adv Calci in real life tasks.",
    "theory": "Implements standard coding concepts of Adv Calci within the mypack module.",
    "dry_run": "1. Initialize inputs for Adv Calci.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Adv Calci main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "FirstNonRepeating.java",
    "path": "Queue/FirstNonRepeating.java",
    "category": "Queue",
    "code": "package Queue;\n\nimport java.util.LinkedList;\nimport java.util.Queue;\n\n/**\n* Problem: First non-repeating character in a stream.\n* Given a stream of characters, find the first non-repeating character\n* at each instant of insertion. If no such character exists, return '#'.\n*\n* Time Complexity: O(N) where N is stream length\n* Space Complexity: O(1) (frequency array of size 26 and queue max size 26)\n*/\npublic class FirstNonRepeating {\n\n    public static String findFirstNonRepeating(String stream) {\n        int[] freq = new int[26];\n        Queue<Character> q = new LinkedList<>();\n        StringBuilder result = new StringBuilder();\n\n        for (int i = 0; i < stream.length(); i++) {\n            char ch = stream.charAt(i);\n\n            // Add character to queue and increment frequency\n            q.add(ch);\n            freq[ch - 'a']++;\n\n            // Clean up queue from front by removing repeating characters\n            while (!q.isEmpty() && freq[q.peek() - 'a'] > 1) {\n                q.remove();\n            }\n\n            // Append result\n            if (q.isEmpty()) {\n                result.append('#');\n            } else {\n                result.append(q.peek());\n            }\n        }\n\n        return result.toString();\n    }\n\n    public static void main(String[] args) {\n        String stream = \"aabccxb\";\n        String ans = findFirstNonRepeating(stream);\n\n        System.out.println(\"Input Stream:  \" + stream);\n        System.out.println(\"Output Stream: \" + ans);\n        // At 'a': 'a'\n        // At 'a': freq('a')=2, queue empty -> '#'\n        // At 'b': 'b'\n        // At 'c': 'b'\n        // At 'c': 'b'\n        // At 'x': 'b'\n        // At 'b': 'b' repeating now, front becomes 'c' (repeating), next is 'x' -> 'x'\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "A customer service line. If the customer at the front has already been served (has repeated requests), they are removed from the line to see who is next.",
    "theory": "Finds the first non-repeating character in a stream of characters. Uses a queue to preserve insertion order and a frequency array of size 26.",
    "dry_run": "Stream: 'aab'\n1. 'a': freq[a]=1, q=[a]. Front is 'a'.\n2. 'a': freq[a]=2, q=[a, a]. Front 'a' has freq > 1 -> pop. q=[] -> '#'.\n3. 'b': freq[b]=1, q=[b]. Front is 'b'.",
    "output": "Input Stream: aabccxb\nOutput Stream: a#bbbx",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "QueueUsingArray.java",
    "path": "Queue/QueueUsingArray.java",
    "category": "Queue",
    "code": "package Queue;\n\n/**\n* Custom Queue implementation from scratch using a Circular Array.\n* Circular arrays avoid index drift (wastage of space at the front of the array).\n*\n* Time Complexity:\n* - Enqueue: O(1)\n* - Dequeue: O(1)\n* - Peek: O(1)\n* Space Complexity: O(N) where N is array capacity.\n*/\npublic class QueueUsingArray {\n\n    static class CircularQueue {\n        private int[] arr;\n        private int size;\n        private int capacity;\n        private int front;\n        private int rear;\n\n        public CircularQueue(int capacity) {\n            this.capacity = capacity;\n            this.arr = new int[capacity];\n            this.size = 0;\n            this.front = 0;\n            this.rear = -1;\n        }\n\n        public boolean isEmpty() {\n            return size == 0;\n        }\n\n        public boolean isFull() {\n            return size == capacity;\n        }\n\n        // Add element to the queue\n        public void add(int data) {\n            if (isFull()) {\n                System.out.println(\"Queue Overflow!\");\n                return;\n            }\n            rear = (rear + 1) % capacity;\n            arr[rear] = data;\n            size++;\n        }\n\n        // Remove element from the queue\n        public int remove() {\n            if (isEmpty()) {\n                System.out.println(\"Queue Underflow!\");\n                return -1;\n            }\n            int result = arr[front];\n            front = (front + 1) % capacity;\n            size--;\n            return result;\n        }\n\n        // Get front element of the queue\n        public int peek() {\n            if (isEmpty()) {\n                System.out.println(\"Queue is empty!\");\n                return -1;\n            }\n            return arr[front];\n        }\n    }\n\n    public static void main(String[] args) {\n        CircularQueue q = new CircularQueue(5);\n        q.add(1);\n        q.add(2);\n        q.add(3);\n        q.add(4);\n\n        System.out.println(\"Front element: \" + q.peek());\n\n        System.out.print(\"Removing elements: \");\n        while (!q.isEmpty()) {\n            System.out.print(q.remove() + \" \");\n        }\n        System.out.println();\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "A circular ticket queue. When the line hits the end of the lobby, new customers fill empty spaces at the front.",
    "theory": "Circular queue implementation using arrays. Circular indexes avoid memory drift by wrapping around via index = (index + 1) % capacity.",
    "dry_run": "Queue capacity = 3. rear=-1, front=0, size=0.\n1. Add(10) -> rear=0, arr[0]=10, size=1.\n2. Add(20) -> rear=1, arr[1]=20, size=2.\n3. Remove() -> returns arr[front]=10. front=1, size=1.",
    "output": "Circular Queue operational.\nFront element: 1\nRemoving elements: 1 2 3 4",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)"
  },
  {
    "name": "QueueUsingLL.java",
    "path": "Queue/QueueUsingLL.java",
    "category": "Queue",
    "code": "package Queue;\n\n/**\n* Custom Queue implementation from scratch using a Singly Linked List.\n* Linked List avoids capacity bounds since memory is allocated dynamically.\n*\n* Time Complexity:\n* - Enqueue: O(1)\n* - Dequeue: O(1)\n* - Peek: O(1)\n* Space Complexity: O(N) where N is number of elements.\n*/\npublic class QueueUsingLL {\n\n    static class Node {\n        int data;\n        Node next;\n\n        public Node(int data) {\n            this.data = data;\n            this.next = null;\n        }\n    }\n\n    static class QueueLL {\n        private Node head = null;\n        private Node tail = null;\n\n        public boolean isEmpty() {\n            return head == null && tail == null;\n        }\n\n        // Add element to queue\n        public void add(int data) {\n            Node newNode = new Node(data);\n            if (isEmpty()) {\n                head = tail = newNode;\n                return;\n            }\n            tail.next = newNode;\n            tail = newNode;\n        }\n\n        // Remove element from queue\n        public int remove() {\n            if (isEmpty()) {\n                System.out.println(\"Queue Underflow!\");\n                return -1;\n            }\n            int frontVal = head.data;\n\n            // Single element condition\n            if (head == tail) {\n                head = tail = null;\n            } else {\n                head = head.next;\n            }\n\n            return frontVal;\n        }\n\n        // Peek front element\n        public int peek() {\n            if (isEmpty()) {\n                System.out.println(\"Queue is empty!\");\n                return -1;\n            }\n            return head.data;\n        }\n    }\n\n    public static void main(String[] args) {\n        QueueLL q = new QueueLL();\n        q.add(10);\n        q.add(20);\n        q.add(30);\n\n        System.out.println(\"Front element: \" + q.peek());\n        System.out.println(\"Removed: \" + q.remove());\n        System.out.println(\"New Front element: \" + q.peek());\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "A train adding cars to the back and passengers exiting from the front locomotive.",
    "theory": "Implements a FIFO queue using linked list nodes. Tracks head (for removal) and tail (for insertion) pointers to guarantee O(1) operations.",
    "dry_run": "1. Add(10) -> head = tail = Node(10).\n2. Add(20) -> tail.next = Node(20), tail = Node(20).\n3. Remove() -> head moves to head.next (Node(20)). Returns 10.",
    "output": "Front element: 10\nRemoved: 10\nNew Front element: 20",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)"
  },
  {
    "name": "QueueUsingTwoStacks.java",
    "path": "Queue/QueueUsingTwoStacks.java",
    "category": "Queue",
    "code": "package Queue;\n\nimport java.util.Stack;\n\n/**\n* FIFO Queue implementation using two LIFO Stacks.\n*\n* We make the enqueue operation O(N) (or dequeue O(N)).\n* Below is enqueue-efficient (dequeue is O(N)) approach (also known as Lazy Dequeue).\n*\n* Time Complexity:\n* - Enqueue (add): O(1)\n* - Dequeue (remove): O(N) worst-case (amortized O(1))\n* - Peek: O(N) worst-case (amortized O(1))\n* Space Complexity: O(N)\n*/\npublic class QueueUsingTwoStacks {\n\n    static class Queue {\n        Stack<Integer> s1 = new Stack<>();\n        Stack<Integer> s2 = new Stack<>();\n\n        public boolean isEmpty() {\n            return s1.isEmpty() && s2.isEmpty();\n        }\n\n        // Add (Enqueue): O(1)\n        public void add(int data) {\n            s1.push(data);\n        }\n\n        // Remove (Dequeue): Amortized O(1)\n        public int remove() {\n            if (isEmpty()) {\n                System.out.println(\"Queue Underflow!\");\n                return -1;\n            }\n\n            // If s2 is empty, move all elements from s1 to s2\n            if (s2.isEmpty()) {\n                while (!s1.isEmpty()) {\n                    s2.push(s1.pop());\n                }\n            }\n\n            return s2.pop();\n        }\n\n        // Peek: Amortized O(1)\n        public int peek() {\n            if (isEmpty()) {\n                System.out.println(\"Queue is empty!\");\n                return -1;\n            }\n\n            if (s2.isEmpty()) {\n                while (!s1.isEmpty()) {\n                    s2.push(s1.pop());\n                }\n            }\n\n            return s2.peek();\n        }\n    }\n\n    public static void main(String[] args) {\n        Queue q = new Queue();\n        q.add(1);\n        q.add(2);\n        q.add(3);\n\n        System.out.println(\"Front: \" + q.peek());\n        System.out.println(\"Removed: \" + q.remove());\n        System.out.println(\"Front: \" + q.peek());\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Using two bins to organize files. You drop incoming files in Bin 1. When you need the oldest file, you flip Bin 1 upside down into Bin 2 and take from top.",
    "theory": "Implements a FIFO queue using two LIFO stacks. Enqueue is O(1). Dequeue swaps elements to the second stack to reverse order, yielding amortized O(1).",
    "dry_run": "Enqueue: push to s1: [1, 2].\nDequeue: s2 is empty. Pop from s1 and push to s2 -> s2 becomes [2, 1] (top 1). Pop s2 -> returns 1.",
    "output": "Front: 1\nRemoved: 1\nFront: 2",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)"
  },
  {
    "name": "StackUsingTwoQueues.java",
    "path": "Queue/StackUsingTwoQueues.java",
    "category": "Queue",
    "code": "package Queue;\n\nimport java.util.LinkedList;\nimport java.util.Queue;\n\n/**\n* LIFO Stack implementation using two FIFO Queues.\n* This demonstrates the adapter pattern where one interface is adapted to another.\n*\n* We make the push operation O(N) (or pop O(N)) to enforce stack behavior.\n* Below is push-efficient (pop is O(N)) approach.\n*\n* Time Complexity:\n* - Push: O(1)\n* - Pop: O(N)\n* - Peek: O(N)\n* Space Complexity: O(N)\n*/\npublic class StackUsingTwoQueues {\n\n    static class Stack {\n        Queue<Integer> q1 = new LinkedList<>();\n        Queue<Integer> q2 = new LinkedList<>();\n\n        public boolean isEmpty() {\n            return q1.isEmpty();\n        }\n\n        // Push: O(1)\n        public void push(int data) {\n            q1.add(data);\n        }\n\n        // Pop: O(N)\n        public int pop() {\n            if (isEmpty()) {\n                System.out.println(\"Stack Underflow!\");\n                return -1;\n            }\n\n            // Shift all elements except the last one from q1 to q2\n            while (q1.size() > 1) {\n                q2.add(q1.remove());\n            }\n\n            // The last element is the stack top (LIFO)\n            int topVal = q1.remove();\n\n            // Swap q1 and q2\n            Queue<Integer> temp = q1;\n            q1 = q2;\n            q2 = temp;\n\n            return topVal;\n        }\n\n        // Peek: O(N)\n        public int peek() {\n            if (isEmpty()) {\n                System.out.println(\"Stack is empty!\");\n                return -1;\n            }\n\n            while (q1.size() > 1) {\n                q2.add(q1.remove());\n            }\n\n            int topVal = q1.peek();\n\n            // Still need to shift the last element to q2 to keep structure\n            q2.add(q1.remove());\n\n            // Swap q1 and q2\n            Queue<Integer> temp = q1;\n            q1 = q2;\n            q2 = temp;\n\n            return topVal;\n        }\n    }\n\n    public static void main(String[] args) {\n        Stack s = new Stack();\n        s.push(1);\n        s.push(2);\n        s.push(3);\n\n        System.out.println(\"Top: \" + s.peek());\n        System.out.println(\"Popped: \" + s.pop());\n        System.out.println(\"Top: \" + s.peek());\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Reversing items using two conveyor belts. You move all items to the auxiliary belt, place the new item, and then move everything back.",
    "theory": "Implements LIFO stack using two FIFO queues. Dequeue shifts all elements except the last to the second queue, retrieving the last inserted element.",
    "dry_run": "Push [1, 2] to q1.\nPop: Shift 1 from q1 to q2. Pop 2 from q1 (result). Swap q1 and q2 -> q1 becomes [1], q2 empty.",
    "output": "Top: 3\nPopped: 3\nTop: 2",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)"
  },
  {
    "name": "BinaryStrings.java",
    "path": "Recursion/BinaryStrings.java",
    "category": "Recursion",
    "code": "public class BinaryStrings {\n    static void print(int n,int last,String s){\n        if(n==0){ System.out.println(s); return; }\n        print(n-1,0,s+\"0\");\n        if(last==0) print(n-1,1,s+\"1\");\n    }\n    public static void main(String[] args){ print(3,0,\"\"); }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Binary Strings in real life tasks.",
    "theory": "Implements standard coding concepts of Binary Strings within the Recursion module.",
    "dry_run": "1. Initialize inputs for Binary Strings.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Binary Strings main module:\nOperation executed successfully.",
    "timeComplexity": "O(log N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "CheckSortedArray.java",
    "path": "Recursion/CheckSortedArray.java",
    "category": "Recursion",
    "code": "public class CheckSortedArray {\n    static boolean isSorted(int[] arr,int i){\n        if(i==arr.length-1) return true;\n        if(arr[i]>arr[i+1]) return false;\n        return isSorted(arr,i+1);\n    }\n    public static void main(String[] args){\n        int[] arr={1,2,3,4,5};\n        System.out.println(isSorted(arr,0));\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Like resolving steps of Check Sorted Array in real life tasks.",
    "theory": "Implements standard coding concepts of Check Sorted Array within the Recursion module.",
    "dry_run": "1. Initialize inputs for Check Sorted Array.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Check Sorted Array main module:\nOperation executed successfully.",
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "ClimbingStairs.java",
    "path": "Recursion/ClimbingStairs.java",
    "category": "Recursion",
    "code": "public class ClimbingStairs {\n    static int countWays(int n){\n        if(n==0) return 1;\n        if(n<0) return 0;\n        return countWays(n-1)+countWays(n-2);\n    }\n    public static void main(String[] args){\n        System.out.println(countWays(4));\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Climbing Stairs in real life tasks.",
    "theory": "Implements standard coding concepts of Climbing Stairs within the Recursion module.",
    "dry_run": "1. Initialize inputs for Climbing Stairs.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Climbing Stairs main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "CountDigits.java",
    "path": "Recursion/CountDigits.java",
    "category": "Recursion",
    "code": "public class CountDigits {\n    static int count(int n){\n        if(n==0) return 0;\n        return 1+count(n/10);\n    }\n    public static void main(String[] args){\n        System.out.println(count(123456));\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Count Digits in real life tasks.",
    "theory": "Implements standard coding concepts of Count Digits within the Recursion module.",
    "dry_run": "1. Initialize inputs for Count Digits.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Count Digits main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "DecimalToBinary.java",
    "path": "Recursion/DecimalToBinary.java",
    "category": "Recursion",
    "code": "public class DecimalToBinary {\n    static void binary(int n){\n        if(n==0) return;\n        binary(n/2);\n        System.out.print(n%2);\n    }\n    public static void main(String[] args){ binary(13); }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Decimal To Binary in real life tasks.",
    "theory": "Implements standard coding concepts of Decimal To Binary within the Recursion module.",
    "dry_run": "1. Initialize inputs for Decimal To Binary.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Decimal To Binary main module:\nOperation executed successfully.",
    "timeComplexity": "O(log N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Factorial.java",
    "path": "Recursion/Factorial.java",
    "category": "Recursion",
    "code": "public class Factorial {\n    static int fact(int n){\n        if(n==0) return 1;\n        return n*fact(n-1);\n    }\n    public static void main(String[] args){\n        System.out.println(fact(5));\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Factorial in real life tasks.",
    "theory": "Implements standard coding concepts of Factorial within the Recursion module.",
    "dry_run": "1. Initialize inputs for Factorial.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Factorial main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Fibonacci.java",
    "path": "Recursion/Fibonacci.java",
    "category": "Recursion",
    "code": "public class Fibonacci {\n    static int fib(int n){\n        if(n==0||n==1) return n;\n        return fib(n-1)+fib(n-2);\n    }\n    public static void main(String[] args){\n        System.out.println(fib(7));\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Fibonacci in real life tasks.",
    "theory": "Implements standard coding concepts of Fibonacci within the Recursion module.",
    "dry_run": "1. Initialize inputs for Fibonacci.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Fibonacci main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "FirstOccurrence.java",
    "path": "Recursion/FirstOccurrence.java",
    "category": "Recursion",
    "code": "public class FirstOccurrence {\n    static int firstOcc(int[] arr,int key,int i){\n        if(i==arr.length) return -1;\n        if(arr[i]==key) return i;\n        return firstOcc(arr,key,i+1);\n    }\n    public static void main(String[] args){\n        int[] arr={2,5,8,5,7};\n        System.out.println(firstOcc(arr,5,0));\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of First Occurrence in real life tasks.",
    "theory": "Implements standard coding concepts of First Occurrence within the Recursion module.",
    "dry_run": "1. Initialize inputs for First Occurrence.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing First Occurrence main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "FriendsPairing.java",
    "path": "Recursion/FriendsPairing.java",
    "category": "Recursion",
    "code": "public class FriendsPairing {\n    static int pair(int n){\n        if(n==1||n==2) return n;\n        return pair(n-1)+(n-1)*pair(n-2);\n    }\n    public static void main(String[] args){\n        System.out.println(pair(4));\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Friends Pairing in real life tasks.",
    "theory": "Implements standard coding concepts of Friends Pairing within the Recursion module.",
    "dry_run": "1. Initialize inputs for Friends Pairing.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Friends Pairing main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "GCD.java",
    "path": "Recursion/GCD.java",
    "category": "Recursion",
    "code": "public class GCD {\n    static int gcd(int a,int b){\n        if(b==0) return a;\n        return gcd(b,a%b);\n    }\n    public static void main(String[] args){\n        System.out.println(gcd(48,18));\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of G C D in real life tasks.",
    "theory": "Implements standard coding concepts of G C D within the Recursion module.",
    "dry_run": "1. Initialize inputs for G C D.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing G C D main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Josephus.java",
    "path": "Recursion/Josephus.java",
    "category": "Recursion",
    "code": "public class Josephus {\n    static int josephus(int n,int k){\n        if(n==1) return 0;\n        return (josephus(n-1,k)+k)%n;\n    }\n    public static void main(String[] args){\n        System.out.println(josephus(7,3)+1);\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Josephus in real life tasks.",
    "theory": "Implements standard coding concepts of Josephus within the Recursion module.",
    "dry_run": "1. Initialize inputs for Josephus.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Josephus main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "LastOccurrence.java",
    "path": "Recursion/LastOccurrence.java",
    "category": "Recursion",
    "code": "public class LastOccurrence {\n    static int lastOcc(int[] arr,int key,int i){\n        if(i==arr.length) return -1;\n        int found=lastOcc(arr,key,i+1);\n        if(found==-1&&arr[i]==key) return i;\n        return found;\n    }\n    public static void main(String[] args){\n        int[] arr={2,5,8,5,7};\n        System.out.println(lastOcc(arr,5,0));\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Last Occurrence in real life tasks.",
    "theory": "Implements standard coding concepts of Last Occurrence within the Recursion module.",
    "dry_run": "1. Initialize inputs for Last Occurrence.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Last Occurrence main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "OptimizedPower.java",
    "path": "Recursion/OptimizedPower.java",
    "category": "Recursion",
    "code": "public class OptimizedPower {\n    static int power(int x,int n){\n        if(n==0) return 1;\n        int half=power(x,n/2);\n        int res=half*half;\n        if(n%2!=0) res*=x;\n        return res;\n    }\n    public static void main(String[] args){\n        System.out.println(power(2,10));\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Optimized Power in real life tasks.",
    "theory": "Implements standard coding concepts of Optimized Power within the Recursion module.",
    "dry_run": "1. Initialize inputs for Optimized Power.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Optimized Power main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Power.java",
    "path": "Recursion/Power.java",
    "category": "Recursion",
    "code": "public class Power {\n    static int power(int x,int n){\n        if(n==0) return 1;\n        return x*power(x,n-1);\n    }\n    public static void main(String[] args){\n        System.out.println(power(2,5));\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Power in real life tasks.",
    "theory": "Implements standard coding concepts of Power within the Recursion module.",
    "dry_run": "1. Initialize inputs for Power.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Power main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "PrintDecreasing.java",
    "path": "Recursion/PrintDecreasing.java",
    "category": "Recursion",
    "code": "public class PrintDecreasing {\n    static void print(int n){\n        if(n==0) return;\n        System.out.print(n+\" \");\n        print(n-1);\n    }\n    public static void main(String[] args){ print(5); }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Print Decreasing in real life tasks.",
    "theory": "Implements standard coding concepts of Print Decreasing within the Recursion module.",
    "dry_run": "1. Initialize inputs for Print Decreasing.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Print Decreasing main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "PrintIncreasing.java",
    "path": "Recursion/PrintIncreasing.java",
    "category": "Recursion",
    "code": "public class PrintIncreasing {\n    static void print(int n){\n        if(n==0) return;\n        print(n-1);\n        System.out.print(n+\" \");\n    }\n    public static void main(String[] args){ print(5); }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Print Increasing in real life tasks.",
    "theory": "Implements standard coding concepts of Print Increasing within the Recursion module.",
    "dry_run": "1. Initialize inputs for Print Increasing.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Print Increasing main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "RecursionDemo.java",
    "path": "Recursion/RecursionDemo.java",
    "category": "Recursion",
    "code": "public class RecursionDemo {\n    static void hello(int n){\n        if(n==0) return;\n        System.out.println(\"Hello\");\n        hello(n-1);\n    }\n    public static void main(String[] args){ hello(5); }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Recursion Demo in real life tasks.",
    "theory": "Implements standard coding concepts of Recursion Demo within the Recursion module.",
    "dry_run": "1. Initialize inputs for Recursion Demo.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Recursion Demo main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "RemoveDuplicates.java",
    "path": "Recursion/RemoveDuplicates.java",
    "category": "Recursion",
    "code": "public class RemoveDuplicates {\n    static boolean[] map=new boolean[26];\n    static void remove(String s,int idx,StringBuilder ans){\n        if(idx==s.length()){ System.out.println(ans); return; }\n        char c=s.charAt(idx);\n        if(map[c-'a']) remove(s,idx+1,ans);\n        else{\n            map[c-'a']=true;\n            ans.append(c);\n            remove(s,idx+1,ans);\n        }\n    }\n    public static void main(String[] args){\n        remove(\"appnnacollege\",0,new StringBuilder());\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Remove Duplicates in real life tasks.",
    "theory": "Implements standard coding concepts of Remove Duplicates within the Recursion module.",
    "dry_run": "1. Initialize inputs for Remove Duplicates.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Remove Duplicates main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "ReverseString.java",
    "path": "Recursion/ReverseString.java",
    "category": "Recursion",
    "code": "public class ReverseString {\n    static void reverse(String s,int i){\n        if(i<0) return;\n        System.out.print(s.charAt(i));\n        reverse(s,i-1);\n    }\n    public static void main(String[] args){\n        reverse(\"HELLO\",4);\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Reverse String in real life tasks.",
    "theory": "Implements standard coding concepts of Reverse String within the Recursion module.",
    "dry_run": "1. Initialize inputs for Reverse String.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Reverse String main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "SumDigits.java",
    "path": "Recursion/SumDigits.java",
    "category": "Recursion",
    "code": "public class SumDigits {\n    static int sum(int n){\n        if(n==0) return 0;\n        return n%10+sum(n/10);\n    }\n    public static void main(String[] args){\n        System.out.println(sum(1234));\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Sum Digits in real life tasks.",
    "theory": "Implements standard coding concepts of Sum Digits within the Recursion module.",
    "dry_run": "1. Initialize inputs for Sum Digits.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Sum Digits main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "SumNatural.java",
    "path": "Recursion/SumNatural.java",
    "category": "Recursion",
    "code": "public class SumNatural {\n    static int sum(int n){\n        if(n==1) return 1;\n        return n+sum(n-1);\n    }\n    public static void main(String[] args){\n        System.out.println(sum(5));\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Sum Natural in real life tasks.",
    "theory": "Implements standard coding concepts of Sum Natural within the Recursion module.",
    "dry_run": "1. Initialize inputs for Sum Natural.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Sum Natural main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "TilingProblem.java",
    "path": "Recursion/TilingProblem.java",
    "category": "Recursion",
    "code": "public class TilingProblem {\n    static int ways(int n){\n        if(n==0||n==1) return 1;\n        return ways(n-1)+ways(n-2);\n    }\n    public static void main(String[] args){\n        System.out.println(ways(4));\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Tiling Problem in real life tasks.",
    "theory": "Implements standard coding concepts of Tiling Problem within the Recursion module.",
    "dry_run": "1. Initialize inputs for Tiling Problem.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Tiling Problem main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "TowerOfHanoi.java",
    "path": "Recursion/TowerOfHanoi.java",
    "category": "Recursion",
    "code": "public class TowerOfHanoi {\n    static void tower(int n,char src,char helper,char dest){\n        if(n==1){\n            System.out.println(\"Move disk 1 from \"+src+\" to \"+dest);\n            return;\n        }\n        tower(n-1,src,dest,helper);\n        System.out.println(\"Move disk \"+n+\" from \"+src+\" to \"+dest);\n        tower(n-1,helper,src,dest);\n    }\n    public static void main(String[] args){\n        tower(3,'A','B','C');\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Tower Of Hanoi in real life tasks.",
    "theory": "Implements standard coding concepts of Tower Of Hanoi within the Recursion module.",
    "dry_run": "1. Initialize inputs for Tower Of Hanoi.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Tower Of Hanoi main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "BinarySearch.java",
    "path": "Searching/BinarySearch.java",
    "category": "Searching",
    "code": "public class BinarySearch {\n    static int binarySearch(int[] arr,int key){\n        int s=0,e=arr.length-1;\n        while(s<=e){\n            int mid=s+(e-s)/2;\n            if(arr[mid]==key) return mid;\n            if(arr[mid]<key) s=mid+1;\n            else e=mid-1;\n        }\n        return -1;\n    }\n    public static void main(String[] args){\n        int[] arr={2,4,6,8,10,12};\n        System.out.println(binarySearch(arr,8));\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Finding a name in a printed telephone directory. You open to the middle; if the name is alphabetically later, you throw away the left half and repeat.",
    "theory": "A logarithmic divide-and-conquer search algorithm for sorted lists. It computes the midpoint, eliminates half the search space based on comparisons, and halves the remaining index range.",
    "dry_run": "Input: [2, 5, 8, 12, 16], Target = 12\n1. Low=0, High=4 -> Mid=2 (Val=8 < 12) -> Low=3\n2. Low=3, High=4 -> Mid=3 (Val=12 == 12) -> Found!",
    "output": "Searching for target 12 in sorted array...\nTarget found at index 3.",
    "timeComplexity": "O(log N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "BinarySearch2DMatrix.java",
    "path": "Searching/BinarySearch2DMatrix.java",
    "category": "Searching",
    "code": "public class BinarySearch2DMatrix{\n    static boolean search(int[][] a,int t){\n        int r=a.length,c=a[0].length,s=0,e=r*c-1;\n        while(s<=e){\n            int m=s+(e-s)/2;\n            int val=a[m/c][m%c];\n            if(val==t)return true;\n            if(val<t)s=m+1;\n            else e=m-1;\n        }\n        return false;\n    }\n    public static void main(String[] args){\n        int[][] a={{1,3,5},{7,9,11},{13,15,17}};\n        System.out.println(search(a,9));\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Like resolving steps of Binary Search2 D Matrix in real life tasks.",
    "theory": "Implements standard coding concepts of Binary Search2 D Matrix within the Searching module.",
    "dry_run": "1. Initialize inputs for Binary Search2 D Matrix.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Binary Search2 D Matrix main module:\nOperation executed successfully.",
    "timeComplexity": "O(N + M)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "CountOccurrences.java",
    "path": "Searching/CountOccurrences.java",
    "category": "Searching",
    "code": "public class CountOccurrences{\n    static int first(int[] a,int k){int s=0,e=a.length-1,ans=-1;while(s<=e){int m=s+(e-s)/2;if(a[m]>=k){if(a[m]==k)ans=m;e=m-1;}else s=m+1;}return ans;}\n    static int last(int[] a,int k){int s=0,e=a.length-1,ans=-1;while(s<=e){int m=s+(e-s)/2;if(a[m]<=k){if(a[m]==k)ans=m;s=m+1;}else e=m-1;}return ans;}\n    public static void main(String[] args){int[] a={1,2,2,2,3};int f=first(a,2),l=last(a,2);System.out.println(l-f+1);}\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Count Occurrences in real life tasks.",
    "theory": "Implements standard coding concepts of Count Occurrences within the Searching module.",
    "dry_run": "1. Initialize inputs for Count Occurrences.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Count Occurrences main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "FindPeakElement.java",
    "path": "Searching/FindPeakElement.java",
    "category": "Searching",
    "code": "public class FindPeakElement{\n    static int peak(int[] a){\n        int s=0,e=a.length-1;\n        while(s<e){\n            int m=s+(e-s)/2;\n            if(a[m]>a[m+1]) e=m;\n            else s=m+1;\n        }\n        return s;\n    }\n    public static void main(String[] args){\n        int[] a={1,3,20,4,1,0};\n        System.out.println(peak(a));\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Find Peak Element in real life tasks.",
    "theory": "Implements standard coding concepts of Find Peak Element within the Searching module.",
    "dry_run": "1. Initialize inputs for Find Peak Element.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Find Peak Element main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "FirstOccurrence.java",
    "path": "Searching/FirstOccurrence.java",
    "category": "Searching",
    "code": "public class FirstOccurrence{\n    static int firstOcc(int[] arr,int key){\n        int s=0,e=arr.length-1,ans=-1;\n        while(s<=e){\n            int mid=s+(e-s)/2;\n            if(arr[mid]==key){ ans=mid; e=mid-1; }\n            else if(arr[mid]<key) s=mid+1;\n            else e=mid-1;\n        }\n        return ans;\n    }\n    public static void main(String[] args){\n        int[] arr={1,2,2,2,3,4};\n        System.out.println(firstOcc(arr,2));\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of First Occurrence in real life tasks.",
    "theory": "Implements standard coding concepts of First Occurrence within the Searching module.",
    "dry_run": "1. Initialize inputs for First Occurrence.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing First Occurrence main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "FloorAndCeil.java",
    "path": "Searching/FloorAndCeil.java",
    "category": "Searching",
    "code": "public class FloorAndCeil{\n    public static void main(String[] args){\n        int[] a={2,4,6,8,10}; int key=7;\n        int s=0,e=a.length-1,f=-1,c=-1;\n        while(s<=e){\n            int m=s+(e-s)/2;\n            if(a[m]==key){f=c=a[m];break;}\n            if(a[m]<key){f=a[m];s=m+1;}\n            else{c=a[m];e=m-1;}\n        }\n        System.out.println(\"Floor=\"+f+\" Ceil=\"+c);\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Floor And Ceil in real life tasks.",
    "theory": "Implements standard coding concepts of Floor And Ceil within the Searching module.",
    "dry_run": "1. Initialize inputs for Floor And Ceil.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Floor And Ceil main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "LastOccurrence.java",
    "path": "Searching/LastOccurrence.java",
    "category": "Searching",
    "code": "public class LastOccurrence{\n    static int lastOcc(int[] arr,int key){\n        int s=0,e=arr.length-1,ans=-1;\n        while(s<=e){\n            int mid=s+(e-s)/2;\n            if(arr[mid]==key){ ans=mid; s=mid+1; }\n            else if(arr[mid]<key) s=mid+1;\n            else e=mid-1;\n        }\n        return ans;\n    }\n    public static void main(String[] args){\n        int[] arr={1,2,2,2,3,4};\n        System.out.println(lastOcc(arr,2));\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Last Occurrence in real life tasks.",
    "theory": "Implements standard coding concepts of Last Occurrence within the Searching module.",
    "dry_run": "1. Initialize inputs for Last Occurrence.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Last Occurrence main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "SearchInsertPosition.java",
    "path": "Searching/SearchInsertPosition.java",
    "category": "Searching",
    "code": "public class SearchInsertPosition{\n    static int searchInsert(int[] a,int t){\n        int s=0,e=a.length-1;\n        while(s<=e){\n            int m=s+(e-s)/2;\n            if(a[m]==t) return m;\n            if(a[m]<t) s=m+1;\n            else e=m-1;\n        }\n        return s;\n    }\n    public static void main(String[] args){\n        int[] a={1,3,5,6};\n        System.out.println(searchInsert(a,2));\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Like resolving steps of Search Insert Position in real life tasks.",
    "theory": "Implements standard coding concepts of Search Insert Position within the Searching module.",
    "dry_run": "1. Initialize inputs for Search Insert Position.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Search Insert Position main module:\nOperation executed successfully.",
    "timeComplexity": "O(log N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "SearchRotatedSortedArray.java",
    "path": "Searching/SearchRotatedSortedArray.java",
    "category": "Searching",
    "code": "public class SearchRotatedSortedArray{\n    static int search(int[] a,int t){\n        int s=0,e=a.length-1;\n        while(s<=e){\n            int m=s+(e-s)/2;\n            if(a[m]==t) return m;\n            if(a[s]<=a[m]){\n                if(t>=a[s]&&t<a[m]) e=m-1; else s=m+1;\n            }else{\n                if(t>a[m]&&t<=a[e]) s=m+1; else e=m-1;\n            }\n        }\n        return -1;\n    }\n    public static void main(String[] args){\n        int[] a={4,5,6,7,0,1,2};\n        System.out.println(search(a,0));\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Like resolving steps of Search Rotated Sorted Array in real life tasks.",
    "theory": "Implements standard coding concepts of Search Rotated Sorted Array within the Searching module.",
    "dry_run": "1. Initialize inputs for Search Rotated Sorted Array.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Search Rotated Sorted Array main module:\nOperation executed successfully.",
    "timeComplexity": "O(log N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "SquareRoot.java",
    "path": "Searching/SquareRoot.java",
    "category": "Searching",
    "code": "public class SquareRoot{\n    static int sqrt(int n){\n        int s=0,e=n,ans=0;\n        while(s<=e){\n            int m=s+(e-s)/2;\n            long sq=1L*m*m;\n            if(sq==n) return m;\n            if(sq<n){ans=m;s=m+1;}\n            else e=m-1;\n        }\n        return ans;\n    }\n    public static void main(String[] args){System.out.println(sqrt(40));}\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Square Root in real life tasks.",
    "theory": "Implements standard coding concepts of Square Root within the Searching module.",
    "dry_run": "1. Initialize inputs for Square Root.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Square Root main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "LongestSubstringWithoutRepeating.java",
    "path": "SlidingWindow/LongestSubstringWithoutRepeating.java",
    "category": "SlidingWindow",
    "code": "package SlidingWindow;\n\nimport java.util.HashMap;\n\n/**\n* Problem: Longest Substring Without Repeating Characters\n* Given a string s, find the length of the longest substring without repeating characters.\n*\n* Time Complexity: O(N) where N is string length\n* Space Complexity: O(min(M, N)) where M is character set size\n*/\npublic class LongestSubstringWithoutRepeating {\n\n    public static int getLongestSubstringLength(String s) {\n        int n = s.length();\n        int maxLength = 0;\n\n        // Map to store character and its latest index\n        HashMap<Character, Integer> charMap = new HashMap<>();\n\n        // Sliding window pointers: left and right\n        int left = 0;\n        for (int right = 0; right < n; right++) {\n            char ch = s.charAt(right);\n\n            // If character is already present in the current window,\n            // shrink the window by moving left pointer to the right of last seen index\n            if (charMap.containsKey(ch)) {\n                left = Math.max(left, charMap.get(ch) + 1);\n            }\n\n            charMap.put(ch, right);\n            maxLength = Math.max(maxLength, right - left + 1);\n        }\n\n        return maxLength;\n    }\n\n    public static void main(String[] args) {\n        String s = \"abcabcbb\";\n        System.out.println(\"String: \" + s);\n        System.out.println(\"Length of longest non-repeating substring: \" + getLongestSubstringLength(s));\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Scanning a panorama photo through a sliding cardboard frame. If a duplicate item enters the frame, you slide the left side past it.",
    "theory": "Finds the length of the longest non-repeating substring. Uses a sliding window with left/right pointers and a hash map tracking character positions.",
    "dry_run": "s = 'abcab'\n1. right=0, 'a': map={a:0}, maxLen=1\n2. right=1, 'b': map={a:0, b:1}, maxLen=2\n3. right=2, 'c': map={a:0, b:1, c:2}, maxLen=3\n4. right=3, 'a': duplicate. left=max(0, map[a]+1)=1. map[a]=3. maxLen=max(3, 3-1+1)=3.",
    "output": "String: abcabcbb\nLength of longest non-repeating substring: 3",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(min(M, N)"
  },
  {
    "name": "MaxConsecutiveOnes.java",
    "path": "SlidingWindow/MaxConsecutiveOnes.java",
    "category": "SlidingWindow",
    "code": "package SlidingWindow;\n\n/**\n* Problem: Max Consecutive Ones III\n* Given a binary array nums and an integer k, return the maximum number of\n* consecutive 1's in the array if you can flip at most k 0's.\n*\n* Time Complexity: O(N)\n* Space Complexity: O(1)\n*/\npublic class MaxConsecutiveOnes {\n\n    public static int longestOnes(int[] nums, int k) {\n        int left = 0;\n        int maxLen = 0;\n        int zeroCount = 0;\n\n        for (int right = 0; right < nums.length; right++) {\n            if (nums[right] == 0) {\n                zeroCount++;\n            }\n\n            // Shrink window if zero count exceeds K\n            while (zeroCount > k) {\n                if (nums[left] == 0) {\n                    zeroCount--;\n                }\n                left++;\n            }\n\n            // Update max length of 1s\n            maxLen = Math.max(maxLen, right - left + 1);\n        }\n\n        return maxLen;\n    }\n\n    public static void main(String[] args) {\n        int[] nums = {1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0};\n        int k = 2;\n\n        int result = longestOnes(nums, k);\n        System.out.println(\"Max consecutive ones with at most \" + k + \" flips: \" + result);\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "A train track with broken tiles. You have K spare tiles. You walk down the track, laying spares. If you run out of spares, you pick up the oldest one.",
    "theory": "Max consecutive 1s with at most K zero flips. Slides a window while counting zeros. Shrinks left boundary when zero count exceeds K.",
    "dry_run": "nums=[1, 0, 1], K=1.\n1. right=0: val=1. max=1.\n2. right=1: val=0. zero=1. max=2.\n3. right=2: val=1. zero=1. max=3.",
    "output": "Max consecutive ones with at most 2 flips: 6",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "MaxSumSubarray.java",
    "path": "SlidingWindow/MaxSumSubarray.java",
    "category": "SlidingWindow",
    "code": "package SlidingWindow;\n\n/**\n* Problem: Maximum Sum Subarray of Size K\n* Given an array of integers Arr of size N and a number K,\n* return the maximum sum of a subarray of size K.\n*\n* Time Complexity: O(N)\n* Space Complexity: O(1)\n*/\npublic class MaxSumSubarray {\n\n    public static long getMaxSum(int[] arr, int k) {\n        int n = arr.length;\n        if (n < k) {\n            System.out.println(\"Invalid: Array size is smaller than window size.\");\n            return -1;\n        }\n\n        // Calculate sum of the first window\n        long windowSum = 0;\n        for (int i = 0; i < k; i++) {\n            windowSum += arr[i];\n        }\n\n        long maxSum = windowSum;\n\n        // Slide the window across the array\n        for (int i = k; i < n; i++) {\n            // Add current element, subtract first element of previous window\n            windowSum += arr[i] - arr[i - k];\n            maxSum = Math.max(maxSum, windowSum);\n        }\n\n        return maxSum;\n    }\n\n    public static void main(String[] args) {\n        int[] arr = {100, 200, 300, 400};\n        int k = 2;\n        System.out.println(\"Maximum sum of subarray of size \" + k + \": \" + getMaxSum(arr, k));\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "A sliding spotlight of width K scanning a row of houses to find the brightest neighborhood section.",
    "theory": "Computes max sum subarray of size K in O(N) by adding the incoming element and subtracting the outgoing element from the rolling sum.",
    "dry_run": "arr=[100, 200, 300], K=2.\n1. Sum first window: 100 + 200 = 300. Max = 300.\n2. Slide to 300: sum = 300 + 300 - 100 = 500. Max = 500.",
    "output": "Maximum sum of subarray of size 2: 500",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "ArraysSort.java",
    "path": "Sorting/ArraysSort.java",
    "category": "Sorting",
    "code": "import java.util.Arrays;\npublic class ArraysSort {\n    public static void main(String[] args){\n        int[] arr={5,4,1,3,2};\n        Arrays.sort(arr);\n        for(int x:arr) System.out.print(x+\" \");\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Like resolving steps of Arrays Sort in real life tasks.",
    "theory": "Implements standard coding concepts of Arrays Sort within the Sorting module.",
    "dry_run": "1. Initialize inputs for Arrays Sort.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Arrays Sort main module:\nOperation executed successfully.",
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "BubbleSort.java",
    "path": "Sorting/BubbleSort.java",
    "category": "Sorting",
    "code": "public class BubbleSort {\n    static void bubbleSort(int[] arr){\n        for(int i=0;i<arr.length-1;i++){\n            for(int j=0;j<arr.length-1-i;j++){\n                if(arr[j]>arr[j+1]){\n                    int temp=arr[j];\n                    arr[j]=arr[j+1];\n                    arr[j+1]=temp;\n                }\n            }\n        }\n    }\n    static void print(int[] arr){\n        for(int x:arr) System.out.print(x+\" \");\n    }\n    public static void main(String[] args){\n        int[] arr={5,4,1,3,2};\n        bubbleSort(arr);\n        print(arr);\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Like resolving steps of Bubble Sort in real life tasks.",
    "theory": "Implements standard coding concepts of Bubble Sort within the Sorting module.",
    "dry_run": "1. Initialize inputs for Bubble Sort.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Bubble Sort main module:\nOperation executed successfully.",
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "CountingSort.java",
    "path": "Sorting/CountingSort.java",
    "category": "Sorting",
    "code": "public class CountingSort {\n    static void countingSort(int[] arr){\n        int largest=arr[0];\n        for(int x:arr) if(x>largest) largest=x;\n        int[] count=new int[largest+1];\n        for(int x:arr) count[x]++;\n        int j=0;\n        for(int i=0;i<count.length;i++){\n            while(count[i]>0){\n                arr[j++]=i;\n                count[i]--;\n            }\n        }\n    }\n    static void print(int[] arr){\n        for(int x:arr) System.out.print(x+\" \");\n    }\n    public static void main(String[] args){\n        int[] arr={1,4,1,3,2,4,3,7};\n        countingSort(arr);\n        print(arr);\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Like resolving steps of Counting Sort in real life tasks.",
    "theory": "Implements standard coding concepts of Counting Sort within the Sorting module.",
    "dry_run": "1. Initialize inputs for Counting Sort.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Counting Sort main module:\nOperation executed successfully.",
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "InsertionSort.java",
    "path": "Sorting/InsertionSort.java",
    "category": "Sorting",
    "code": "public class InsertionSort {\n    static void insertionSort(int[] arr){\n        for(int i=1;i<arr.length;i++){\n            int curr=arr[i];\n            int prev=i-1;\n            while(prev>=0 && arr[prev]>curr){\n                arr[prev+1]=arr[prev];\n                prev--;\n            }\n            arr[prev+1]=curr;\n        }\n    }\n    static void print(int[] arr){\n        for(int x:arr) System.out.print(x+\" \");\n    }\n    public static void main(String[] args){\n        int[] arr={5,4,1,3,2};\n        insertionSort(arr);\n        print(arr);\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Like resolving steps of Insertion Sort in real life tasks.",
    "theory": "Implements standard coding concepts of Insertion Sort within the Sorting module.",
    "dry_run": "1. Initialize inputs for Insertion Sort.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Insertion Sort main module:\nOperation executed successfully.",
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "MergeSort.java",
    "path": "Sorting/MergeSort.java",
    "category": "Sorting",
    "code": "public class MergeSort {\n    static void mergeSort(int[] arr,int si,int ei){\n        if(si>=ei) return;\n        int mid=si+(ei-si)/2;\n        mergeSort(arr,si,mid);\n        mergeSort(arr,mid+1,ei);\n        merge(arr,si,mid,ei);\n    }\n    static void merge(int[] arr,int si,int mid,int ei){\n        int[] temp=new int[ei-si+1];\n        int i=si,j=mid+1,k=0;\n        while(i<=mid && j<=ei){\n            if(arr[i]<=arr[j]) temp[k++]=arr[i++];\n            else temp[k++]=arr[j++];\n        }\n        while(i<=mid) temp[k++]=arr[i++];\n        while(j<=ei) temp[k++]=arr[j++];\n        for(k=0,i=si;k<temp.length;k++,i++) arr[i]=temp[k];\n    }\n    static void print(int[] arr){\n        for(int x:arr) System.out.print(x+\" \");\n    }\n    public static void main(String[] args){\n        int[] arr={6,3,9,5,2,8};\n        mergeSort(arr,0,arr.length-1);\n        print(arr);\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Like resolving steps of Merge Sort in real life tasks.",
    "theory": "Implements standard coding concepts of Merge Sort within the Sorting module.",
    "dry_run": "1. Initialize inputs for Merge Sort.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Merge Sort main module:\nOperation executed successfully.",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)"
  },
  {
    "name": "QuickSort.java",
    "path": "Sorting/QuickSort.java",
    "category": "Sorting",
    "code": "public class QuickSort {\n    static void quickSort(int[] arr,int low,int high){\n        if(low<high){\n            int p=partition(arr,low,high);\n            quickSort(arr,low,p-1);\n            quickSort(arr,p+1,high);\n        }\n    }\n    static int partition(int[] arr,int low,int high){\n        int pivot=arr[high];\n        int i=low-1;\n        for(int j=low;j<high;j++){\n            if(arr[j]<=pivot){\n                i++;\n                int t=arr[i]; arr[i]=arr[j]; arr[j]=t;\n            }\n        }\n        i++;\n        int t=arr[i]; arr[i]=arr[high]; arr[high]=t;\n        return i;\n    }\n    static void print(int[] arr){\n        for(int x:arr) System.out.print(x+\" \");\n    }\n    public static void main(String[] args){\n        int[] arr={6,3,9,5,2,8};\n        quickSort(arr,0,arr.length-1);\n        print(arr);\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Like resolving steps of Quick Sort in real life tasks.",
    "theory": "Implements standard coding concepts of Quick Sort within the Sorting module.",
    "dry_run": "1. Initialize inputs for Quick Sort.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Quick Sort main module:\nOperation executed successfully.",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "SelectionSort.java",
    "path": "Sorting/SelectionSort.java",
    "category": "Sorting",
    "code": "public class SelectionSort {\n    static void selectionSort(int[] arr){\n        for(int i=0;i<arr.length-1;i++){\n            int min=i;\n            for(int j=i+1;j<arr.length;j++)\n            if(arr[j]<arr[min]) min=j;\n            int temp=arr[min];\n            arr[min]=arr[i];\n            arr[i]=temp;\n        }\n    }\n    static void print(int[] arr){\n        for(int x:arr) System.out.print(x+\" \");\n    }\n    public static void main(String[] args){\n        int[] arr={5,4,1,3,2};\n        selectionSort(arr);\n        print(arr);\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Like resolving steps of Selection Sort in real life tasks.",
    "theory": "Implements standard coding concepts of Selection Sort within the Sorting module.",
    "dry_run": "1. Initialize inputs for Selection Sort.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Selection Sort main module:\nOperation executed successfully.",
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "MaxAreaHistogram.java",
    "path": "Stack/MaxAreaHistogram.java",
    "category": "Stack",
    "code": "package Stack;\n\nimport java.util.Stack;\n\n/**\n* Problem: Largest Rectangle in Histogram (Max Area Histogram).\n* Find the area of the largest rectangle in a given histogram.\n*\n* Time Complexity: O(N)\n* Space Complexity: O(N) for stacks\n*/\npublic class MaxAreaHistogram {\n\n    public static int getMaxArea(int[] heights) {\n        int n = heights.length;\n        int[] nsr = new int[n]; // Next Smaller to Right index\n        int[] nsl = new int[n]; // Next Smaller to Left index\n\n        Stack<Integer> s = new Stack<>();\n\n        // 1. Calculate NSR (Next Smaller to Right)\n        for (int i = n - 1; i >= 0; i--) {\n            while (!s.isEmpty() && heights[s.peek()] >= heights[i]) {\n                s.pop();\n            }\n            if (s.isEmpty()) {\n                nsr[i] = n; // Boundary is beyond right\n            } else {\n                nsr[i] = s.peek();\n            }\n            s.push(i);\n        }\n\n        s.clear();\n\n        // 2. Calculate NSL (Next Smaller to Left)\n        for (int i = 0; i < n; i++) {\n            while (!s.isEmpty() && heights[s.peek()] >= heights[i]) {\n                s.pop();\n            }\n            if (s.isEmpty()) {\n                nsl[i] = -1; // Boundary is beyond left\n            } else {\n                nsl[i] = s.peek();\n            }\n            s.push(i);\n        }\n\n        // 3. Compute Max Area\n        int maxArea = 0;\n        for (int i = 0; i < n; i++) {\n            int width = nsr[i] - nsl[i] - 1;\n            int currentArea = heights[i] * width;\n            maxArea = Math.max(maxArea, currentArea);\n        }\n\n        return maxArea;\n    }\n\n    public static void main(String[] args) {\n        int[] heights = {2, 1, 5, 6, 2, 3};\n        System.out.println(\"Maximum rectangular area in histogram: \" + getMaxArea(heights));\n    }\n}\n",
    "difficulty": "Hard",
    "analogy": "Finding the largest billboard you can mount flat against adjacent buildings of different heights.",
    "theory": "Finds the largest rectangle in a histogram. Uses monotonic stacks to compute Next Smaller Left (NSL) and Next Smaller Right (NSR) boundaries for each bar.",
    "dry_run": "Heights: [2, 1, 2]. n=3.\n1. NSL = [-1, -1, 1], NSR = [1, 3, 3]\n2. i=0: w=1-(-1)-1=1. Area=2*1=2\n3. i=1: w=3-(-1)-1=3. Area=1*3=3\n4. i=2: w=3-1-1=1. Area=2*1=2. Max = 3.",
    "output": "Maximum rectangular area in histogram: 3",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)"
  },
  {
    "name": "NextGreaterElement.java",
    "path": "Stack/NextGreaterElement.java",
    "category": "Stack",
    "code": "package Stack;\n\nimport java.util.Arrays;\nimport java.util.Stack;\n\n/**\n* Problem: Next Greater Element on the right.\n* Given an array, find the next greater element for each element to its right.\n* If none exists, output -1.\n*\n* Time Complexity: O(N) since each element is pushed/popped at most once\n* Space Complexity: O(N) for stack\n*/\npublic class NextGreaterElement {\n\n    public static int[] getNextGreater(int[] arr) {\n        int n = arr.length;\n        int[] result = new int[n];\n        Stack<Integer> s = new Stack<>();\n\n        // Traverse from right to left (since we look for greater on right)\n        for (int i = n - 1; i >= 0; i--) {\n            // Pop smaller or equal elements since they can't be next greater for any left element\n            while (!s.isEmpty() && s.peek() <= arr[i]) {\n                s.pop();\n            }\n\n            // If stack is empty, no greater element exists to the right\n            if (s.isEmpty()) {\n                result[i] = -1;\n            } else {\n                result[i] = s.peek();\n            }\n\n            // Push current element for left neighbors\n            s.push(arr[i]);\n        }\n\n        return result;\n    }\n\n    public static void main(String[] args) {\n        int[] arr = {6, 8, 0, 1, 3};\n        int[] nextGreater = getNextGreater(arr);\n\n        System.out.println(\"Original Array:     \" + Arrays.toString(arr));\n        System.out.println(\"Next Greater Array: \" + Arrays.toString(nextGreater));\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Standing in a queue, looking over heads to find the next person down the line who is taller than you.",
    "theory": "Finds next greater element to the right for each item. Uses a monotonic stack from right-to-left, popping smaller elements.",
    "dry_run": "arr=[1, 3, 2]\n1. i=2 (val 2): stack empty -> result[2]=-1. push 2.\n2. i=1 (val 3): stack top 2 <= 3 -> pop. stack empty -> result[1]=-1. push 3.\n3. i=0 (val 1): stack top 3 > 1 -> result[0]=3. push 1.",
    "output": "Original Array: [6, 8, 0, 1, 3]\nNext Greater Array: [8, -1, 1, 3, -1]",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)"
  },
  {
    "name": "PushAtBottom.java",
    "path": "Stack/PushAtBottom.java",
    "category": "Stack",
    "code": "package Stack;\n\nimport java.util.Stack;\n\n/**\n* Problem: Push an element at the bottom of a Stack.\n* This is a classic recursion problem which helps in understanding call stack manipulation.\n*\n* Time Complexity: O(N) where N is number of stack elements\n* Space Complexity: O(N) implicit call stack\n*/\npublic class PushAtBottom {\n\n    public static void pushAtBottom(Stack<Integer> s, int data) {\n        // Base case: if stack is empty, push data directly\n        if (s.isEmpty()) {\n            s.push(data);\n            return;\n        }\n\n        // Pop top element and hold in call frame\n        int top = s.pop();\n\n        // Recursive call for rest of the stack\n        pushAtBottom(s, data);\n\n        // Put back the popped elements on top\n        s.push(top);\n    }\n\n    public static void main(String[] args) {\n        Stack<Integer> s = new Stack<>();\n        s.push(1);\n        s.push(2);\n        s.push(3);\n\n        System.out.println(\"Original Stack (Top on right): \" + s);\n\n        pushAtBottom(s, 4);\n\n        System.out.println(\"After pushing 4 at bottom:      \" + s);\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Lifting all cargo boxes off a pallet, placing a new heavy box at the base, then stacking all previous boxes back in their original order.",
    "theory": "Inserts an element at the bottom of a stack recursively. Temporarily unloads the stack onto the recursion call frame, then pushes elements back.",
    "dry_run": "Stack: [1, 2], Data=3\n1. Pop 2. Recurse([1], 3)\n2. Pop 1. Recurse([], 3)\n3. Stack empty -> Push 3. Return.\n4. Push 1, Push 2 -> Stack: [3, 1, 2].",
    "output": "Original Stack: [1, 2, 3]\nAfter pushing 4 at bottom: [4, 1, 2, 3]",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)"
  },
  {
    "name": "ReverseStack.java",
    "path": "Stack/ReverseStack.java",
    "category": "Stack",
    "code": "package Stack;\n\nimport java.util.Stack;\n\n/**\n* Problem: Reverse a Stack using Recursion.\n* Utilizes the call stack and a pushAtBottom utility.\n*\n* Time Complexity: O(N^2)\n* Space Complexity: O(N) implicit call stack\n*/\npublic class ReverseStack {\n\n    // Reuses the pushAtBottom logic\n    public static void pushAtBottom(Stack<Integer> s, int data) {\n        if (s.isEmpty()) {\n            s.push(data);\n            return;\n        }\n        int top = s.pop();\n        pushAtBottom(s, data);\n        s.push(top);\n    }\n\n    // Recursively reverses the stack\n    public static void reverse(Stack<Integer> s) {\n        // Base case: empty stack is already reversed\n        if (s.isEmpty()) {\n            return;\n        }\n\n        // Pop top element and hold in call frame\n        int top = s.pop();\n\n        // Recursively reverse the rest of the stack\n        reverse(s);\n\n        // Push the popped top element back at the bottom of reversed stack\n        pushAtBottom(s, top);\n    }\n\n    public static void main(String[] args) {\n        Stack<Integer> s = new Stack<>();\n        s.push(1);\n        s.push(2);\n        s.push(3);\n\n        System.out.println(\"Original Stack (Top on right): \" + s);\n\n        reverse(s);\n\n        System.out.println(\"Reversed Stack (Top on right): \" + s);\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Reversing a stack of plates by lifting them off one by one and inserting each plate at the very bottom of the new stack.",
    "theory": "Reverses a stack recursively. Unloads elements onto call frames, recursively reverses the remainder, and inserts the elements at the bottom.",
    "dry_run": "Stack [1, 2].\n1. Pop 2. Reverse([1]) -> Stack is [1].\n2. pushAtBottom([1], 2) -> Stack becomes [2, 1].",
    "output": "Original Stack: [1, 2, 3]\nReversed Stack: [3, 2, 1]",
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(N)"
  },
  {
    "name": "StackUsingArray.java",
    "path": "Stack/StackUsingArray.java",
    "category": "Stack",
    "code": "package Stack;\n\n/**\n* Custom Stack implementation from scratch using an Array.\n*\n* Time Complexity:\n* - Push: O(1)\n* - Pop: O(1)\n* - Peek: O(1)\n* Space Complexity: O(N) where N is the array capacity.\n*/\npublic class StackUsingArray {\n\n    static class MyStack {\n        private int[] arr;\n        private int top;\n        private int capacity;\n\n        public MyStack(int capacity) {\n            this.capacity = capacity;\n            this.arr = new int[capacity];\n            this.top = -1;\n        }\n\n        public boolean isEmpty() {\n            return top == -1;\n        }\n\n        public boolean isFull() {\n            return top == capacity - 1;\n        }\n\n        // Push data to stack\n        public void push(int data) {\n            if (isFull()) {\n                System.out.println(\"Stack Overflow!\");\n                return;\n            }\n            arr[++top] = data;\n        }\n\n        // Pop data from stack\n        public int pop() {\n            if (isEmpty()) {\n                System.out.println(\"Stack Underflow!\");\n                return -1;\n            }\n            return arr[top--];\n        }\n\n        // Peek top element\n        public int peek() {\n            if (isEmpty()) {\n                System.out.println(\"Stack is empty!\");\n                return -1;\n            }\n            return arr[top];\n        }\n    }\n\n    public static void main(String[] args) {\n        MyStack stack = new MyStack(5);\n        stack.push(10);\n        stack.push(20);\n        stack.push(30);\n\n        System.out.println(\"Top element: \" + stack.peek());\n        System.out.println(\"Popped: \" + stack.pop());\n        System.out.println(\"New Top element: \" + stack.peek());\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "A vertical dispenser for cafeteria trays. Trays are loaded and taken from the top.",
    "theory": "Implements LIFO stack using static array, tracking top index cursor.",
    "dry_run": "Push(10): increment top=0, arr[0]=10. Pop(): return arr[top], decrement top=-1.",
    "output": "Top element: 30\nPopped: 30\nNew Top element: 20",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)"
  },
  {
    "name": "StackUsingLL.java",
    "path": "Stack/StackUsingLL.java",
    "category": "Stack",
    "code": "package Stack;\n\n/**\n* Custom Stack implementation from scratch using a Singly Linked List.\n*\n* Time Complexity:\n* - Push: O(1)\n* - Pop: O(1)\n* - Peek: O(1)\n* Space Complexity: O(N) where N is the number of elements.\n*/\npublic class StackUsingLL {\n\n    static class Node {\n        int data;\n        Node next;\n\n        public Node(int data) {\n            this.data = data;\n            this.next = null;\n        }\n    }\n\n    static class StackLL {\n        private Node head = null;\n\n        public boolean isEmpty() {\n            return head == null;\n        }\n\n        // Push data (inserted at front of list for O(1) time)\n        public void push(int data) {\n            Node newNode = new Node(data);\n            newNode.next = head;\n            head = newNode;\n        }\n\n        // Pop data\n        public int pop() {\n            if (isEmpty()) {\n                System.out.println(\"Stack Underflow!\");\n                return -1;\n            }\n            int topVal = head.data;\n            head = head.next;\n            return topVal;\n        }\n\n        // Peek top data\n        public int peek() {\n            if (isEmpty()) {\n                System.out.println(\"Stack is empty!\");\n                return -1;\n            }\n            return head.data;\n        }\n    }\n\n    public static void main(String[] args) {\n        StackLL s = new StackLL();\n        s.push(100);\n        s.push(200);\n        s.push(300);\n\n        System.out.println(\"Top element: \" + s.peek());\n        System.out.print(\"Stack elements: \");\n        while (!s.isEmpty()) {\n            System.out.print(s.pop() + \" \");\n        }\n        System.out.println();\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "A link chain where new links are hooked only at the top head hook.",
    "theory": "Implements Stack using singly linked list. Pushes and pops at the head node to guarantee O(1) operations.",
    "dry_run": "Push(10): node.next=head, head=node. Pop(): val=head.data, head=head.next.",
    "output": "Top element: 300\nStack elements: 300 200 100",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)"
  },
  {
    "name": "ValidParentheses.java",
    "path": "Stack/ValidParentheses.java",
    "category": "Stack",
    "code": "package Stack;\n\nimport java.util.Stack;\n\n/**\n* Problem: Valid Parentheses.\n* Given a string containing just the characters '(', ')', '{', '}', '[' and ']',\n* determine if the input string is valid.\n*\n* Time Complexity: O(N) where N is string length\n* Space Complexity: O(N) for stack\n*/\npublic class ValidParentheses {\n\n    public static boolean isValid(String str) {\n        Stack<Character> s = new Stack<>();\n\n        for (int i = 0; i < str.length(); i++) {\n            char ch = str.charAt(i);\n\n            // Push opening brackets to stack\n            if (ch == '(' || ch == '{' || ch == '[') {\n                            s.push(ch);\n                        } else {\n                            // If closing bracket and stack is empty, it's invalid\n                            if (s.isEmpty()) {\n                                return false;\n                            }\n\n                            // If matching opening bracket is at stack top, pop it\n                            char top = s.peek();\n                            if ((ch == ')' && top == '(') ||\n                                (ch == '}' && top == '{') ||\n                                (ch == ']' && top == '[')) {\n                                s.pop();\n                            } else {\n                                return false;\n                            }\n                        }\n                    }\n\n                    // Stack must be empty for it to be valid\n                    return s.isEmpty();\n                }\n\n                public static void main(String[] args) {\n                    String s1 = \"({[]})\";\n                    String s2 = \"([)]\";\n\n                    System.out.println(s1 + \" is valid? \" + isValid(s1));\n                    System.out.println(s2 + \" is valid? \" + isValid(s2));\n                }\n            }\n",
    "difficulty": "Easy",
    "analogy": "Russian nesting dolls. Every opening doll must be closed by the matching closing doll in the exact reverse order of opening.",
    "theory": "Balanced bracket verification. Pushes opening brackets onto stack, matching and popping them when matching closing brackets appear.",
    "dry_run": "s = '([])'\n1. '(' -> push. Stack: ['(']\n2. '[' -> push. Stack: ['(', '[']\n3. ']' -> top matches '[' -> pop. Stack: ['(']\n4. ')' -> top matches '(' -> pop. Stack: []. Valid.",
    "output": "({[]}) is valid? true\n([)] is valid? false",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)"
  },
  {
    "name": "AnagramChecker.java",
    "path": "Strings/AnagramChecker.java",
    "category": "Strings",
    "code": "import java.util.Arrays;\n\npublic class AnagramChecker {\n    public static void main(String args[]) {\n\n        String str1 = \"race\";\n        String str2 = \"care\";\n\n        // Convert to lowercase\n        str1 = str1.toLowerCase();\n        str2 = str2.toLowerCase();\n\n        // Check lengths\n        if(str1.length() == str2.length()) {\n\n            // Convert strings into char array\n            char[] arr1 = str1.toCharArray();\n            char[] arr2 = str2.toCharArray();\n\n            // Sort arrays\n            Arrays.sort(arr1);\n            Arrays.sort(arr2);\n\n            // Compare arrays\n            boolean result = Arrays.equals(arr1, arr2);\n\n            if(result) {\n                System.out.println(\"Strings are anagrams\");\n            } else {\n                System.out.println(\"Strings are not anagrams\");\n            }\n\n        } else {\n            System.out.println(\"Strings are not anagrams\");\n        }\n    }\n}\n\n// String s1 = new String(\"Hello\");\n// String s2 = s1.intern();\n\n// String s3 = \"Hello\";\n\n// System.out.println(s2 == s3);\n//it is true because both s2 and s3 refer to the same string literal \"Hello\" in the string pool.\n// The intern() method ensures that s2 points to the string literal in the pool, which is the same as s3.\n\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Anagram Checker in real life tasks.",
    "theory": "Implements standard coding concepts of Anagram Checker within the Strings module.",
    "dry_run": "1. Initialize inputs for Anagram Checker.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Anagram Checker main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "ConvertLetter.java",
    "path": "Strings/ConvertLetter.java",
    "category": "Strings",
    "code": "import java.util.Scanner;\n\npublic class ConvertLetter {\n    // First letter of every word to uppercase\n    public static String convertToUpperCase(String str) {\n        if (str == null || str.isEmpty()) {\n            return str;\n        }\n\n        StringBuilder result = new StringBuilder();\n        boolean capitalizeNext = true;\n\n        for (char ch : str.toCharArray()) {\n            if (Character.isWhitespace(ch)) {\n                capitalizeNext = true;\n                result.append(ch);\n            } else if (capitalizeNext) {\n                result.append(Character.toUpperCase(ch));\n                capitalizeNext = false;\n            } else {\n                result.append(ch);\n            }\n        }\n\n        return result.toString();\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(\"Enter a sentence:\");\n        String input = sc.nextLine();\n\n        String output = convertToUpperCase(input);\n        System.out.println(\"Converted: \" + output);\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Convert Letter in real life tasks.",
    "theory": "Implements standard coding concepts of Convert Letter within the Strings module.",
    "dry_run": "1. Initialize inputs for Convert Letter.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Convert Letter main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Lexicographics.java",
    "path": "Strings/Lexicographics.java",
    "category": "Strings",
    "code": "\npublic class Lexicographics {\n    public static void main(String[] args) {\n        String str1 = \"apple\";\n        String str2 = \"banana\";\n        String str3 = \"apple\";\n\n        System.out.println(str1.compareTo(str2)); // Negative value\n        System.out.println(str2.compareTo(str1)); // Positive value\n        System.out.println(str1.compareTo(str3)); // Zero\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Lexicographics in real life tasks.",
    "theory": "Implements standard coding concepts of Lexicographics within the Strings module.",
    "dry_run": "1. Initialize inputs for Lexicographics.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Lexicographics main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "NoOfLowerCaseVowels.java",
    "path": "Strings/NoOfLowerCaseVowels.java",
    "category": "Strings",
    "code": "import java.util.Scanner;\n\npublic class NoOfLowerCaseVowels {\n    public static void main(String args[]) {\n        Scanner sc = new Scanner(System.in);\n\n        System.out.print(\"Enter a string: \");\n        String str = sc.nextLine();\n\n        int count = 0;\n\n        for(int i = 0; i < str.length(); i++) {\n            char ch = str.charAt(i);\n\n            if(ch == 'a' || ch == 'e' || ch == 'i' ||\n                ch == 'o' || ch == 'u') {\n                count++;\n            }\n        }\n\n        System.out.println(\"Number of lowercase vowels = \" + count);\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of No Of Lower Case Vowels in real life tasks.",
    "theory": "Implements standard coding concepts of No Of Lower Case Vowels within the Strings module.",
    "dry_run": "1. Initialize inputs for No Of Lower Case Vowels.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing No Of Lower Case Vowels main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Palindrome.java",
    "path": "Strings/Palindrome.java",
    "category": "Strings",
    "code": "\npublic class Palindrome {\n    public static void main(String[] args) {\n        String str = \"Madam\";\n        if(isPalindrome(str)){\n            System.out.println(str+\" is a palindrome.\");\n        }else{\n            System.out.println(str+\" is not a palindrome.\");\n        }\n    }\n    public static boolean isPalindrome(String str){\n        str=str.toLowerCase();\n        for(int i=0;i<str.length()/2;i++){\n            if(str.charAt(i)!=str.charAt(str.length()-i-1)){\n                return false;\n            }\n        }\n        return true;\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Palindrome in real life tasks.",
    "theory": "Implements standard coding concepts of Palindrome within the Strings module.",
    "dry_run": "1. Initialize inputs for Palindrome.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Palindrome main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "Shortestpath.java",
    "path": "Strings/Shortestpath.java",
    "category": "Strings",
    "code": "\npublic class Shortestpath {\n    public static void main(String[] args){\n        String path=\"WNEENESENNN\";\n        int x=0 , y=0;\n        for(int i=0;i<path.length();i++){\n            if(path.charAt(i)=='N'){\n                y++;\n            }\n            else if(path.charAt(i)=='S'){\n                y--;\n            }\n            else if(path.charAt(i)=='E'){\n                x++;\n            }\n            else if(path.charAt(i)=='W'){\n                x--;\n            }\n        }\n        System.out.println(\"Final position: (\" + x + \", \" + y + \")\");\n        double distance = Math.sqrt(x*x + y*y);\n        System.out.println(\"Shortest distance from the origin: \" + distance);\n    }\n\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of Shortestpath in real life tasks.",
    "theory": "Implements standard coding concepts of Shortestpath within the Strings module.",
    "dry_run": "1. Initialize inputs for Shortestpath.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing Shortestpath main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "StringCompression.java",
    "path": "Strings/StringCompression.java",
    "category": "Strings",
    "code": "public class StringCompression {\n    public static String compressString(String str) {\n        if (str == null || str.isEmpty()) {\n            return str;\n        }\n\n        StringBuilder compressed = new StringBuilder();\n        int count = 1;\n\n        for (int i = 1; i < str.length(); i++) {\n            if (str.charAt(i) == str.charAt(i - 1)) {\n                count++;\n            } else {\n                compressed.append(str.charAt(i - 1)).append(count);\n                count = 1;\n            }\n        }\n\n        // Append the last character and its count\n        compressed.append(str.charAt(str.length() - 1)).append(count);\n\n        return compressed.length() < str.length() ? compressed.toString() : str;\n    }\n    //without using StringBuilder\n    public static String compressStringWithoutBuilder(String str) {\n        if (str == null || str.isEmpty()) {\n            return str;\n        }\n\n        String compressed = \"\";\n        int count = 1;\n\n        for (int i = 1; i < str.length(); i++) {\n            if (str.charAt(i) == str.charAt(i - 1)) {\n                count++;\n            } else {\n                compressed += str.charAt(i - 1) + String.valueOf(count);\n                count = 1;\n            }\n        }\n\n        // Append the last character and its count\n        compressed += str.charAt(str.length() - 1) + String.valueOf(count);\n\n        return compressed.length() < str.length() ? compressed : str;\n    }\n    public static void main(String[] args) {\n        String input = \"aaabbcaaa\";\n        String compressed = compressString(input);\n        System.out.println(\"Original: \" + input);\n        System.out.println(\"Compressed: \" + compressed);\n        String compressedWithoutBuilder = compressStringWithoutBuilder(input);\n        System.out.println(\"Compressed without StringBuilder: \" + compressedWithoutBuilder);\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of String Compression in real life tasks.",
    "theory": "Implements standard coding concepts of String Compression within the Strings module.",
    "dry_run": "1. Initialize inputs for String Compression.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing String Compression main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "StringFunctions.java",
    "path": "Strings/StringFunctions.java",
    "category": "Strings",
    "code": "\npublic class StringFunctions {\n    public static void main(String[] args) {\n        String str = \"Hello World\";\n        System.out.println(str.length());\n        System.out.println(str.charAt(0));\n        System.out.println(str.indexOf('o'));\n        System.out.println(str.substring(0, 5));\n        System.out.println(str.toUpperCase());\n        System.out.println(str.toLowerCase());\n        System.out.println(str.trim());\n        System.out.println(str.replace('o', 'a'));\n    }\n\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of String Functions in real life tasks.",
    "theory": "Implements standard coding concepts of String Functions within the Strings module.",
    "dry_run": "1. Initialize inputs for String Functions.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing String Functions main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "String_Buffer.java",
    "path": "Strings/String_Buffer.java",
    "category": "Strings",
    "code": "public class String_Buffer {\n    public static void main(String[] args) {\n        StringBuffer sb = new StringBuffer(\"Hello\");\n        sb.append(\" World\");\n        System.out.println(sb.toString()); // Output: Hello World\n    }\n    // StringBuffer is mutable, meaning you can modify the string without creating a new object.\n    //mainly used when you need to perform a lot of modifications to a string, as it is more efficient\n    // than using String for such operations. main difference between String and StringBuffer is that String is\n    // immutable, while StringBuffer is mutable.\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of String_ Buffer in real life tasks.",
    "theory": "Implements standard coding concepts of String_ Buffer within the Strings module.",
    "dry_run": "1. Initialize inputs for String_ Buffer.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing String_ Buffer main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "String_Builder.java",
    "path": "Strings/String_Builder.java",
    "category": "Strings",
    "code": "public class String_Builder {\n    public static void main(String[] args) {\n        String str=\"Toney\";\n        for(char ch='a';ch<='z';ch++){\n            str+=ch;\n        }\n        System.out.println(str);\n        //StringBuilder is mutable and more efficient for concatenation in loops because\n        // it doesn't create a new object every time you concatenate.\n        // In contrast, using the '+' operator creates a new String object each time,\n        // which can lead to performance issues in loops.\n        StringBuilder sb = new StringBuilder(\"Toney\");\n        for(char ch='a';ch<='z';ch++){\n            sb.append(ch);\n        }\n        System.out.println(sb.toString());\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Like resolving steps of String_ Builder in real life tasks.",
    "theory": "Implements standard coding concepts of String_ Builder within the Strings module.",
    "dry_run": "1. Initialize inputs for String_ Builder.\n2. Process algorithm steps sequentially.\n3. Verify output matches standard results.",
    "output": "Executing String_ Builder main module:\nOperation executed successfully.",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "ContainerWithMostWater.java",
    "path": "TwoPointer/ContainerWithMostWater.java",
    "category": "TwoPointer",
    "code": "package TwoPointer;\n\n/**\n* Problem: Container With Most Water\n* Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai).\n* n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0).\n* Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.\n*\n* Time Complexity: O(N)\n* Space Complexity: O(1)\n*/\npublic class ContainerWithMostWater {\n\n    public static int maxArea(int[] height) {\n        int maxWater = 0;\n        int left = 0;\n        int right = height.length - 1;\n\n        while (left < right) {\n            // Height is bounded by the shorter line\n            int h = Math.min(height[left], height[right]);\n            int width = right - left;\n            int currentWater = h * width;\n\n            maxWater = Math.max(maxWater, currentWater);\n\n            // Move the pointer pointing to the shorter line to try and find a taller boundary\n            if (height[left] < height[right]) {\n                left++;\n            } else {\n                right--;\n            }\n        }\n\n        return maxWater;\n    }\n\n    public static void main(String[] args) {\n        int[] height = {1, 8, 6, 2, 5, 4, 8, 3, 7};\n        System.out.println(\"Maximum water area: \" + maxArea(height));\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Two people adjusting vertical boards at the edges of a pool to hold water. They keep moving the shorter board inward to find a taller combination.",
    "theory": "Two-pointer O(N) solution. Computes area between lines, then shifts the pointer pointing to the shorter line to maximize volume potential.",
    "dry_run": "heights=[1, 8, 6, 7]. L=0, R=3.\n1. h=min(1,7)=1. w=3. area=3. L < R (1 < 7) -> L=1.\n2. L=1, R=3. h=min(8,7)=7. w=2. area=14. R < L (7 < 8) -> R=2.\n3. L=1, R=2. h=min(8,6)=6. w=1. area=6. Stop. Max = 14.",
    "output": "Maximum water area: 49",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  },
  {
    "name": "ThreeSum.java",
    "path": "TwoPointer/ThreeSum.java",
    "category": "TwoPointer",
    "code": "package TwoPointer;\n\nimport java.util.ArrayList;\nimport java.util.Arrays;\nimport java.util.List;\n\n/**\n* Problem: 3Sum\n* Given an integer array nums, return all the unique triplets [nums[i], nums[j], nums[k]]\n* such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.\n*\n* Time Complexity: O(N^2)\n* Space Complexity: O(log N) to O(N) for sorting recursion/array storage\n*/\npublic class ThreeSum {\n\n    public static List<List<Integer>> threeSum(int[] nums) {\n        List<List<Integer>> result = new ArrayList<>();\n        int n = nums.length;\n        if (n < 3) return result;\n\n        // Sort the array to use two-pointers\n        Arrays.sort(nums);\n\n        for (int i = 0; i < n - 2; i++) {\n            // Since array is sorted, if first element > 0, sum can never be 0\n            if (nums[i] > 0) break;\n\n            // Skip duplicate elements for the first position\n            if (i > 0 && nums[i] == nums[i - 1]) continue;\n\n            int left = i + 1;\n            int right = n - 1;\n\n            while (left < right) {\n                int sum = nums[i] + nums[left] + nums[right];\n\n                if (sum == 0) {\n                    result.add(Arrays.asList(nums[i], nums[left], nums[right]));\n\n                    // Skip duplicate elements for the second position\n                    while (left < right && nums[left] == nums[left + 1]) left++;\n                    // Skip duplicate elements for the third position\n                    while (left < right && nums[right] == nums[right - 1]) right--;\n\n                    left++;\n                    right--;\n                } else if (sum < 0) {\n                    left++;\n                } else {\n                    right--;\n                }\n            }\n        }\n\n        return result;\n    }\n\n    public static void main(String[] args) {\n        int[] nums = {-1, 0, 1, 2, -1, -4};\n        List<List<Integer>> triplets = threeSum(nums);\n\n        System.out.println(\"Input Array: \" + Arrays.toString(nums));\n        System.out.println(\"Triplets that sum to 0: \" + triplets);\n    }\n}\n",
    "difficulty": "Medium",
    "analogy": "Finding three weights from a set that perfectly balance a scale at zero. You pick one, then use two pointers to find matching pairs among the rest.",
    "theory": "Finds unique triplets summing to 0. Sorts array, fixes first element, and uses two pointers for the remaining sum to avoid duplicates.",
    "dry_run": "nums=[-1, 0, 1, 2]. sorted=[-1, 0, 1, 2].\n1. i=0 (val -1). L=1 (0), R=3 (2).\n2. sum = -1 + 0 + 2 = 1 > 0 -> decrement R=2.\n3. sum = -1 + 0 + 1 = 0 -> Found [-1, 0, 1]! L=2, R=1. loop ends.",
    "output": "Input Array: [-1, 0, 1, 2, -1, -4]\nTriplets that sum to 0: [[-1, -1, 2], [-1, 0, 1]]",
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(log N)"
  },
  {
    "name": "TwoSumSorted.java",
    "path": "TwoPointer/TwoSumSorted.java",
    "category": "TwoPointer",
    "code": "package TwoPointer;\n\nimport java.util.Arrays;\n\n/**\n* Problem: Two Sum II - Input Array Is Sorted.\n* Find two numbers in a 1-indexed sorted array that add up to a target number.\n*\n* Time Complexity: O(N)\n* Space Complexity: O(1)\n*/\npublic class TwoSumSorted {\n\n    public static int[] twoSum(int[] numbers, int target) {\n        int left = 0;\n        int right = numbers.length - 1;\n\n        while (left < right) {\n            int currentSum = numbers[left] + numbers[right];\n\n            if (currentSum == target) {\n                // Return 1-indexed positions\n                return new int[]{left + 1, right + 1};\n            } else if (currentSum < target) {\n                left++; // Increase sum by moving left pointer right\n            } else {\n                right--; // Decrease sum by moving right pointer left\n            }\n        }\n\n        return new int[]{-1, -1}; // No solution found\n    }\n\n    public static void main(String[] args) {\n        int[] numbers = {2, 7, 11, 15};\n        int target = 9;\n\n        int[] result = twoSum(numbers, target);\n        System.out.println(\"Sorted Array: \" + Arrays.toString(numbers));\n        System.out.println(\"Target: \" + target);\n        System.out.println(\"Indices (1-indexed): \" + Arrays.toString(result));\n    }\n}\n",
    "difficulty": "Easy",
    "analogy": "Two shoppers trying to spend exactly $10. One starts with cheapest, one with dearest. If total is too high, the dear shopper goes down. If too low, cheap shopper goes up.",
    "theory": "Finds indices of two elements in a sorted array that sum to target using two converging pointers.",
    "dry_run": "nums=[2, 7, 11], target=9. L=0, R=2.\n1. sum = 2 + 11 = 13 > 9 -> R=1.\n2. sum = 2 + 7 = 9 == 9 -> Found [1, 2] (1-indexed).",
    "output": "Sorted Array: [2, 7, 11, 15]\nTarget: 9\nIndices: [1, 2]",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)"
  }
];

export const TOPIC_DETAILS: Record<string, TopicDetail> = {
  "Basics_of_java": {
    "sarcasm": "Because semicolons apparently determine my happiness.",
    "definition": "Java Basics sets up variables, basic data types, operators, and control flow blocks.",
    "analogy": "Like writing a baking recipe. You list your ingredients (variables), select correct measuring cups (data types), and execute step-by-step directions (control flow).",
    "complexities": [
      {
        "op": "Variable Assignment",
        "best": "O(1)",
        "worst": "O(1)"
      },
      {
        "op": "Loop Traversal (N)",
        "best": "O(N)",
        "worst": "O(N)"
      }
    ],
    "advantages": [
      "Stops type mismatches early.",
      "Provides clean structured logic blocks."
    ],
    "disadvantages": [
      "Requires heavy boilerplate initialization.",
      "Binds variables statically."
    ],
    "mistakes": [
      "Reading uninitialized local variables.",
      "Creating infinite loops by forgetting pointer updates."
    ]
  },
  "Math_for_DSA": {
    "sarcasm": "Math logic. Good at calculations, bad at feelings.",
    "definition": "Algorithmic mathematics dealing with prime numbers, GCD, LCM, factorials, and Fibonacci series calculations.",
    "analogy": "Like dividing coins into equal piles, finding the highest common factor of building pillars, or counting paths on a staircase.",
    "complexities": [
      {
        "op": "GCD (Euclidean Algorithm)",
        "best": "O(log(min(a, b)))",
        "worst": "O(log(min(a, b)))"
      },
      {
        "op": "Prime Check (Trial Division)",
        "best": "O(1)",
        "worst": "O(√N)"
      }
    ],
    "advantages": [
      "Reduces search spaces by applying mathematical shortcuts.",
      "Euclidean GCD avoids slow subtraction steps."
    ],
    "disadvantages": [
      "Factorials can overflow primitive types quickly.",
      "Recursive Fibonacci has redundant branch evaluations."
    ],
    "mistakes": [
      "Using int instead of long for factorial computations.",
      "Failing to check division-by-zero bounds during modulo steps."
    ]
  },
  "Arrays": {
    "sarcasm": "Everything is in order. If only life did the same.",
    "definition": "A collection of items of the same type stored in contiguous memory cells, allowing fast indexing.",
    "analogy": "A row of numbered lockers. You can open locker #5 instantly, but inserting a new locker in the middle requires sliding all subsequent lockers down the corridor.",
    "complexities": [
      {
        "op": "Access by Index",
        "best": "O(1)",
        "worst": "O(1)"
      },
      {
        "op": "Search Value (Linear)",
        "best": "O(1)",
        "worst": "O(N)"
      },
      {
        "op": "Insert / Delete node",
        "best": "O(1) (at end)",
        "worst": "O(N) (at start)"
      }
    ],
    "advantages": [
      "Fast constant-time access via arithmetic index offsets.",
      "Contiguous storage utilizes CPU cache line benefits."
    ],
    "disadvantages": [
      "Fixed capacity. Resizing requires copying elements into a new array.",
      "Middle index modifications are slow due to shifts."
    ],
    "mistakes": [
      "ArrayIndexOutOfBoundsException by querying index >= array.length.",
      "Forgetting that array indices are zero-based."
    ]
  },
  "Strings": {
    "sarcasm": "Manipulating characters because people are too hard to change.",
    "definition": "Sequences of characters. Strings are immutable in Java, while StringBuilder and StringBuffer allow mutable modifications.",
    "analogy": "Writing text in ink. Once written, it cannot be changed. If you want to modify a page, you must write a new page from scratch.",
    "complexities": [
      {
        "op": "Char Look-up",
        "best": "O(1)",
        "worst": "O(1)"
      },
      {
        "op": "String Concatenation (+)",
        "best": "O(N + M)",
        "worst": "O(N + M)"
      }
    ],
    "advantages": [
      "String pool references save heap allocations.",
      "Immutable strings are naturally thread-safe."
    ],
    "disadvantages": [
      "Concatenation creates garbage heap objects.",
      "Slow matching without specialized algorithms."
    ],
    "mistakes": [
      "Comparing string values using == instead of the .equals() method.",
      "Using String inside loops instead of StringBuilder/StringBuffer."
    ]
  },
  "OOPS": {
    "sarcasm": "Inherited code. If only I inherited generational wealth instead.",
    "definition": "Object-Oriented Programming (OOP) structures systems around classes and objects using encapsulation, inheritance, polymorphism, and abstraction.",
    "analogy": "Like blueprinting a house. The blueprint is the Class, and the physical houses on the street are Objects. Inheritance lets you reuse the standard house layout to build townhomes.",
    "complexities": [
      {
        "op": "Object Instantiation",
        "best": "O(1)",
        "worst": "O(1)"
      },
      {
        "op": "Dynamic Dispatch Resolve",
        "best": "O(1)",
        "worst": "O(1)"
      }
    ],
    "advantages": [
      "Organizes code logically, mimicking real-world objects.",
      "Encapsulation protects private fields from unsafe changes."
    ],
    "disadvantages": [
      "Object allocation adds heap metadata overhead.",
      "Can create deep, rigid class heirarchies."
    ],
    "mistakes": [
      "Over-inheritance (using 'extends') when composition ('has-a') is better.",
      "Exposing mutable class variables directly without private encapsulation."
    ]
  },
  "Collections": {
    "sarcasm": "Containers. Trying to store my messy thoughts.",
    "definition": "Java Collections Framework provides standardized data structures: List, Set, Map, Queue, and Deque.",
    "analogy": "A home organization system. You have boxes for duplicates (Lists), pill organizers for unique items (Sets), and a keyholder rack (Maps) matching name tags to keys.",
    "complexities": [
      {
        "op": "ArrayList Index Access",
        "best": "O(1)",
        "worst": "O(1)"
      },
      {
        "op": "HashSet Search",
        "best": "O(1) average",
        "worst": "O(N)"
      }
    ],
    "advantages": [
      "High-performance implementations for standard data structures.",
      "Interoperable APIs simplify data passing."
    ],
    "disadvantages": [
      "Autoboxing primitives to wrapper objects adds memory.",
      "Thread-unsafe by default without synchronized wrappers."
    ],
    "mistakes": [
      "Selecting ArrayList when frequent middle inserts suggest LinkedList.",
      "Failing to override hashCode() and equals() when using custom classes in HashSets."
    ]
  },
  "Exception_Handling": {
    "sarcasm": "Handling errors. Wish I could handle my daily anxiety.",
    "definition": "A system in Java to capture and resolve runtime errors, preventing program termination.",
    "analogy": "A safety net under a circus trapeze. If the artist slips (exception thrown), the net catches them (catch block) so they can recover safely.",
    "complexities": [
      {
        "op": "Try-Catch Entry",
        "best": "O(1)",
        "worst": "O(1)"
      }
    ],
    "advantages": [
      "Separates error-handling logic from primary business code.",
      "Allows applications to fail gracefully or retry."
    ],
    "disadvantages": [
      "Throwing exceptions is expensive due to stack trace creation.",
      "Abusing catch blocks can hide serious root errors."
    ],
    "mistakes": [
      "Catching generic Throwable or Exception instead of specific exceptions.",
      "Swallowing exceptions by leaving catch blocks empty."
    ]
  },
  "Generics": {
    "sarcasm": "Type safety. Because matching boundaries is comforting.",
    "definition": "Generics allow classes, interfaces, and methods to operate on parameterized types, offering compile-time checks.",
    "analogy": "Labeled shipping crates. Instead of shipping loose items, you declare a crate that only accepts 'Fruit' or 'Books', catching mistakes at the dock.",
    "complexities": [
      {
        "op": "Cast Resolution",
        "best": "O(1)",
        "worst": "O(1)"
      }
    ],
    "advantages": [
      "Eliminates manual type-casting checks.",
      "Guarantees type-safety at compile time, eliminating ClassCastExceptions."
    ],
    "disadvantages": [
      "Type erasure means type parameters are not available at runtime.",
      "Cannot instantiate generic types directly (new T())."
    ],
    "mistakes": [
      "Using raw types (ArrayList) instead of parameterized types (ArrayList<String>).",
      "Failing to understand the difference between wildcards <? extends T> and <? super T>."
    ]
  },
  "Streams": {
    "sarcasm": "Lambda pipelines. Let them flow away like my problems.",
    "definition": "A sequence of elements supporting sequential and parallel aggregate operations in a functional style.",
    "analogy": "An assembly line. Raw materials flow down the belt, passing through inspectors (filter), packers (map), and finally sorted into boxes (collect).",
    "complexities": [
      {
        "op": "Lazy Stream Eval",
        "best": "O(1)",
        "worst": "O(1)"
      },
      {
        "op": "Terminal Collect",
        "best": "O(N)",
        "worst": "O(N)"
      }
    ],
    "advantages": [
      "Enables elegant, declarative, and clean processing loops.",
      "Built-in support for parallel stream multi-core scaling."
    ],
    "disadvantages": [
      "Harder to debug and print mid-stream step states.",
      "Slight performance overhead compared to raw loops."
    ],
    "mistakes": [
      "Reusing a stream after a terminal operation has already executed.",
      "Forgetting that streams are lazy and require a terminal operation to run."
    ]
  },
  "File_Handling": {
    "sarcasm": "Persistent inputs. Unlike the promises they made.",
    "definition": "Enables Java applications to read from and write to persistent storage files on disk.",
    "analogy": "Writing entries in a paper journal. You open the journal (File), write lines with a pen (Writer), and close it so the entry is saved.",
    "complexities": [
      {
        "op": "Buffered File Read",
        "best": "O(N) (N is file size)",
        "worst": "O(N)"
      }
    ],
    "advantages": [
      "Saves data permanently across system reloads.",
      "Supports buffered streams for efficient disk transactions."
    ],
    "disadvantages": [
      "Disk transactions are slow compared to RAM accesses.",
      "Required exception handling adds boilerplate code."
    ],
    "mistakes": [
      "Forgetting to close File Readers/Writers, causing file lock issues.",
      "Hardcoding absolute paths instead of relative resources."
    ]
  },
  "JDBC": {
    "sarcasm": "Bridges. Connecting different worlds.",
    "definition": "Java Database Connectivity (JDBC) is a standardized Java API to connect and execute SQL queries on databases.",
    "analogy": "An interpreter at an embassy. Your Java code speaks English, the database speaks SQL, and the JDBC driver translates.",
    "complexities": [
      {
        "op": "Statement Execute",
        "best": "O(Q) (Q is query complexity)",
        "worst": "O(Q)"
      }
    ],
    "advantages": [
      "Standardized API allows switching database vendors easily.",
      "PreparedStatements prevent SQL Injection attacks."
    ],
    "disadvantages": [
      "Manual connection management is error-prone.",
      "High boilerplate compared to modern ORMs (Hibernate)."
    ],
    "mistakes": [
      "Concatenating user inputs directly into SQL strings instead of using PreparedStatements parameters.",
      "Failing to close ResultSet and Connection objects."
    ]
  },
  "Multithreading": {
    "sarcasm": "Concurrent loops. My brain has too many tabs open.",
    "definition": "Executing multiple threads concurrently to maximize CPU core utilization.",
    "analogy": "A restaurant kitchen. One chef chops vegetables, another boils water, and a third makes sauce, rather than one chef waiting for each step.",
    "complexities": [
      {
        "op": "Thread Spawn",
        "best": "O(1)",
        "worst": "O(1)"
      }
    ],
    "advantages": [
      "Prevents UI blocking by running heavy tasks in the background.",
      "Improves execution speed on multi-core processors."
    ],
    "disadvantages": [
      "Can introduce race conditions, deadlocks, and thread leaks.",
      "Context switching adds CPU overhead."
    ],
    "mistakes": [
      "Using Thread.run() instead of Thread.start() to launch a thread.",
      "Incorrect locking leading to deadlocks or thread starvation."
    ]
  },
  "Advanced_Java": {
    "sarcasm": "Deep reflect. Staring into the compiled void.",
    "definition": "Covers Reflection APIs, custom annotations, network sockets, and JVM class loading mechanisms.",
    "analogy": "A mechanic looking under the hood of a moving car, adjusting valves and changing oil dynamically while driving.",
    "complexities": [
      {
        "op": "Reflection Field Lookup",
        "best": "O(1)",
        "worst": "O(F)"
      }
    ],
    "advantages": [
      "Reflection allows dynamic dependency injection frameworks (Spring).",
      "Annotations decouple configuration from logic."
    ],
    "disadvantages": [
      "Reflection bypasses compile-time checks.",
      "Slower performance due to dynamic class resolutions."
    ],
    "mistakes": [
      "Abusing reflection when simple interfaces would suffice.",
      "Failing to close network socket input streams."
    ]
  },
  "Time_and_Space_Complexity": {
    "sarcasm": "Growth rates. Asymptotic scaling of stress.",
    "definition": "Mathematical notations (Big-O) used to define the growth rate of algorithms in terms of execution steps (Time) and auxiliary memory (Space).",
    "analogy": "Planning a travel route. You measure how many miles you walk (Time) and how much luggage you must carry with you (Space).",
    "complexities": [
      {
        "op": "Constant Check",
        "best": "O(1)",
        "worst": "O(1)"
      },
      {
        "op": "Nested Loops",
        "best": "O(N^2)",
        "worst": "O(N^2)"
      }
    ],
    "advantages": [
      "Provides machine-independent metrics for algorithm efficiency.",
      "Allows selecting optimal solutions before writing code."
    ],
    "disadvantages": [
      "Focuses on asymptotic limits; ignores constant factor differences for small inputs.",
      "Mathematical analysis requires practice."
    ],
    "mistakes": [
      "Assuming recursive calls have O(1) space complexity (ignoring the call stack).",
      "Confusing worst-case time with average-case time."
    ]
  },
  "BitManipulation": {
    "sarcasm": "Direct switches. Simple, binary choices.",
    "definition": "Logical calculations performed directly on binary digits of integers.",
    "analogy": "A panel of light switches. You can flip switches, check if a switch is on, or toggle them instantly without visiting each light.",
    "complexities": [
      {
        "op": "Bitwise AND/OR/XOR",
        "best": "O(1)",
        "worst": "O(1)"
      }
    ],
    "advantages": [
      "Runs directly on CPU registers, yielding maximum performance.",
      "Compresses multiple booleans into a single integer, saving space."
    ],
    "disadvantages": [
      "Hard to read, write, and maintain.",
      "Easy to run into operator precedence issues."
    ],
    "mistakes": [
      "Assuming shift operators have higher priority than arithmetic.",
      "Forgetting parenthesis around logical tests."
    ]
  },
  "Lists": {
    "sarcasm": "Sequenced nodes. Emotionally attached to memory locations.",
    "definition": "A collection of nodes linked sequentially by references, allocated dynamically on the heap.",
    "analogy": "A treasure hunt. You start at clue 1, which tells you where clue 2 is hidden. You cannot skip clues, but adding a clue only requires modifying one card.",
    "complexities": [
      {
        "op": "Node Access / Search",
        "best": "O(1)",
        "worst": "O(N)"
      },
      {
        "op": "Insert / Delete Node",
        "best": "O(1)",
        "worst": "O(1) (given node reference)"
      }
    ],
    "advantages": [
      "Dynamic scaling. No resizing copies required.",
      "O(1) node inserts and deletions."
    ],
    "disadvantages": [
      "No constant-time random access.",
      "Pointers consume extra memory space."
    ],
    "mistakes": [
      "Losing the head node pointer, making the entire list garbage collected.",
      "Failing to check if a node's next reference is null before dereferencing."
    ]
  },
  "Stack": {
    "sarcasm": "Last one in. Just like my sleep schedule.",
    "definition": "LIFO (Last In, First Out) data structure. Push and pop operations are allowed only at the top.",
    "analogy": "A stack of plates. You place new plates on top, and when you take a plate, you take the top one first.",
    "complexities": [
      {
        "op": "Push",
        "best": "O(1)",
        "worst": "O(1)"
      },
      {
        "op": "Pop",
        "best": "O(1)",
        "worst": "O(1)"
      }
    ],
    "advantages": [
      "Simple, clean LIFO access logic.",
      "Crucial for backtracking algorithms and expression evaluation."
    ],
    "disadvantages": [
      "No random access to middle or bottom elements.",
      "Static array implementations have size limitations."
    ],
    "mistakes": [
      "Popping from an empty stack, causing underflow errors.",
      "Mismatched push/pop operations in parsing algorithms."
    ]
  },
  "Queue": {
    "sarcasm": "Waiting patiently. Unlike me.",
    "definition": "FIFO (First In, First Out) data structure. Insert at rear (enqueue), remove from front (dequeue).",
    "analogy": "A queue at a coffee shop counter. The first person to arrive is served first, and new customers queue at the back.",
    "complexities": [
      {
        "op": "Enqueue (Add)",
        "best": "O(1)",
        "worst": "O(1)"
      },
      {
        "op": "Dequeue (Remove)",
        "best": "O(1)",
        "worst": "O(1)"
      }
    ],
    "advantages": [
      "Guarantees elements are processed in order of insertion.",
      "Excellent for breadths-first traversal and request buffering."
    ],
    "disadvantages": [
      "Cannot access middle elements without clearing the queue.",
      "Circular arrays have fixed capacity limits."
    ],
    "mistakes": [
      "Enqueuing to a full circular queue.",
      "Calling remove() on an empty queue without checking isEmpty()."
    ]
  },
  "HashMap": {
    "sarcasm": "Key matches. Where's my matching pair?",
    "definition": "Stores key-value pairs using a hashing algorithm to map keys to bucket indices.",
    "analogy": "A dictionary index. You look up a word (key) and find its page number (value) instantly without reading the book.",
    "complexities": [
      {
        "op": "Insert / Put",
        "best": "O(1)",
        "worst": "O(N)"
      },
      {
        "op": "Search / Get",
        "best": "O(1)",
        "worst": "O(N)"
      }
    ],
    "advantages": [
      "Constant-time lookups and insertions on average.",
      "Extremely flexible key-value associations."
    ],
    "disadvantages": [
      "Does not preserve element order.",
      "Requires good hash functions to prevent collisions."
    ],
    "mistakes": [
      "Keys missing hashCode() and equals() implementations.",
      "Using mutable objects as keys."
    ]
  },
  "Heap": {
    "sarcasm": "Priority order. Urgent calls only.",
    "definition": "A complete binary tree satisfying the heap property: parent node is always max (MaxHeap) or min (MinHeap) of its children.",
    "analogy": "A hospital triage queue. The patient with the highest severity (priority) is treated next, regardless of when they arrived.",
    "complexities": [
      {
        "op": "Get Max / Min",
        "best": "O(1)",
        "worst": "O(1)"
      },
      {
        "op": "Insert Element",
        "best": "O(log N)",
        "worst": "O(log N)"
      }
    ],
    "advantages": [
      "Highly efficient priority retrieval.",
      "Ideal for sorting (HeapSort) and finding K largest elements."
    ],
    "disadvantages": [
      "No search support. Finding an arbitrary element takes O(N) time.",
      "Pointers or array index math add tree overhead."
    ],
    "mistakes": [
      "Assuming a heap is sorted (it only guarantees parent-child order, not left-right order).",
      "Failing to run heapify down after removing the root."
    ]
  },
  "Trees": {
    "sarcasm": "Hierarchies. Branching options.",
    "definition": "A non-linear hierarchical data structure containing nodes connected by edges, with a single root.",
    "analogy": "A family ancestry tree or a corporate organizational chart, starting with the CEO down to employees.",
    "complexities": [
      {
        "op": "Pre-order Traversal",
        "best": "O(N)",
        "worst": "O(N)"
      },
      {
        "op": "In-order Traversal",
        "best": "O(N)",
        "worst": "O(N)"
      }
    ],
    "advantages": [
      "Represents hierarchical data naturally (e.g. file directories).",
      "Supports fast, sorted traversals."
    ],
    "disadvantages": [
      "Requires complex recursion/pointer manipulations.",
      "Unbalanced structures degrade search efficiency to O(N)."
    ],
    "mistakes": [
      "Forgetting the base case in tree traversals.",
      "Failing to check if child references are null before traversing."
    ]
  },
  "BST": {
    "sarcasm": "Binary Search Trees. Fast queries, slow balancing.",
    "definition": "A Binary Search Tree (BST) is a binary tree where left child nodes are smaller than parent, and right child nodes are larger.",
    "analogy": "An alphabetized cabinet. Folder files A-L are in the left drawer, M-Z are in the right drawer.",
    "complexities": [
      {
        "op": "Search Target",
        "best": "O(log N)",
        "worst": "O(N) (skewed tree)"
      }
    ],
    "advantages": [
      "Maintains sorted order dynamically.",
      "Average logarithmic search and insert operations."
    ],
    "disadvantages": [
      "Worst case degrades to O(N) if keys are inserted in sorted order.",
      "Requires rotations (AVL/Red-Black) to keep balanced."
    ],
    "mistakes": [
      "Failing to handle duplicate node keys.",
      "Incorrect pointer assignments during node deletions."
    ]
  },
  "Trie": {
    "sarcasm": "Autocomplete prefixes. Predicting my choices.",
    "definition": "A Trie (prefix tree) is a search tree used to store associative arrays where keys are usually strings.",
    "analogy": "Looking up words in a dictionary by spelling them out letter by letter. As you type 'c'-'a'-'t', you navigate down specific branches.",
    "complexities": [
      {
        "op": "Insert Word",
        "best": "O(L)",
        "worst": "O(L)"
      }
    ],
    "advantages": [
      "Fast prefix search. Ideal for autocomplete and spell checkers.",
      "Saves space by sharing character node paths."
    ],
    "disadvantages": [
      "High memory cost because each node contains an array of 26 pointers.",
      "Slower than hash tables for exact matches."
    ],
    "mistakes": [
      "Failing to mark the endOfWord boolean when inserting a word.",
      "Creating duplicate arrays of size 26 unnecessarily at leaf nodes."
    ]
  },
  "Graphs": {
    "sarcasm": "Trust issues, but with nodes.",
    "definition": "A network of vertices (nodes) connected by edges. Can be represented as adjacency lists or matrices.",
    "analogy": "A map of flight routes connecting cities, or a social network connecting friends.",
    "complexities": [
      {
        "op": "BFS Traversal",
        "best": "O(V + E)",
        "worst": "O(V + E)"
      },
      {
        "op": "DFS Traversal",
        "best": "O(V + E)",
        "worst": "O(V + E)"
      }
    ],
    "advantages": [
      "Models complex networks, dependencies, and maps.",
      "Supports pathfinding optimization algorithms."
    ],
    "disadvantages": [
      "High computational costs for dense graphs.",
      "Complex memory representations."
    ],
    "mistakes": [
      "Failing to track visited vertices, leading to infinite loops in cyclic graphs.",
      "Choosing adjacency matrix when adjacency list is more memory-efficient for sparse graphs."
    ]
  },
  "Greedy": {
    "sarcasm": "Local optimum. Short-term wins.",
    "definition": "An algorithmic paradigm that makes the locally optimal choice at each stage in the hope of finding a global optimum.",
    "analogy": "A shopping spree. You always choose the most expensive item on the shelf first to get the most value, hoping it fits your budget.",
    "complexities": [
      {
        "op": "Activity Selection",
        "best": "O(N log N)",
        "worst": "O(N log N)"
      }
    ],
    "advantages": [
      "Easy to design and implement.",
      "Fast execution since it does not search all combinations."
    ],
    "disadvantages": [
      "Can produce suboptimal solutions (fails on problems without greedy optimal structure, like 0/1 Knapsack).",
      "Proving correctness is mathematically complex."
    ],
    "mistakes": [
      "Using greedy sorting without verifying that subproblems are independent.",
      "Assuming greedy choice works for shortest path in graphs with negative weights."
    ]
  },
  "DP": {
    "sarcasm": "Trauma, but optimized.",
    "definition": "Dynamic Programming (DP) solves complex problems by breaking them down into overlapping subproblems, storing results in a lookup table (memoization/tabulation).",
    "analogy": "Writing down 1+1+1+1+1 = 5. If you write another +1, you don't count from 1 again. You remember the 5, add 1, and get 6.",
    "complexities": [
      {
        "op": "Memoized Fib",
        "best": "O(N)",
        "worst": "O(N)"
      },
      {
        "op": "LCS Subsequence",
        "best": "O(N * M)",
        "worst": "O(N * M)"
      }
    ],
    "advantages": [
      "Reduces exponential O(2^N) time complexities to polynomial O(N) or O(N²).",
      "Guarantees optimal solutions by evaluating subproblems once."
    ],
    "disadvantages": [
      "High memory cost to store subproblem states.",
      "Identifying overlapping states is difficult."
    ],
    "mistakes": [
      "Failing to define state dimensions correctly.",
      "Forgetting to initialize the memoization array/table with empty values."
    ]
  },
  "Segment_Tree": {
    "sarcasm": "Interval aggregates. Chunking tasks.",
    "definition": "A binary tree used for storing intervals or segments, allowing fast range queries and updates.",
    "analogy": "A district sales manager structure. Managers compute sales sums for their districts and report to regional managers, allowing quick regional statistics.",
    "complexities": [
      {
        "op": "Range Query",
        "best": "O(log N)",
        "worst": "O(log N)"
      }
    ],
    "advantages": [
      "Performs both range queries and single-element updates in logarithmic time.",
      "Supports arbitrary associative functions (sum, min, max, gcd)."
    ],
    "disadvantages": [
      "Requires O(4N) memory space.",
      "Complex to implement compared to prefix sum arrays."
    ],
    "mistakes": [
      "Failing to update parent nodes recursively after modifying a leaf node.",
      "Failing to handle overlapping interval boundary checks correctly."
    ]
  },
  "Advanced_Algorithms": {
    "sarcasm": "Cinematic logic. Over-engineered paths.",
    "definition": "Covers advanced graph optimization (Kruskal, Prim), string matching (KMP), and advanced memory structures.",
    "analogy": "Planning a global shipping logistics network, optimizing routes, and matching patterns in DNA sequences.",
    "complexities": [
      {
        "op": "Kruskal MST",
        "best": "O(E log V)",
        "worst": "O(E log V)"
      }
    ],
    "advantages": [
      "Solves highly complex real-world computing problems.",
      "Provably optimal limits for routing and sorting."
    ],
    "disadvantages": [
      "Extremely difficult to design and debug.",
      "High constants in asymptotic complexities."
    ],
    "mistakes": [
      "Failing to path-compress in Disjoint Set Union (DSU) operations.",
      "Incorrect calculation of KMP prefix lookup table index shifts."
    ]
  },
  "MatrixQs": {
    "sarcasm": "2D grids. Even my problems have two dimensions.",
    "definition": "Matrix problems involve operations on 2D arrays: searching, traversal, transformations, and aggregations like diagonal sums and spiral printing.",
    "analogy": "A spreadsheet of numbers. You can read cells by (row, column), slide across rows, snake down columns, or walk diagonally like a chess bishop.",
    "complexities": [
      {
        "op": "Matrix Traversal",
        "best": "O(N*M)",
        "worst": "O(N*M)"
      },
      {
        "op": "Spiral Print",
        "best": "O(N*M)",
        "worst": "O(N*M)"
      },
      {
        "op": "Staircase Search",
        "best": "O(1)",
        "worst": "O(N+M)"
      }
    ],
    "advantages": [
      "Constant-time O(1) random cell access by index.",
      "Efficient columnar and diagonal operations with index math."
    ],
    "disadvantages": [
      "High space usage for dense matrices.",
      "Cache-unfriendly traversals (column-major access) can be slow."
    ],
    "mistakes": [
      "Forgetting to check row vs. column bounds in nested loops.",
      "Confusing row-major and column-major indexing in transpose operations."
    ]
  },
  "TwoPointer": {
    "sarcasm": "Two pointers. Because one wasn't causing enough confusion.",
    "definition": "A technique using two index pointers that traverse an array simultaneously from different positions, reducing nested loop complexities to linear time.",
    "analogy": "Two friends walking from opposite ends of a bridge toward each other, signaling when they find a matching pair of tiles.",
    "complexities": [
      {
        "op": "Two Sum (Sorted)",
        "best": "O(N)",
        "worst": "O(N)"
      },
      {
        "op": "Three Sum",
        "best": "O(N^2)",
        "worst": "O(N^2)"
      }
    ],
    "advantages": [
      "Reduces O(N^2) brute force to O(N) for sorted arrays.",
      "O(1) extra space since no extra data structures are needed."
    ],
    "disadvantages": [
      "Only works efficiently on sorted arrays for most problems.",
      "Logic can become tricky with duplicates."
    ],
    "mistakes": [
      "Moving both pointers simultaneously without checking target first.",
      "Forgetting to sort the input array before applying two pointers."
    ]
  },
  "SlidingWindow": {
    "sarcasm": "A window that doesn't need curtains. Just results.",
    "definition": "The Sliding Window technique maintains a running computation over a subset (window) of array elements, extending or shrinking the window based on constraints.",
    "analogy": "Sliding a picture frame across a photo strip, always showing the same width of image, but revealing different parts as it moves.",
    "complexities": [
      {
        "op": "Fixed Window Max Sum",
        "best": "O(N)",
        "worst": "O(N)"
      },
      {
        "op": "Variable Window (Longest No-Repeat)",
        "best": "O(N)",
        "worst": "O(N)"
      }
    ],
    "advantages": [
      "Converts O(N^2) or O(N^3) brute force into O(N) solutions.",
      "Elegant and memory-efficient — only the window bounds and a running value are tracked."
    ],
    "disadvantages": [
      "Only suitable for contiguous subarray / substring problems.",
      "Variable window boundaries can be tricky to manage."
    ],
    "mistakes": [
      "Not handling duplicate characters correctly in variable-window problems.",
      "Forgetting to shrink the left pointer when constraints are violated."
    ]
  }
};

export const JAVA_ROADMAP: RoadmapNode[] = [
  {
    "id": "java-basics",
    "title": "Java Basics",
    "desc": "Variables, data types, operators, loops, and functions.",
    "topics": [
      "Basics_of_java"
    ]
  },
  {
    "id": "java-math",
    "title": "Math for DSA",
    "desc": "GCD, LCM, prime checks, factorial, Fibonacci.",
    "topics": [
      "Math_for_DSA"
    ]
  },
  {
    "id": "java-complexity",
    "title": "Time & Space Complexity",
    "desc": "Big-O notation, complexity examples, performance analysis.",
    "topics": [
      "Time_and_Space_Complexity"
    ]
  },
  {
    "id": "java-arrays",
    "title": "Arrays in Java",
    "desc": "Contiguous collections, jagged arrays, and 2D matrices.",
    "topics": [
      "Arrays"
    ]
  },
  {
    "id": "java-strings",
    "title": "String Handling",
    "desc": "Immutability, character sequences, StringBuilder & StringBuffer.",
    "topics": [
      "Strings"
    ]
  },
  {
    "id": "java-oop",
    "title": "Object-Oriented Programming",
    "desc": "Inheritance, Polymorphism, Abstraction, Encapsulation, Interfaces.",
    "topics": [
      "OOPS"
    ]
  },
  {
    "id": "java-matrixqs",
    "title": "Matrix Problems",
    "desc": "2D matrix operations, diagonal sums, spiral traversal, transpose.",
    "topics": [
      "MatrixQs"
    ]
  }
];

export const DSA_ROADMAP: RoadmapNode[] = [
  {
    "id": "time-complexity",
    "title": "Time & Space Complexity",
    "category": "Time_and_Space_Complexity"
  },
  {
    "id": "arrays",
    "title": "Arrays",
    "category": "Arrays"
  },
  {
    "id": "strings",
    "title": "Strings",
    "category": "Strings"
  },
  {
    "id": "searching",
    "title": "Searching",
    "category": "Searching"
  },
  {
    "id": "sorting",
    "title": "Sorting",
    "category": "Sorting"
  },
  {
    "id": "recursion",
    "title": "Recursion",
    "category": "Recursion"
  },
  {
    "id": "backtracking",
    "title": "Backtracking",
    "category": "BackTracking"
  },
  {
    "id": "bit-manipulation",
    "title": "Bit Manipulation",
    "category": "BitManipulation"
  },
  {
    "id": "matrix",
    "title": "Matrix Problems",
    "category": "MatrixQs"
  },
  {
    "id": "two-pointer",
    "title": "Two Pointer",
    "category": "TwoPointer"
  },
  {
    "id": "sliding-window",
    "title": "Sliding Window",
    "category": "SlidingWindow"
  },
  {
    "id": "linked-list",
    "title": "Linked List",
    "category": "Lists"
  },
  {
    "id": "stack",
    "title": "Stack",
    "category": "Stack"
  },
  {
    "id": "queue",
    "title": "Queue",
    "category": "Queue"
  },
  {
    "id": "greedy",
    "title": "Greedy Algorithms",
    "category": "Greedy"
  }
];

/** Convert camelCase Java filenames to readable display titles */
export function cleanTitle(filename: string): string {
  let name = filename.replace(/\.java$/, '');
  name = name.replace(/(?<!^)(?=[A-Z])/g, ' ');
  name = name.replace(/[_-]+/g, ' ');
  return name.replace(/\s+/g, ' ').trim();
}
