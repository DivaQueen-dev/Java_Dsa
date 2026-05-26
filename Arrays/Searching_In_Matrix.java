public class Searching_In_Matrix {
    public static boolean staircasesearch(int[][]matrix,int key){
        int row=0,col=matrix[0].length-1;
        while(row<matrix.length && col>=0){
            if(matrix[row][col]==key){
                System.out.println("Element"+key+" found at index: "+row+","+col);
                 return true;
            }
            else if(matrix[row][col]>key){
                col--;
                System.out.println("Element"+key+" is smaller than current element. Moving left.");
            }
            else{
                row++;
                System.out.println("Element"+key+" is larger than current element. Moving down.");
            }
        }
        System.out.println("Element"+key+" not found in the matrix.");
        return false;
      
    }
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 4, 7, 11, 15},
            {2, 5, 8, 12, 19},
            {3, 6, 9, 16, 22},
            {10, 13, 14, 17, 24},
            {18, 21, 23, 26, 30}
        };
        int key = 5;
        boolean found = staircasesearch(matrix,key);
    
    }
}
//Time Complexity: O(n+m) where n is the number of rows and m is the number of columns in the matrix.
//Space Complexity: O(1) as we are using only a constant amount of extra space.
