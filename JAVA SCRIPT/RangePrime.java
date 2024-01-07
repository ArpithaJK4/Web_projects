class RangePrime{
public static void main(String[]args){

for(int i=0;i<20;i++){

int no=i;
boolean flag=true;
for(int j=2;j<no;j++){

if(no%i==0){
flag=false;
break;
}

}
if(flag){
System.out.println("Prime"+i);
}
else{
System.out.println("not a prime number"+i);
}

}
}}
