class Assignment
{
    public static int fun(int arr[][],int key)
        {
            //count of key in 2D array
            int count=0;
            for(int i=0;i<arr.length;i++)
            {
                for(int j=0;j<arr[i].length;j++)
                {
                    if(arr[i][j]==key)
                    {
                        count++;
                    }
                }
                
            }
            return count;
        }
        public static void fun2(int arr[][])
        {
            //sum of elements in 2nd row
            int sum=0;
            for(int i=0;i<arr[1].length;i++)
            {
                sum+=arr[1][i];
            }
            System.out.println(sum);

        }
        public static void fun3(int arr[][])
        {
            //transpose of a matrix
            int transpose[][]=new int[arr[0].length][arr.length];
            for(int i=0;i<arr.length;i++)
            {
                for(int j=0;j<arr[i].length;j++)
                {
                    transpose[j][i]=arr[i][j];
                }
            }//print the transpose
            for(int i=0;i<transpose.length;i++)
            {
                for(int j=0;j<transpose[i].length;j++)
                {                  
                      System.out.print(transpose[i][j]+" ");
                }     
                 System.out.println(); 
                          }
                      }
                                  
        public static void main(String[] args)
        {
            int arr[][]={{1,2,3},{4,3,6},{3,33,9},{3,3,3}};
            System.out.println(fun(arr,3));
            fun2(arr);
            fun3(arr);

        }
}
