import java.util.*;
public class fibonacci{
    public static void main(String args[]){
        int n,k;
        Scanner snr= new Scanner(System.in);
        n=snr.nextInt();
        snr.close();
        int array[]=new int[n];
       
        array[0]=0;
        array[1]=1;
        for(k=2;k<n;k++)array[k]=array[k-1]+array[k-2];
       
        System.out.println("Nth number in Fibonacci series is "+array[n-1]);
    }
}