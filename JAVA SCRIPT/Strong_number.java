

public class Strong_number {

	public static void main(String[] args) {

   for(int j=1;j<150;j++){
		int sum=0;
		int no=j;
		int copy=no;
		while(no!=0){
			int rem=no%10;
			sum=sum+fact(rem);
			no=no/10;
		}
		if(copy==sum){
			System.out.println("Strong number");
		}
		else{
			System.out.println("not a Strong number");
		}
	}
}
	private static int fact(int rem) {
		
		
		int fact=1;
		for(int i=rem;i>=1;i--){
			fact=fact*i;
		}
		return fact;
		// TODO Auto-generated method stub
		
	}
}
