public class Hello_java {
    public static void main(String[] args) {
        String str="hello java";
        String[]st=str.split(str);
        for (int i =st.length-1; i>=0; i--) {
            System.out.println(st[i]+ " ");
        }

    }
}
