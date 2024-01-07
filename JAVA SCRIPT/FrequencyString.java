

public class FrequencyString {

	public static void main(String[] args) {
		String str="abcdefghijklmnopqrstufdsghhsjfgjhf";
		char[]str1=str.toCharArray();
		int fr[]=new int[str1.length];
		int count;
		for(int i=0;i<str1.length;i++){
			count=1;
			for(int j=i+1;j<str1.length;j++){
				if(str1[i]==str1[j]){
					count++;
					fr[j]=-1;}
			}	
					if(fr[i]!=-1){
						fr[i]=count;
					}
		}
					
					for(int i= 0;i<str1.length;i++){
						if(fr[i]!=-1){
							System.out.println(str1[i]+ " "+fr[i]);
						}
						
					}
					
				}
				
			}
		
		

	

