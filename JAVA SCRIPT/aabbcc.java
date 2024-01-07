

public class aabbcc {
	public static void main(String[] args) {
		
	String str="aaabbbccc";
	for(int i=0;i<str.length();i++){
		int count=1;
		while(i<str.length()-1 && str.charAt(i)==str.charAt(i+1)){
			count++;
			i++;
		}System.out.print(count+" "+str.charAt(i));
	}

	}}
