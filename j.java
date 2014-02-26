import static java.lang.System.out;
 
public class HelloWorld {
    public static void main(String[] args) {

        out.println("Hello World!");
    }
}



class Foo {
    int bar(int a, int b) {
        return (a*2) + b;
    }
 
    int bar(int a) {
        return a*2;
    }
}