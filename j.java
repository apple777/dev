import static java.lang.System.out;
import java.util.Arrays;
import java.util.Comparator;

import java.util.Observable;
import java.util.Observer;






public abstract FormService<F extends Form> {
    public abstract void populate(F form);
}

public TestFormService extends FormService<TestForm> {
    @Override
    public void populate(TestForm form) {
      //populate
    }
}



class MessageBoard extends Observable {
  private String message;

  public String getMessage() {
    return message;
  }

  public void changeMessage(String message) {
    this.message = message;
    setChanged();
    notifyObservers(message);
  }

  public static void main(String[] args) {
    MessageBoard board = new MessageBoard();
    Student bob = new Student();
    Student joe = new Student();
    board.addObserver(bob);
    board.addObserver(joe);
    board.changeMessage("More Homework!");
  }
}

class Student implements Observer {
  public void update(Observable o, Object arg) {
    System.out.println("Message board changed: " + arg);
  }
}



public static void main(String[] args) {
  int f = 0;
  int g = 1;

  for(int i = 1; i <= 10; i++)
  {
    System.out.print(f + " ");
    f = f + g;
    g = f - g;
  } 

  System.out.println();
}



public class StupidComparator { 
    public static void main(String[] args) {
        // this is a value used (bound) by the inner class
        // note that it needs to be "final"
        final int numberToCompareTo=10;

        // this is an inner class that acts like a closure and uses one bound value
        Comparator<Integer> comp=new Comparator<Integer>() {
            public int compare(Integer a, Integer b) {
                int result=0;
                if (a<numberToCompareTo) result=result-1;
                if (b<numberToCompareTo) result=result+1;
                return result;
            }
        };

        Integer[] array=new Integer[] {1,10, 5 , 15, 6 , 20, 21, 3, 7};

        // this is a function call that takes the inner class "closure" as a parameter
        Arrays.sort(array,comp);

        for (int i:array) System.out.println(i);
    }
}









class child extends parent
{
    child(int a,int b)
    {
        int c=a-b;
        System.out.println("Difference="+c);
    }
}


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
