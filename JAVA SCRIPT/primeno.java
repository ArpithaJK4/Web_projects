public class primeno {
    public static void main(String[] args) {
        int no=7;
        boolean flag=true;
        for (int i = 2; i < no/2; i++) {
            if(no%i==0){
                flag=false;
                break;
            }
        }
            if(flag==true){
                System.err.println("prime");
            }
            else{
                System.out.println("not a prime no");
            }
        }
    
}
