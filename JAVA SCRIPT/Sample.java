	
class Sample{

public static void main(String[] args) {
		
		String str="hemalata";
		String[]s1=str.split("");
int count=1;
		for(int i=s1.length-1; i>=0; i--){
			System.out.print(s1[i]+ " ");
                     count++;
			
		}

System.out.print(count-1);
	}
}