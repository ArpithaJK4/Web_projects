class Armstrong_number{

public static void main(String[]args){

int no=32;
int no1=no;
int copy=no;
int count=1;
double sum=1;

while(no!=0){
no=no/10;
count++;


}
while(copy!=0){

int rem=copy%10;
sum=sum + Math.pow(rem,count);

copy=copy/10;
}
if(no1==sum){

System.out.println(" ArmStrong number");
}else{
System.out.println("Not a ArmStrong number");
}
}}