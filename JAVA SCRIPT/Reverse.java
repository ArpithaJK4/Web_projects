class  Reverse{

public static void main(String[]args){

String str="java";
char ch[]=str.c

String rev="";
int count=0;

for(int i=str.length()-1;i>=0;i--){

char ch=str.CharAt(i);
rev=rev+ch;


count++;
}

System.out.println(rev + " " +count);



}}