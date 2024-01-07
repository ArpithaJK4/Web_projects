public class palindrome {
    public static void main(String[] args) {
        int no=141;
        int res=0;
     int copy=no;
        while (no!=0) {
            int rem=no%10;
            res=(res*10)+rem;
            no=no/10;

            
        }
        if(copy==res){
           System.out.println("palindrome");
        }else{
            System.out.println("not a palindrome");
        }
    }
    
}
