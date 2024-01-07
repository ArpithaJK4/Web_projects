public class Happy_Number  
{  
   public static int check_happy_number(int num){  
       int rem = 0, sum = 0;  
       while(num > 0){  
           rem = num%10;  
           sum = sum + (rem*rem);  
           num = num/10;  
       }  
       return sum;  
   }  
     
   public static void Main()  
   {  
       int num = 13;  
       int result = num;  
         
       while(result != 1 && result != 4){  
           result = check_happy_number(result);  
       }  
       if(result == 1)  
           Console.WriteLine(num + " : is a happy number");  
       else if(result == 4)  
           Console.WriteLine(num + " : is not a happy number");    
   }  
}  
