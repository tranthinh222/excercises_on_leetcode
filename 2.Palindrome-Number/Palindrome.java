import java.util.ArrayList;
import java.util.List;

public class Palindrome {
    static public boolean isPalindrome(int x) {
        if (x < 0)
            return false;
        else if (x >= 0 && x <= 9)
            return true;

        List<Integer> list = new ArrayList<>();
        while (x != 0)
        {
            list.add(x % 10);
            x /= 10;
        }

        int n = list.size() - 1;
        for (int i = 0; i < list.size(); i++)
        {
            if (list.get(i) != list.get(n))
                return false;
            n--;
        }

        return true;
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome(10));
        
    }
}
