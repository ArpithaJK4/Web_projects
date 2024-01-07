public class Happy_number {

private static void rev(int no){
  int res=0;

        while(no!=0)
{
    int rem=no%10;
       res=res+rem*rem;
       no=no/10;
}    
if(res==7 ||res==1)
System.out.println("Happy number");
else
System.out.println("not a Happy number");

}
    public static void main(String[] args) {
        int no=145;
      while (no>10) {
         rev(no);
      }
      
    }

}
