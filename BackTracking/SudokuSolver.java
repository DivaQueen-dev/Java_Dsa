package BackTracking;

/**
* A standard Backtracking solution for the Sudoku Solver problem.
*
* Time Complexity: O(9^(N*N)) where N=9 (practically bounded)
* Space Complexity: O(N*N) for the board recursion stack
*/
public class SudokuSolver {

    // Check if it's safe to place a number at board[row][col]
    public static boolean isSafe(int[][] board, int row, int col, int digit) {
        // Row check
        for (int i = 0; i < 9; i++) {
            if (board[row][i] == digit) {
                return false;
            }
        }

        // Column check
        for (int i = 0; i < 9; i++) {
            if (board[i][col] == digit) {
                return false;
            }
        }

        // 3x3 Grid check
        int startRow = (row / 3) * 3;
        int startCol = (col / 3) * 3;
        for (int i = startRow; i < startRow + 3; i++) {
            for (int j = startCol; j < startCol + 3; j++) {
                if (board[i][j] == digit) {
                    return false;
                }
            }
        }

        return true;
    }

    // Backtracking method to solve Sudoku
    public static boolean solveSudoku(int[][] board, int row, int col) {
        // Base case: reached end of board
        if (row == 9) {
            return true;
        }

        // Move to next row if current row's columns are completed
        int nextRow = row;
        int nextCol = col + 1;
        if (col + 1 == 9) {
            nextRow = row + 1;
            nextCol = 0;
        }

        // If cell is already filled, move to next cell
        if (board[row][col] != 0) {
            return solveSudoku(board, nextRow, nextCol);
        }

        // Try placing digits from 1 to 9
        for (int digit = 1; digit <= 9; digit++) {
            if (isSafe(board, row, col, digit)) {
                board[row][col] = digit;
                if (solveSudoku(board, nextRow, nextCol)) {
                    return true;
                }
                // Backtrack
                board[row][col] = 0;
            }
        }

        return false;
    }

    public static void printBoard(int[][] board) {
        for (int i = 0; i < 9; i++) {
            if (i % 3 == 0 && i != 0) {
                System.out.println("---------------------");
            }
            for (int j = 0; j < 9; j++) {
                if (j % 3 == 0 && j != 0) {
                    System.out.print("| ");
                }
                System.out.print(board[i][j] + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int[][] board = {
            {5, 3, 0, 0, 7, 0, 0, 0, 0},
            {6, 0, 0, 1, 9, 5, 0, 0, 0},
            {0, 9, 8, 0, 0, 0, 0, 6, 0},
            {8, 0, 0, 0, 6, 0, 0, 0, 3},
            {4, 0, 0, 8, 0, 3, 0, 0, 1},
            {7, 0, 0, 0, 2, 0, 0, 0, 6},
            {0, 6, 0, 0, 0, 0, 2, 8, 0},
            {0, 0, 0, 4, 1, 9, 0, 0, 5},
            {0, 0, 0, 0, 8, 0, 0, 7, 9}
        };

        System.out.println("Original Sudoku Board:");
        printBoard(board);
        System.out.println("\nSolving...");

        if (solveSudoku(board, 0, 0)) {
            System.out.println("\nSolved Sudoku Board:");
            printBoard(board);
        } else {
            System.out.println("No solution exists.");
        }
    }
}
