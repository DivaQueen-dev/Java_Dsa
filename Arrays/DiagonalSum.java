public class DiagonalSum {
        public static int diagonalSum_1(int[][] matrix) {
            int sum = 0;
            for (int i = 0; i < matrix.length; i++) {
                for (int j = 0; j < matrix[0].length; j++) {
                    if (i == j || i + j == matrix.length - 1) {
                        sum += matrix[i][j];
                    }
                }
            }
            return sum;
        }
    public static int diagonalSum_2(int[][] matrix) {
        int sum = 0;
        for (int i = 0; i < matrix.length; i++) {
            sum += matrix[i][i];
            if (i != matrix.length - 1 - i) {
                sum += matrix[i][matrix.length - 1 - i];
            }
        }
        return sum;
    }
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        System.out.println("Diagonal Sum (Method 1): " + diagonalSum_1(matrix));
        System.out.println("Diagonal Sum (Method 2): " + diagonalSum_2(matrix));
    }
}
