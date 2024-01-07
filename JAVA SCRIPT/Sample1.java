class Sample1{

public static void main(String[]args){

int arr[]={1,2,14,14,13,12};
int count=0;
int k=0;
for(int i=0;i<arr.length;i++){

for(int j=0;j<arr.length;j++){

if(arr[i]==arr[j]){

   count=arr[i]+arr[i];

k=count*arr[i];

}

}


}

System.out.println(k);


}}